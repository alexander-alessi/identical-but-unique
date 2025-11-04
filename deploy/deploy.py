#!/usr/bin/env python3

'''
S3/CloudFront deployment script (static assets only)

Author: Nicolas Alessi (updated)
Date:   October 30, 2025
'''

import argparse
import json
import time
import subprocess
import sys
import textwrap
import boto3
import logging
import colorlog
from pathlib import Path


# ----------------------------------------------------------------------
# Logging
# ----------------------------------------------------------------------
handler = colorlog.StreamHandler()
formatter = colorlog.ColoredFormatter(
    "%(log_color)s%(levelname)-8s%(reset)s %(blue)s%(message)s",
    datefmt=None,
    reset=True,
    log_colors={
        'DEBUG':    'cyan',
        'INFO':     'green',
        'WARNING':  'yellow',
        'ERROR':    'red',
        'CRITICAL': 'red,bg_white',
    },
    style='%'
)
handler.setFormatter(formatter)
LOGGER = logging.getLogger(__name__)
LOGGER.addHandler(handler)
LOGGER.setLevel(logging.INFO)


# ----------------------------------------------------------------------
# Helper – run external commands
# ----------------------------------------------------------------------
def _cmd(cmd_list, stdin=None, cmd_input=None, err_msg="Command Line Error", **kwargs):
    """Run a shell command and raise on failure."""
    proc = subprocess.Popen(
        cmd_list,
        stdin=stdin,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        **kwargs
    )
    out, err = proc.communicate(cmd_input)
    if proc.returncode != 0:
        err_output = err.decode().strip()
        LOGGER.error('Command failed: %s', err_output)
        raise IOError(f"{err_msg}\n{err_output}")
    return out.decode().strip()


# ----------------------------------------------------------------------
# Deploy
# ----------------------------------------------------------------------
def run_deploy(conf, env, proj_dir, profile):
    """
    Deploy only the five static assets to the target S3 bucket.

    Assets:
        - img/        → uploaded as folder
        - index.html
        - robots.txt
        - script.js
        - style.css
    """
    proj_path = Path(proj_dir).resolve()
    if not proj_path.exists():
        raise FileNotFoundError(f"Project directory not found: {proj_path}")

    LOGGER.info('Running deploy for environment: %s', env)

    # ---- load config -------------------------------------------------
    with open(conf) as f:
        c = json.load(f)

    bucket_url = c["environments"][env]["bucket_url"].rstrip("/")
    assets = [
        "img",
        "index.html",
        "robots.txt",
        "script.js",
        "style.css",
    ]

    # ---- sync each asset ------------------------------------------------
    for asset in assets:
        src_path = proj_path / asset
        if not src_path.exists():
            LOGGER.warning('Asset not found, skipping: %s', src_path)
            continue

        # For directories (like img/), sync to bucket_url/img/
        # For files, sync to bucket_url/<filename>
        if src_path.is_dir():
            dest = f"{bucket_url}/{asset}"
            LOGGER.info('Syncing directory: %s → %s', src_path, dest)
            _cmd([
                "aws", "s3", "sync", str(src_path), dest,
                "--profile", profile, "--delete"
            ], err_msg=f"Failed to sync directory: {asset}")
        else:
            # File: sync to bucket root
            LOGGER.info('Syncing file: %s → %s', src_path, bucket_url)
            _cmd([
                "aws", "s3", "sync", str(src_path.parent), bucket_url,
                "--profile", profile, "--delete",
                "--exclude", "*", "--include", asset
            ], err_msg=f"Failed to sync file: {asset}")

        LOGGER.info('Synced: %s', asset)

    # ---- re-upload index.html with no-cache headers -----------------
    index_src = proj_path / "index.html"
    if index_src.exists():
        LOGGER.info('Uploading index.html with no-cache headers')
        _cmd([
            "aws", "s3", "cp", str(index_src), bucket_url,
            "--profile", profile,
            "--cache-control", "max-age=0, no-cache, no-store, must-revalidate"
        ], err_msg="Failed to upload index.html with cache headers")
        LOGGER.info('index.html uploaded with no-cache headers')
    else:
        LOGGER.warning('index.html not found — skipping no-cache upload')

    # ---- CloudFront cache invalidation -------------------------------
    cf_distro = c["environments"][env]["cf_distro"]
    invalidation_path = "/*"    # Invalidate all paths
    timestamp = str(time.time()).replace(".", "")

    session = boto3.Session(profile_name=profile)
    client = session.client('cloudfront')

    try:
        response = client.create_invalidation(
            DistributionId=cf_distro,
            InvalidationBatch={
                'Paths': {
                    'Quantity': 1,
                    'Items': [invalidation_path]
                },
                'CallerReference': timestamp
            }
        )
        invalidation_id = response['Invalidation']['Id']
    except Exception as e:
        LOGGER.error("Failed to invalidate CloudFront cache")
        raise RuntimeError(f"CloudFront invalidation error: {e}") from e
    else:
        LOGGER.info(
            'Submitted CloudFront invalidation for %s (ID: %s)',
            cf_distro, invalidation_id
        )


# ----------------------------------------------------------------------
# CLI entry point
# ----------------------------------------------------------------------
def main(argv=None):
    parser = argparse.ArgumentParser(
        formatter_class=argparse.RawDescriptionHelpFormatter,
        description=textwrap.dedent("""\
            Deploy a minimal static site (img/, index.html, robots.txt, script.js, style.css)
            to S3 + CloudFront.

            Example:
              ./deploy.py --conf ./deploy.json --env prod --proj_dir /path/to/site --profile myaws
            """)
    )
    parser.add_argument("--conf", required=True,
                        help="Path to the JSON configuration file.")
    parser.add_argument("--env", required=True,
                        choices=["stag", "prod"],
                        help="Target environment: stag or prod.")
    parser.add_argument("--proj_dir", required=True,
                        help="Root directory containing the static assets.")
    parser.add_argument("--profile", required=True,
                        help="AWS CLI profile name (must exist in ~/.aws/credentials).")

    args = parser.parse_args(argv)

    run_deploy(
        conf=args.conf,
        env=args.env,
        proj_dir=args.proj_dir,
        profile=args.profile,
    )


if __name__ == "__main__":
    main(sys.argv[1:])