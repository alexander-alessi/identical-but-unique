/**
 * @file script.js
 * @author Alexander Alessi & Nicolas Alessi
 * @description Main JavaScript
 * @version 1.2.1
 * @date 2025-10-02
 *
 * @copyright Copyright (c) 2025 Alexander & Nicolas Alessi
 */

document.addEventListener('DOMContentLoaded', function() {

	// --- 1. Data Dictionary ---
	const schoolData = {
		'twins-to-frogs.com': {
			title: 'Our Story of Individuality',
			name: 'TCU',
			namePossessive: "TCU's",
			mascotIcon: '🐸',
			mascotPlural: 'Horned Frogs',
			primaryColor: '#8a4ed1', // Light Purple 
			secondaryColor: '#a67edc', // Slightly different purple
			timelineColor: '#4D1979',
			schoolFullName: 'Texas Christian University',
			alexVision: "My goal at TCU is to major in Entrepreneurship and minor in Management. Through the <a href='https://www.neeley.tcu.edu/Academic-Departments/Entrepreneurship-and-Innovation' target='_blank'>Neeley Department of Entrepreneurship and Innovation</a>, I want to build the operational skills needed to scale a team and turn innovative ideas into thriving businesses.",
			nicoVision: "I plan to major in Entrepreneurship and minor in Strategic Communication. At the <a href='https://schieffercollege.tcu.edu/' target='_blank'>Bob Schieffer College of Communication</a>, I want to explore how to deeply understand a user's needs and craft the product vision that brings a brand to life.",
			faviconUrl: 'img/favicons/frog.ico',
			alexResonance: "I am from California and would love the opportunity to live in Texas for college. I visited TCU in October and fell in love with the campus and surrounding area! TCU's close-knit community and emphasis on personal growth resonate strongly with me. The Neeley School's entrepreneurship programs also align perfectly with my aspirations to build and scale innovative businesses.",
			nicoResonance: "TCU's commitment to holistic education and community engagement resonates with me. I also really like the strong focus on religion and values at TCU, which align with my own upbringing and value system. I have lived in California my entire life, so I would love to experience a different state like Texas, which has a rich culture and history."
		},
		'twins-to-spartans.com': {
			title: 'Our Story of Individuality',
			name: 'Tampa',
			namePossessive: "Tampa's",
			mascotIcon: '⚔️',
			mascotPlural: 'Spartans',
			primaryColor: '#363737', // Black/Gray
			secondaryColor: '#B23A48', // Tampa's Red
			timelineColor: '#962832', // Slightly different red for the structural timeline
			schoolFullName: 'the University of Tampa',
			alexVision: "My goal at Tampa is to major in Entrepreneurship and minor in Management. Through the <a href='https://www.ut.edu/academics/sykes-college-of-business/centers-and-institutes/lowth-entrepreneurship-center' target='_blank'>Lowth Entrepreneurship Center</a>, I want to build the operational skills needed to scale a team and turn innovative ideas into thriving businesses.",
			nicoVision: "I plan to major in Entrepreneurship and minor in Strategic Communication. At the <a href='https://www.ut.edu/academics/college-of-arts-and-letters/communication-degrees' target='_blank'>Department of Communication</a>, I want to explore how to deeply understand a user's needs and craft the product vision that brings a brand to life.",
			faviconUrl: 'img/favicons/spartan.ico',
			alexResonance: "The Tampa area is a huge logistics hub and is home to many major corporations. With University of Tampa being located directly in the downtown business district, I'll be right in the middle of the action. The university's resources, including the Lowth Entrepreneurship Center, also align perfectly with my aspirations to build and scale innovative businesses while making new friends.",
			nicoResonance: "The University of Tampa campus, centered around Plant Hall, is an amazing landmark. Where better for me to focus on crafting brand narratives than in such a stunning place. Tampa is also experiencing massive growth and change and I'd love to be a part of that. Finally, the student body and entrepreneurship focus of UT really align with where I want to be at this point in my life."
		},
		'twins-to-trojans.com': {
			title: 'Our Story of Individuality',
			name: 'USC',
			namePossessive: "USC's",
			mascotIcon: '✌️',
			mascotPlural: 'Trojans',
			primaryColor: '#990000', // USC Cardinal Red
			secondaryColor: '#FFCC00', // USC Gold
			timelineColor: '#990000', // Cardinal Red for the structural timeline
			schoolFullName: 'the University of Southern California',
			alexVision: "My goal at USC is to major in Entrepreneurship and minor in Management. Through the <a href='https://www.marshall.usc.edu/departments/lloyd-greif-center-entrepreneurial-studies' target='_blank'>Greif Center for Entrepreneurial Studies</a>, I want to build the operational skills needed to scale a team and turn innovative ideas into thriving businesses.",
			nicoVision: "I plan to major in Entrepreneurship and minor in Strategic Communication. At the <a href='https://annenberg.usc.edu/' target='_blank'>Annenberg School for Communication</a>, I want to explore how to deeply understand a user's needs and craft the product vision that brings a brand to life.",
			faviconUrl: 'img/favicons/trojan.ico',
			alexResonance: "I've always dreamed of attending a university that not only studies business theory but actively churns out entrepreneurs. The kind of environment that produced leaders at startups like Snap and giants like Salesforce. I don't just want to study theories; I want to build. USC's ecosystem, with its deep connections to the Silicon Beach community, is the ideal place for me to transform my drive into successful innovations. At USC, I won't just be a student; I'll be a builder.",
			nicoResonance: "For any entrepreneur growing up in California, USC represents the ultimate convergence point. The university's focus on innovation and its location in the heart of Los Angeles provide an amazing environment for someone like me to further develop my creativity and storytelling, and become the digital product leader I aspire to be. I am also drawn to the hands-on environment of the Annenberg Innovation Lab and Media Center because they offer an unparalleled testing ground for ideas."
		},
		'twins-to-bulldogs.com': {
			title: 'Our Story of Individuality',
			name: 'Gonzaga',
			namePossessive: "Gonzaga's",
			mascotIcon: '',
			mascotSvg: '/img/mascots/bulldog.svg',
			mascotSvgColor: '#F8F8F8',
			mascotPlural: 'Bulldogs',
			primaryColor: '#041E42',    // Official Gonzaga Navy Blue
			secondaryColor: '#C8102E',  // Official Gonzaga Athletic Red
			timelineColor: '#041E42',   // Official Navy for structure
			schoolFullName: 'Gonzaga University',
			alexVision: "My goal at Gonzaga is to major in Entrepreneurship and minor in Management. Through the <a href='https://www.gonzaga.edu/school-of-business-administration/undergraduate/business-administration/entrepreneurship-innovation' target='_blank'>Hogan Entrepreneurial Leadership Program</a>, I want to build the operational skills needed to scale a team and turn innovative ideas into thriving businesses.",
			nicoVision: "I plan to major in Entrepreneurship and minor in Strategic Communication. At the <a href='https://www.gonzaga.edu/college-of-arts-sciences/departments/communication-studies' target='_blank'>Department of Communication Studies</a>, I want to explore how to deeply understand a user's needs and craft the product vision that brings a brand to life.",
			faviconUrl: 'img/favicons/bulldog.ico',
			alexResonance: "Spokane’s rising entrepreneurial scene, fueled by Gonzaga’s ties to the Inland Northwest, offers the ideal place for me to learn and grow. The Hogan Program’s focus on ethical leadership and real-world application aligns perfectly with my ambition to build businesses that are not only successful but also socially responsible.",
			nicoResonance: "Gonzaga’s emphasis on ethical communication and debate, rooted in Jesuit values, resonates with my core belief system. After years in California’s sun, the Pacific Northwest’s thoughtful pace—its culture, landscape, and community—feels like the right next step for me."
		},
		'twins-to-cougars.com': {
			title: 'Our Story of Individuality',
			name: 'CofC',
			namePossessive: "CofC's",
			mascotIcon: '',
			mascotSvg: '/img/mascots/cougar.svg',
			mascotSvgColor: '#bfa87c',
			mascotPlural: 'Cougars',
			primaryColor: '#660000',    // Official College of Charleston Maroon
			secondaryColor: '#bfa87c',  // Official College of Charleston Gold
			timelineColor: '#660000',   // Official Maroon for structure
			schoolFullName: 'the College of Charleston',
			alexVision: "My goal at the College of Charleston is to major in Entrepreneurship and minor in Management. Through the <a href='https://charleston.edu/school-business/centers-initiatives/center-entrepreneurship/' target='_blank'>Center for Entrepreneurship</a>, I want to build the operational skills needed to scale a team and turn innovative ideas into thriving businesses.",
			nicoVision: "I plan to major in Entrepreneurship and minor in Strategic Communication. At the <a href='https://charleston.edu/communication/index.php' target='_blank'>Department of Communication</a>, I want to explore how to deeply understand a user's needs and craft the product vision that brings a brand to life.",
			faviconUrl: 'img/favicons/cougar.ico',
			alexResonance: "The city of Charleston is beautiful and possesses a strong but almost undiscovered startup scene - a scene that I want to join and contribute to. The new entrepreneurship program at the College of Charleston is a perfect match for my ambitions to sharpen my entrepreneurial skills while learning from the best.",
			nicoResonance: "The College of Charleston's rich history (the 13th oldest university in the US!) combined with a foundational entrepreneurship program is the perfect place for me to mature as a student, an entrepreneur, and a future community leader. The city's vibrant culture and growing startup ecosystem also provide an ideal backdrop for me to explore new ideas and bring them to life."
		},
		'twins-to-panthers.com': {
			title: 'Our Story of Individuality',
			name: 'Chapman',
			namePossessive: "Chapman's",
			mascotIcon: '',
			mascotSvg: '/img/mascots/panther.svg',
			mascotPlural: 'Panthers',
			primaryColor: '#A50034',    // Official Chapman Red
			secondaryColor: '#231F20',  // Official Panther Black
			timelineColor: '#A50034',   // Official Red for structure
			schoolFullName: 'Chapman University',
			alexVision: "My goal at Chapman is to major in Entrepreneurship and minor in Management. Through the <a href='https://www.chapman.edu/research/institutes-and-centers/leatherby-center/entrepreneurship-curriculum.aspx' target='_blank'>Leatherby Center for Entrepreneurship</a>, I want to build the operational skills needed to scale a team and turn innovative ideas into thriving businesses.",
			nicoVision: "I plan to major in Entrepreneurship and minor in Strategic Communication. Within the <a href='https://www.chapman.edu/communication/index.aspx' target='_blank'>School of Communication</a>, I want to explore how to deeply understand a user's needs and craft the product vision that brings a brand to life.",
			faviconUrl: 'img/favicons/panther.ico',
			alexResonance: "Orange County’s entrepreneurial hub, with Chapman at its core, is where I want to study, learn and advance my entrepreneurial skills. The Leatherby Center’s incubator programs and startup resources align perfectly with my drive to build scalable businesses. Chapman also has small class sizes and small student to faculty ratios, which is exactly the type of learning environment I thrive in. I come from California roots and would love to study and live in a completely different part of the state.",
			nicoResonance: "Chapman's entrepreneurship programs stand out among its peers, with a strong focus on business formation and ethics, combined with interesting classes and incubator programs. The community surrounding the school also feels like a small town within a huge metropolis, which is just what I am looking for. Having lived my entire life in a smaller California town, I am eager to experience the activity, action, and unique urban-suburban culture of Orange County, which is one of the most unique environments in the state I call home."
		},
		'twins-to-pelicans.com': {
				title: 'Our Story of Individuality',
				name: 'Tulane',
				namePossessive: "Tulane's",
				mascotIcon: '',
				mascotSvg: '/img/mascots/pelican.svg',
				mascotSvgColor: '#F8F8F8',
				mascotPlural: 'Pelicans',
				primaryColor: '#004D3D',    // Official Tulane Olive Green 
				secondaryColor: '#006699',  // Official Tulane Sky Blue
				timelineColor: '#003322',   // Deep Tulane Green for structural elements
				schoolFullName: 'Tulane University',
				alexVision: "My core focus is on team building, resource allocation, and business strategy, which I plan to advance at the <a href='https://freeman.tulane.edu/' target='_blank'>A. B. Freeman School of Business</a> through the Management major and Entrepreneurial Business minor. I’ll sharpen these skills through the Entrepreneurship Specialization, hands-on prototyping in the Lepage Center MakerSpace, and pitching at the Tulane Business Model Competition judged by New Orleans VCs.",
				nicoVision: "As every competent product manager needs a strong understanding of business operations, I intend to pursue Business Administration as my primary major at the A. B. Freeman School of Business, with a second-choice major in Communication in the <a href='https://liberalarts.tulane.edu/' target='_blank'>School of Liberal Arts</a>. I’ll hone my ability to communicate with users and translate needs into product visions through the Product Management Certificate and live-client projects at the Phyllis M. Taylor Center for Social Innovation & Design Thinking.",
				faviconUrl: 'img/favicons/pelican.ico',
				alexResonance: "New Orleans’ resilient, improvisational spirit is the ultimate ops lab—I want to build ventures in a city that rebuilds itself daily. Tulane’s Freeman School and the vibrant New Orleans entrepreneurial ecosystem provide the perfect blend of rigorous academics and real-world startup access. The Lepage Center, MakerSpace, and Tulane Business Model Competition are exactly where I want to prototype, pitch, and scale my next ventures.",
				nicoResonance: "Tulane is the only place that combines deep product strategy training with direct access to a growing innovation hub. The Taylor Center’s design-thinking labs and the city’s startup scene will let me test user empathy at scale—turning insights into features that actually matter. I’m also drawn to New Orleans not just for Tulane, but for a city that epitomises the comeback story. I want to tell the same story as a young product leader and business founder."
		},
		'twins-to-huskies.com': {
			title: 'Our Story of Individuality',
			name: 'UW',
			namePossessive: "UW's",
			mascotIcon: '🐺',
			mascotPlural: 'Huskies',
			primaryColor: '#4B2E83',    // UW Purple
			secondaryColor: '#C8A872',  // UW Gold. Note: not pure gold for better contrast
			timelineColor: '#2F0082',   // Deep UW Purple for structure
			schoolFullName: 'the University of Washington',
			alexVision: "My goal at UW is to major in Entrepreneurship and minor in Management. Through the <a href='https://foster.uw.edu/centers/buerk-ctr-entrepreneurship/' target='_blank'>Buerk Center for Entrepreneurship</a>, I want to build the operational skills needed to scale a team and turn innovative ideas into thriving businesses.",
			nicoVision: "I plan to major in Entrepreneurship and minor in Strategic Communication. At the <a href='https://com.uw.edu/' target='_blank'>Department of Communication</a>, I want to explore how to deeply understand a user's needs and craft the product vision that brings a brand to life.",
			faviconUrl: 'img/favicons/husky.ico',
			alexResonance: "Seattle is home to some of the most famous technology startups the world has ever known, like Microsoft and Amazon. This is the perfect place to gain inspiration while learning from the amazing teachers and programs that UW has to offer. The University's proximity to this startup ecosystem, combined with the Buerk Center’s hands-on startup programs, are the perfect ingredients to power my entrepreneurial journey.",
			nicoResonance: "UW’s blend of innovation and entrepreneurship, set against Seattle’s creative energy, is where I can see myself thriving as a product leader. The Department of Communication and the CoMotion incubator offer the ideal lab to test ideas with real users. I also love the pacific northwest. Having lived my entire life in California, I would welcome the opportunity to experience a completely different geography, culture and climate and Seattle is one of most unique environments in the country."
		},
		'identical-but-unique.com': {
			title: 'Our Story of Individuality',
			name: 'UC',
			namePossessive: "the UC's",
			mascotIcon: '🎓',
			mascotPlural: 'UC students',
			primaryColor: '#005696', // Royal Blue
			secondaryColor: '#FDB515', // UC Gold
			timelineColor: '#003262', // Structural (Darker UC Navy Blue)
			iconBgColor: '#CBCBCB', // Light grey background for visibility
			schoolFullName: 'the University of California',
			alexVision: "My goal in the UC system is to major in Business and minor in Management. I want to build the operational skills needed to scale a team, manage resources effectively, and turn innovative ideas into thriving businesses.",
			nicoVision: "I plan to major in Business and minor in Strategic Communication. I want to explore how to deeply understand a user's needs and craft the product vision and narrative that brings a brand to life.",
			faviconUrl: 'img/favicons/gradcap.ico',
			alexResonance: "For me, the University of California system represents the pinnacle of public universities. Growing up with parents who attended UC Davis (go Aggies!), I learned early about the economic value, strong education and community strength of the UC system. I am drawn to the sheer scale of the system's innovation, which provides an unparalleled environment, among so many diverse campuses, to launch and test entrepreneurial ventures.",
			nicoResonance: "My dream of attending a UC is deeply personal, stemming from a family legacy that began at UC Davis. As an aspiring product leader, eager to make a difference, I am drawn to the system not just for its academic excellence, but for its strong mission to serve the entire state. The UCs comprise five of the nation's top public universities, and their alumni define the California landscape. I want to contribute and be a part of that narrative."
		},
		'default': {
			title: 'Our Story of Individuality',
			name: 'College',
			namePossessive: "a",
			mascotIcon: '🎓',
			mascotPlural: 'students',
			primaryColor: '#178F59', // Neutral, sophisticated forest green
			secondaryColor: '#5C6F82', // Neutral slate gray
			timelineColor: '#363737', // Dark structural gray
			iconBgColor: '#CBCBCB', // Light grey background for visibility
			schoolFullName: 'one of our nation\'s top universities',
			alexVision: "My goal in college is to major in Entrepreneurship and minor in Management. I want to build the operational skills needed to scale a team, manage resources effectively, and turn innovative ideas into thriving businesses.",
			nicoVision: "I plan to major in Entrepreneurship and minor in Strategic Communication. I want to explore how to deeply understand a user's needs and craft the product vision and narrative that brings a brand to life.",
			faviconUrl: 'img/favicons/gradcap.ico',
			alexResonance: "I view a top university as the essential proving ground for my operational skills. I need the rigorous academic structure and mentorship required to refine my systems-thinking and build scalable ventures—a direct result of the costly lessons learned from my earliest failures.",
			nicoResonance: "The college environment provides the essential platform to deeply study the human element behind every market failure and success. I want to leverage both theoretical knowledge and practical training to master user empathy and narrative design, skills required to launch a compelling product that truly resonates with its audience.",
		}
	};

	// Domain Detection & Content Application ---
	const hostname = window.location.hostname;
	const data = schoolData[hostname] || schoolData['default'];

	// Dynamically sets the favicon based on the school
	if (data.faviconUrl) {
		const link = document.createElement('link');
		link.rel = 'icon';
		// Use the .ico file format and set the correct mime type
		link.type = 'image/x-icon'; 
		link.href = data.faviconUrl;
		document.head.appendChild(link);
	}

	// Set the title
	document.title = `Twins to ${data.mascotPlural} — Alexander & Nicolas Alessi`;

	// Set the dynamic CSS variables on the root HTML element
	document.documentElement.style.setProperty('--alex-brand-color', data.primaryColor);
	document.documentElement.style.setProperty('--nico-brand-color', data.secondaryColor);
	document.documentElement.style.setProperty('--main-structural-color', data.timelineColor);

	// Set the core structural color for the page
	document.documentElement.style.setProperty('--timeline-color', data.timelineColor);

	// Icon Styling
	const iconBg = data.iconBgColor || data.timelineColor;
	document.documentElement.style.setProperty('--icon-bg-color', iconBg);

	// Set a variable for the actual EMOJI/TEXT color inside the icon circle
	const iconFg = (data.iconBgColor === '#FFFFFF') ? data.timelineColor : 'white';
	document.documentElement.style.setProperty('--icon-fg-color', iconFg);

	// Update the content based on the data
	document.getElementById('page-title').innerHTML = data.title;
	document.getElementById('school-name').innerHTML = data.name;
	document.getElementById('school-name-possessive').innerHTML = data.namePossessive;
	document.getElementById('mascot-name-plural').innerHTML = data.mascotPlural;
	document.getElementById('alex-vision').innerHTML = data.alexVision;
	document.getElementById('nico-vision').innerHTML = data.nicoVision;
	document.getElementById('school-full-name').innerHTML = data.schoolFullName;
	document.getElementById('alex-why').innerHTML = data.name;
	document.getElementById('nico-why').innerHTML = data.name;
	document.getElementById('alex-resonance').innerHTML = data.alexResonance;
	document.getElementById('nico-resonance').innerHTML = data.nicoResonance;

	// Special logic for the Mascot Icon (can be emoji or SVG)
	const mascotContainer = document.getElementById('mascot-icon');
	if (data.mascotSvg) {
		fetch(data.mascotSvg)
			.then(r => r.text())
			.then(svgText => {
				const parser = new DOMParser();
				const svgDoc = parser.parseFromString(svgText, 'image/svg+xml');
				const svg = svgDoc.querySelector('svg');

				if (svg) {
					svg.style.width = '70%';
					svg.style.height = '70%';

					// CLEAR the container first
					mascotContainer.innerHTML = '';
					mascotContainer.appendChild(svg);

					// If the SVG has a mascot-fill element, set its fill color
					// If not, then mascotSvgColor does not need to be defined in
					// the data dictionary.
					const mascotPath = svg.querySelector('#mascot-fill');
					if (mascotPath) {
						mascotPath.setAttribute('fill', data.mascotSvgColor);
					}
				}
			})
			.catch(() => {
				mascotContainer.innerHTML = data.mascotIcon;
			});
	} else {
		mascotContainer.innerHTML = data.mascotIcon;
	}

	// Animation Logic
	const animatedElements = document.querySelectorAll('.timeline-event, .origin-node, .reconvergence-node');
	const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('visible');
				observer.unobserve(entry.target); 
			}
		});
	}, { 
		threshold: 0.2
	});

	animatedElements.forEach(element => {
		observer.observe(element);
	});
});

// Height sync for .individual-statements
function syncStatementHeights() {
	const statements = document.querySelectorAll('.individual-statements .statement');
	if (statements.length < 2) return;
	if (window.innerWidth <= 768) return;

	// Reset heights
	statements.forEach(s => {
		s.style.minHeight = '';
		s.style.height = '';
	});

	// Map corresponding rows: [alex, nico, alex, nico, ...]
	const rows = [
		statements[0].children[1], statements[1].children[1], // h4: Vision
		statements[0].children[2], statements[1].children[2], // p: vision text
		statements[0].children[3], statements[1].children[3], // h4: Why?
		statements[0].children[4], statements[1].children[4]  // p: resonance text
	];

	// Sync each pair
	for (let i = 0; i < rows.length; i += 2) {
		const el1 = rows[i];
		const el2 = rows[i + 1];
		if (!el1 || !el2) continue;

		// Reset
		el1.style.height = '';
		el2.style.height = '';

		// Measure and apply max height
		const maxH = Math.max(el1.offsetHeight, el2.offsetHeight);
		if (maxH > 0) {
			el1.style.height = maxH + 'px';
			el2.style.height = maxH + 'px';
		}
	}
}

// Run on load
document.addEventListener('DOMContentLoaded', syncStatementHeights);

// Run on resize (debounced)
window.addEventListener('resize', () => {
	clearTimeout(window._syncTimer);
	window._syncTimer = setTimeout(syncStatementHeights, 100);
});

// Run after reconvergence node animates in
const reconObserver = new IntersectionObserver((entries) => {
	if (entries[0].isIntersecting) {
		setTimeout(syncStatementHeights, 700); // Wait for fade-in
		reconObserver.unobserve(entries[0].target);
	}
}, { threshold: 0.3 });

const reconNode = document.querySelector('.reconvergence-node');
if (reconNode) reconObserver.observe(reconNode);