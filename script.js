// Application State
let currentSection = 'hero';
let nextSection = null;
let isRevealing = false;
let revealCenter = { x: 50, y: 50 };
let language = 'en';
let aboutAnimationReady = false;

// Content Data
const sections = [
    { id: 'hero', name: { en: 'Home', fr: 'Accueil' }, icon: 'home' },
    { id: 'about', name: { en: 'About', fr: 'À Propos' }, icon: 'user' },
    { id: 'portfolio', name: { en: 'Portfolio', fr: 'Portfolio' }, icon: 'briefcase' },
    { id: 'contact', name: { en: 'Contact', fr: 'Contact' }, icon: 'message-circle' },
];

const portfolioItems = {
    en: [
        {
            title: 'BigWatts',
            type: 'Full-Stack Web App',
            description: 'A green energy marketplace connecting certified providers with property owners. Built with Django, React, and PostgreSQL.',
            image: 'images/bigwatts.png',
            liveLink: 'https://bigwatts.vercel.app/',
            githubLink: 'https://github.com/ariastoryreport-wq/bigwatts',
            icon: 'zap'
        },
        {
            title: 'Python Quiz App',
            type: 'Programming',
            description: 'Terminal quiz with Google Sheets API integration.',
            image: 'images/python.png',
            liveLink: '',
            githubLink: 'https://github.com/Aria-vero-s/enviro',
            icon: 'code'
        },
        {
            title: 'C Arcade Game',
            type: 'Programming',
            description: 'A retro pixel arcade game made entirely with C programming.',
            image: 'images/game.png',
            liveLink: '',
            githubLink: 'https://github.com/Aria-vero-s/so_long',
            icon: 'code'
        }
    ],
    fr: [
        {
            title: 'BigWatts',
            type: 'Application Web Full-Stack',
            description: 'Une marketplace d\'énergie verte connectant des prestataires certifiés avec des propriétaires. Développée avec Django, React et PostgreSQL.',
            image: 'images/bigwatts.png',
            liveLink: 'https://bigwatts.vercel.app/',
            githubLink: 'https://github.com/ariastoryreport-wq/bigwatts',
            icon: 'zap'
        },
        {
            title: 'Application Quiz Python',
            type: 'Programmation',
            description: 'Quiz en terminal avec intégration de l\'API Google Sheets.',
            image: 'images/python.png',
            liveLink: '',
            githubLink: 'https://github.com/Aria-vero-s/enviro',
            icon: 'code'
        },
        {
            title: 'Jeu d\'Arcade en C',
            type: 'Programmation',
            description: 'Un jeu d\'arcade rétro en pixels, entièrement programmé en C.',
            image: 'images/game.png',
            liveLink: '',
            githubLink: 'https://github.com/Aria-vero-s/so_long',
            icon: 'code'
        }
    ]
};

const skills = {
    en: [
        { name: 'HTML/CSS', percentage: 90 },
        { name: 'JavaScript', percentage: 82 },
        { name: 'Python', percentage: 80 },
        { name: 'C/C++', percentage: 85 },
        { name: 'Design & Branding', percentage: 92 },
        { name: 'Adobe Creative Suite', percentage: 88 },
    ],
    fr: [
        { name: 'HTML/CSS', percentage: 90 },
        { name: 'JavaScript', percentage: 82 },
        { name: 'Python', percentage: 80 },
        { name: 'C/C++', percentage: 85 },
        { name: 'Design & Branding', percentage: 92 },
        { name: 'Adobe Creative Suite', percentage: 88 },
    ]
};

const content = {
    en: {
        hero: {
            subtitle: 'UI/UX Designer • Web Developer • Creative Thinker',
            tagline: 'I help freelancers and small businesses grow online with simple, beautiful websites. From small static websites to full builds on Shopify, Wix, WordPress, or Webflow—I handle it all, start to finish, within your budget.',
            learnMore: 'Learn More',
            viewPortfolio: 'View Portfolio'
        },
        about: {
            title: 'About',
            description: 'Ariane is a programming and development student at École 42 Paris, with a background in music education and a passion for UI/UX design. She has experience creating clean, user-friendly websites for small businesses and freelancers. Detail-oriented and motivated, she is currently a UI/UX designer at BeautifulCalf Productions. She combines artistic vision and technical skills to build effective digital experiences.',
            education: 'Education:',
            educationItems: [
                'Currently studying at Ecole 42, Paris',
                'Graduate from Code Institute, London'
            ],
            experience: 'Experience:',
            experienceItems: [
                'UI/UX web developer for BeautifulCalf Productions',
                'Freelance Web designer (View portfolio)'
            ],
            skillsTitle: 'Skills'
        },
        portfolio: {
            title: 'Portfolio',
            liveDemo: 'Live Demo',
            viewCode: 'GitHub'
        },
        contact: {
            title: 'Get In Touch',
            subtitle: 'Whether it\'s a website, a tool, or a small project, I\'d love to help. I enjoy turning ideas into reality and solving problems with design, code, and creativity, both for individuals and for teams.',
            github: 'GitHub',
            linkedin: 'LinkedIn',
            formTitle: 'Send a Message',
            nameLabel: 'Name',
            emailLabel: 'Email',
            messageLabel: 'Message',
            messagePlaceholder: 'Tell me about your project...',
            sendButton: 'Send Message'
        }
    },
    fr: {
        hero: {
            subtitle: 'UI/UX Designer • Développeuse Web • Conceptrice Créative',
            tagline: 'J\'aide les freelances et les petites entreprises à se développer en ligne grâce à des sites web simples et élégants. Qu\'il s\'agisse de petits sites statiques ou de créations complètes sur Shopify, Wix, WordPress ou Webflow—je m\'occupe de tout, de A à Z, dans le respect de votre budget.',
            learnMore: 'En Savoir Plus',
            viewPortfolio: 'Voir Portfolio'
        },
        about: {
            title: 'À Propos',
            description: 'Ariane est étudiante en programmation et développement à l\'École 42 Paris, avec un parcours en éducation musicale et une passion pour le design UI/UX. Elle a de l\'expérience dans la création de sites clairs et conviviaux pour petites entreprises et freelances. Rigoureuse et motivée, elle est actuellement UI/UX designer chez BeautifulCalf Productions. Elle allie vision artistique et compétences techniques pour créer des expériences digitales efficaces.',
            education: 'Formation :',
            educationItems: [
                'Actuellement étudiante à l\'École 42, Paris',
                'Diplômée du Code Institute, Londres'
            ],
            experience: 'Expérience :',
            experienceItems: [
                'Développeuse web UI/UX pour BeautifulCalf Productions',
                'Designer web freelance (Voir portfolio)'
            ],
            skillsTitle: 'Compétences'
        },
        portfolio: {
            title: 'Portfolio',
            liveDemo: 'Démo Live',
            viewCode: 'GitHub'
        },
        contact: {
            title: 'Contactez-Moi',
            subtitle: 'Que ce soit un site web, un outil ou un petit projet, je serais ravie de vous aider. J\'aime transformer les idées en réalité et résoudre des problèmes grâce au design, au code et à la créativité, pour les particuliers comme pour les équipes.',
            github: 'GitHub',
            linkedin: 'LinkedIn',
            formTitle: 'Envoyer un Message',
            nameLabel: 'Nom',
            emailLabel: 'Email',
            messageLabel: 'Message',
            messagePlaceholder: 'Parlez-moi de votre projet...',
            sendButton: 'Envoyer le Message'
        }
    }
};

// Global circuit animation state - preserve across transitions
let circuitAnimationInitialized = false;
let circuitAnimationTimer = null;

// Circuit Pattern Animation
// Builds the circuit paths using real pixel coordinates so the pattern
// stretches to fill any viewport aspect-ratio without cropping or
// distorting stroke widths.

function buildCircuitData(w, h) {
    // Bump size in pixels – the small zigzag offsets on the traces
    const b = Math.min(w, h) * 0.03; // ~3 % of the smallest dimension

    // Percentage-based anchor positions (same visual layout as before)
    const x = {
        outer1: w * 0.05,
        inner1: w * 0.17,
        mid1:   w * 0.30,
        mid2:   w * 0.70,
        inner2: w * 0.83,
        outer2: w * 0.95,
        off:    w * 0.05,   // overflow beyond edges
    };
    const y = {
        outer1: h * 0.055,
        inner1: h * 0.19,
        mid1:   h * 0.333,
        mid2:   h * 0.667,
        inner2: h * 0.81,
        outer2: h * 0.944,
        off:    h * 0.055,
    };

    // Helper – round to 1 decimal
    const r = v => Math.round(v * 10) / 10;

    const circuitTraces = [
        // ── Top frame ───────────────────────────────────────────
        {
            path: `M${r(-x.off)},${r(y.outer1)} L${r(x.inner1)},${r(y.outer1)} L${r(x.inner1)},${r(y.outer1+b)} L${r(x.mid1)},${r(y.outer1+b)} L${r(x.mid1)},${r(y.outer1)} L${r(x.mid2)},${r(y.outer1)} L${r(x.mid2)},${r(y.outer1+b)} L${r(x.inner2)},${r(y.outer1+b)} L${r(x.inner2)},${r(y.outer1)} L${r(w+x.off)},${r(y.outer1)}`,
            delay: 0, duration: 4.0, strokeWidth: 2
        },
        {
            path: `M${r(-x.off)},${r(y.inner1)} L${r(x.inner1-b)},${r(y.inner1)} L${r(x.inner1-b)},${r(y.inner1-b)} L${r(x.inner1+b)},${r(y.inner1-b)} L${r(x.inner1+b)},${r(y.inner1)} L${r(x.inner2-b)},${r(y.inner1)} L${r(x.inner2-b)},${r(y.inner1-b)} L${r(x.inner2+b)},${r(y.inner1-b)} L${r(x.inner2+b)},${r(y.inner1)} L${r(w+x.off)},${r(y.inner1)}`,
            delay: 0.5, duration: 3.8, strokeWidth: 1.8
        },

        // ── Bottom frame ────────────────────────────────────────
        {
            path: `M${r(-x.off)},${r(y.outer2)} L${r(x.inner1+b)},${r(y.outer2)} L${r(x.inner1+b)},${r(y.outer2-b)} L${r(x.mid1+b)},${r(y.outer2-b)} L${r(x.mid1+b)},${r(y.outer2)} L${r(x.mid2-b)},${r(y.outer2)} L${r(x.mid2-b)},${r(y.outer2-b)} L${r(x.inner2-b)},${r(y.outer2-b)} L${r(x.inner2-b)},${r(y.outer2)} L${r(w+x.off)},${r(y.outer2)}`,
            delay: 1.2, duration: 4.2, strokeWidth: 2
        },
        {
            path: `M${r(-x.off)},${r(y.inner2)} L${r(x.inner1)},${r(y.inner2)} L${r(x.inner1)},${r(y.inner2+b)} L${r(x.mid1)},${r(y.inner2+b)} L${r(x.mid1)},${r(y.inner2)} L${r(x.mid2)},${r(y.inner2)} L${r(x.mid2)},${r(y.inner2+b)} L${r(x.inner2)},${r(y.inner2+b)} L${r(x.inner2)},${r(y.inner2)} L${r(w+x.off)},${r(y.inner2)}`,
            delay: 1.8, duration: 3.6, strokeWidth: 1.8
        },

        // ── Left frame ──────────────────────────────────────────
        {
            path: `M${r(x.outer1)},${r(-y.off)} L${r(x.outer1)},${r(y.inner1)} L${r(x.outer1+b)},${r(y.inner1)} L${r(x.outer1+b)},${r(y.mid1)} L${r(x.outer1)},${r(y.mid1)} L${r(x.outer1)},${r(y.mid2)} L${r(x.outer1+b)},${r(y.mid2)} L${r(x.outer1+b)},${r(y.inner2)} L${r(x.outer1)},${r(y.inner2)} L${r(x.outer1)},${r(h+y.off)}`,
            delay: 2.0, duration: 3.5, strokeWidth: 1.9
        },
        {
            path: `M${r(x.inner1)},${r(-y.off)} L${r(x.inner1)},${r(y.inner1-b)} L${r(x.inner1-b)},${r(y.inner1-b)} L${r(x.inner1-b)},${r(y.inner1+b)} L${r(x.inner1)},${r(y.inner1+b)} L${r(x.inner1)},${r(y.inner2-b)} L${r(x.inner1-b)},${r(y.inner2-b)} L${r(x.inner1-b)},${r(y.inner2+b)} L${r(x.inner1)},${r(y.inner2+b)} L${r(x.inner1)},${r(h+y.off)}`,
            delay: 2.5, duration: 3.8, strokeWidth: 1.6
        },

        // ── Right frame ─────────────────────────────────────────
        {
            path: `M${r(x.outer2)},${r(-y.off)} L${r(x.outer2)},${r(y.inner1)} L${r(x.outer2-b)},${r(y.inner1)} L${r(x.outer2-b)},${r(y.mid1)} L${r(x.outer2)},${r(y.mid1)} L${r(x.outer2)},${r(y.mid2)} L${r(x.outer2-b)},${r(y.mid2)} L${r(x.outer2-b)},${r(y.inner2)} L${r(x.outer2)},${r(y.inner2)} L${r(x.outer2)},${r(h+y.off)}`,
            delay: 3.0, duration: 3.5, strokeWidth: 1.9
        },
        {
            path: `M${r(x.inner2)},${r(-y.off)} L${r(x.inner2)},${r(y.inner1-b)} L${r(x.inner2+b)},${r(y.inner1-b)} L${r(x.inner2+b)},${r(y.inner1+b)} L${r(x.inner2)},${r(y.inner1+b)} L${r(x.inner2)},${r(y.inner2-b)} L${r(x.inner2+b)},${r(y.inner2-b)} L${r(x.inner2+b)},${r(y.inner2+b)} L${r(x.inner2)},${r(y.inner2+b)} L${r(x.inner2)},${r(h+y.off)}`,
            delay: 3.5, duration: 3.8, strokeWidth: 1.6
        },

        // ── Corner connectors ───────────────────────────────────
        { path: `M${r(x.inner1)},${r(y.outer1)} L${r(x.inner1)},${r(y.inner1)}`, delay: 4.0, duration: 1.0, strokeWidth: 1.4 },
        { path: `M${r(x.inner2)},${r(y.outer1)} L${r(x.inner2)},${r(y.inner1)}`, delay: 4.2, duration: 1.0, strokeWidth: 1.4 },
        { path: `M${r(x.inner1)},${r(y.inner2)} L${r(x.inner1)},${r(y.outer2)}`, delay: 4.4, duration: 1.0, strokeWidth: 1.4 },
        { path: `M${r(x.inner2)},${r(y.inner2)} L${r(x.inner2)},${r(y.outer2)}`, delay: 4.6, duration: 1.0, strokeWidth: 1.4 },
    ];

    // Delays are timed to match when the first trace line reaches each pad
    const componentPads = [
        { x: x.outer1, y: y.outer1, delay: 0.4 },   // top-left:     top trace arrives early
        { x: x.inner1, y: y.outer1, delay: 0.8 },   // top-inner-L:  top trace passes 20%
        { x: x.outer1, y: y.outer2, delay: 1.6 },   // bot-left:     bottom trace arrives
        { x: x.outer2, y: y.outer1, delay: 3.0 },   // top-right:    right trace starts
        { x: x.inner2, y: y.outer1, delay: 3.2 },   // top-inner-R:  top trace passes 80%
        { x: x.inner1, y: y.outer2, delay: 2.0 },   // bot-inner-L:  bottom trace passes 20%
        { x: x.inner2, y: y.outer2, delay: 4.5 },   // bot-inner-R:  bottom trace passes 80%
        { x: x.outer2, y: y.outer2, delay: 5.4 },   // bot-right:    bottom trace end
    ];

    // Delays timed to when the first trace reaches each inner corner
    const viaConnections = [
        { x: x.inner1, y: y.inner1, delay: 1.3 },   // top-left inner
        { x: x.inner2, y: y.inner1, delay: 3.5 },   // top-right inner
        { x: x.inner1, y: y.inner2, delay: 2.5 },   // bot-left inner
        { x: x.inner2, y: y.inner2, delay: 4.7 },   // bot-right inner
    ];

    return { circuitTraces, componentPads, viaConnections };
}

let circuitResizeHandler = null;

function createCircuitPattern() {
    const svg = document.querySelector('.circuit-svg');
    if (!svg) return;

    // Only initialize once per hero section visit to prevent interruption
    if (circuitAnimationInitialized && svg.children.length > 0) {
        return;
    }

    circuitAnimationInitialized = true;

    // Remove previous resize listener if any
    if (circuitResizeHandler) {
        window.removeEventListener('resize', circuitResizeHandler);
        circuitResizeHandler = null;
    }

    function render() {
        const w = window.innerWidth;
        const h = window.innerHeight;

        // Set viewBox to match exact viewport pixels → 1 SVG unit = 1 px
        svg.setAttribute('viewBox', `0 0 ${w} ${h}`);

        const { circuitTraces, componentPads, viaConnections } = buildCircuitData(w, h);

        // Pad / hole size in pixels — fixed to match line thickness
        const padSize = 4;      // 4px half-width → 8px square, matching ~2px line weight
        const holeSize = 1.8;   // small inner hole

        // Clear existing elements
        svg.innerHTML = '';

        // Create circuit traces
        circuitTraces.forEach((trace) => {
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('d', trace.path);
            path.setAttribute('stroke', '#091bd9');
            path.setAttribute('stroke-width', trace.strokeWidth.toString());
            path.setAttribute('fill', 'none');
            path.setAttribute('stroke-linecap', 'square');
            path.setAttribute('stroke-linejoin', 'miter');

            svg.appendChild(path);

            const pathLength = path.getTotalLength();
            path.style.strokeDasharray = pathLength.toString();
            path.style.strokeDashoffset = pathLength.toString();
            path.style.opacity = '0';
            path.style.setProperty('--path-length', pathLength.toString());
            path.classList.add('circuit-trace-react');

            const totalCycleDuration = trace.duration + 3;
            const drawPercentage = (trace.duration / totalCycleDuration) * 100;

            let animationName = 'drawTrace40';
            if (Math.round(drawPercentage) <= 15) animationName = 'drawTrace14';
            else if (Math.round(drawPercentage) <= 37) animationName = 'drawTrace36';
            else if (Math.round(drawPercentage) <= 39) animationName = 'drawTrace38';
            else if (Math.round(drawPercentage) <= 41) animationName = 'drawTrace40';
            else animationName = 'drawTrace42';

            path.style.animationDuration = `${totalCycleDuration}s`;
            path.style.animationDelay = `${trace.delay}s`;
            path.style.animationTimingFunction = 'ease-out';
            path.style.animationIterationCount = 'infinite';
            path.style.animationFillMode = 'both';
            path.style.animationName = animationName;
        });

        // Create component pads
        componentPads.forEach((pad) => {
            const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');

            const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rect.setAttribute('x', (pad.x - padSize).toString());
            rect.setAttribute('y', (pad.y - padSize).toString());
            rect.setAttribute('width', (padSize * 2).toString());
            rect.setAttribute('height', (padSize * 2).toString());
            rect.setAttribute('fill', '#091bd9');
            rect.setAttribute('rx', (padSize * 0.08).toString());
            rect.classList.add('circuit-pad-react');

            rect.style.animationDuration = '0.3s';
            rect.style.animationDelay = `${pad.delay}s`;
            rect.style.animationTimingFunction = 'ease-out';
            rect.style.animationIterationCount = '1';
            rect.style.animationFillMode = 'forwards';

            const hole = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            hole.setAttribute('x', (pad.x - holeSize).toString());
            hole.setAttribute('y', (pad.y - holeSize).toString());
            hole.setAttribute('width', (holeSize * 2).toString());
            hole.setAttribute('height', (holeSize * 2).toString());
            hole.setAttribute('fill', '#f5f1f0');
            hole.setAttribute('rx', (holeSize * 0.1).toString());
            hole.classList.add('circuit-hole-react');

            hole.style.animationDuration = '0.25s';
            hole.style.animationDelay = `${pad.delay + 0.15}s`;
            hole.style.animationTimingFunction = 'ease-out';
            hole.style.animationIterationCount = '1';
            hole.style.animationFillMode = 'forwards';

            g.appendChild(rect);
            g.appendChild(hole);
            svg.appendChild(g);
        });

        // Create via connections — fixed size to match line thickness
        const viaSize = 3;        // 3px radius
        const viaStroke = 1.8;    // ~2px stroke, same as lines

        viaConnections.forEach((via, index) => {
            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('cx', via.x.toString());
            circle.setAttribute('cy', via.y.toString());
            circle.setAttribute('r', viaSize.toString());
            circle.setAttribute('fill', 'none');
            circle.setAttribute('stroke', '#091bd9');
            circle.setAttribute('stroke-width', viaStroke.toString());
            circle.classList.add('circuit-via-react');

            circle.style.animationDuration = '0.3s';
            circle.style.animationDelay = `${via.delay}s`;
            circle.style.animationTimingFunction = 'ease-out';
            circle.style.animationIterationCount = '1';
            circle.style.animationFillMode = 'forwards';

            svg.appendChild(circle);
        });
    }

    // Initial render
    render();

    // Debounced resize handler – recalculates positions when viewport changes
    let resizeTimeout;
    circuitResizeHandler = () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            // Reset so render() rebuilds fully
            circuitAnimationInitialized = false;
            createCircuitPattern();
        }, 250);
    };
    window.addEventListener('resize', circuitResizeHandler);

    // Reset initialization flag when leaving hero section
    if (circuitAnimationTimer) {
        clearTimeout(circuitAnimationTimer);
    }

    circuitAnimationTimer = setTimeout(() => {
        if (currentSection !== 'hero') {
            circuitAnimationInitialized = false;
        }
    }, 2000);
}

// Navigation
function navigateToSection(sectionId, event) {
    if (sectionId === currentSection) return;

    // Allow navigation during transition but prevent rapid clicking
    if (isRevealing) {
        return;
    }

    let clickX = 50, clickY = 50;
    if (event) {
        const rect = event.target.getBoundingClientRect();
        clickX = ((rect.left + rect.width / 2) / window.innerWidth) * 100;
        clickY = ((rect.top + rect.height / 2) / window.innerHeight) * 100;
    }

    revealCenter = { x: clickX, y: clickY };
    nextSection = sectionId;
    isRevealing = true;

    // Get containers
    const previewContainer = document.getElementById('sectionPreview');
    const currentContainer = document.getElementById('sectionCurrent');

    // Swap sections instantly (no circular reveal)
    currentSection = sectionId;
    nextSection = null;
    isRevealing = false;

    renderSection(currentSection, currentContainer.querySelector('.section-content'), false);
    previewContainer.innerHTML = '';

    // Update navigation
    updateNavigation();

    // Handle section-specific animations
    if (currentSection === 'about') {
        setTimeout(() => {
            aboutAnimationReady = true;
            animateSkillBars();
        }, 100);
    } else {
        aboutAnimationReady = false;
    }

    // Reset circuit animation flag and remove resize listener when leaving hero
    if (currentSection !== 'hero') {
        if (circuitResizeHandler) {
            window.removeEventListener('resize', circuitResizeHandler);
            circuitResizeHandler = null;
        }
        if (circuitAnimationInitialized) {
            circuitAnimationInitialized = false;
        }
    }
}

// Update navigation active state
function updateNavigation() {
    const navButtons = document.querySelectorAll('.nav-button[data-section]');
    navButtons.forEach(button => {
        if (button.dataset.section === currentSection) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });

    // Update navigation text
    sections.forEach(section => {
        const button = document.querySelector(`[data-section="${section.id}"]`);
        if (button) {
            const textSpan = button.querySelector('.nav-text');
            if (textSpan) {
                textSpan.textContent = section.name[language];
            }
        }
    });

    // Update language button
    const langButton = document.querySelector('.language-toggle .nav-text');
    if (langButton) {
        langButton.textContent = language === 'en' ? 'FR' : 'EN';
    }
}

// Render section content
function renderSection(sectionId, container, isPreview = false) {
    const t = content[language];

    switch (sectionId) {
        case 'hero':
            container.innerHTML = createHeroHTML();
            break;
        case 'about':
            container.innerHTML = createAboutHTML(isPreview);
            break;
        case 'portfolio':
            container.innerHTML = createPortfolioHTML();
            break;
        case 'contact':
            container.innerHTML = createContactHTML();
            break;
    }

    // Re-initialize Lucide icons
    lucide.createIcons();

    // Initialize circuit pattern for hero section
    if (sectionId === 'hero') {
        // Use requestAnimationFrame to ensure SVG is properly rendered
        requestAnimationFrame(() => {
            createCircuitPattern();
        });
    }
}

// Create HTML for each section
function createHeroHTML() {
    const t = content[language];
    return `
        <div class="hero-section">
            <div class="circuit-pattern">
                <svg class="circuit-svg"></svg>
            </div>
            <div class="hero-content">
                <h1 class="hero-title">Ariane Saulnier</h1>
                <p class="hero-subtitle">${t.hero.subtitle}</p>
                <div class="hero-buttons">
                    <button class="btn btn-primary" data-action="navigate" data-target="about">${t.hero.learnMore}</button>
                    <button class="btn btn-outline" data-action="navigate" data-target="portfolio">${t.hero.viewPortfolio}</button>
                </div>
            </div>
        </div>
    `;
}

function createAboutHTML(isPreview = false) {
    const t = content[language];
    const skillsHTML = skills[language].map(skill => `
        <div class="skill-item">
            <div class="skill-header">
                <span>${skill.name}</span>
                <span>${skill.percentage}%</span>
            </div>
            <div class="skill-bar">
                <div class="skill-progress" data-percentage="${skill.percentage}" style="width: ${isPreview ? skill.percentage + '%' : '0%'}"></div>
            </div>
        </div>
    `).join('');

    return `
        <div class="about-section">
            <div class="container">
                <h2 class="section-title">${t.about.title}</h2>
                <div class="about-card">
                    <div class="about-grid">
                        <div>
                            <p class="about-description">${t.about.description}</p>
                            <div class="about-section-item">
                                <h3 class="about-section-title">${t.about.education}</h3>
                                <ul class="about-list">
                                    ${t.about.educationItems.map(item => `<li>${item}</li>`).join('')}
                                </ul>
                            </div>
                            <div class="about-section-item">
                                <h3 class="about-section-title">${t.about.experience}</h3>
                                <ul class="about-list">
                                    ${t.about.experienceItems.map(item => `<li>${item}</li>`).join('')}
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h3 class="skills-title">${t.about.skillsTitle}</h3>
                            <div class="skills-container">
                                ${skillsHTML}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function createPortfolioHTML() {
    const t = content[language];
    const items = portfolioItems[language];

    const portfolioItemHTML = (item) => `
        <div class="portfolio-item" data-title="${item.title}">
            <div class="portfolio-thumbnail">
                <div class="portfolio-icon-container">
                    <i data-lucide="${item.icon}" class="portfolio-icon"></i>
                </div>
                <div class="portfolio-preview">
                    ${item.liveLink ? `<a href="${item.liveLink}" target="_blank" rel="noopener noreferrer">` : ''}
                    <img src="${item.image}" alt="${item.title}" loading="lazy">
                    ${item.liveLink ? `</a>` : ''}
                </div>
            </div>
            <div class="portfolio-content">
                <h3 class="portfolio-title">${item.title}</h3>
                <p class="portfolio-type">${item.type}</p>
                <p class="portfolio-description">${item.description}</p>
                <div class="portfolio-buttons">
                    ${item.liveLink ? `
                        <a href="${item.liveLink}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                            <i data-lucide="external-link"></i>
                            ${t.portfolio.liveDemo}
                        </a>
                    ` : ''}
                    <a href="${item.githubLink}" target="_blank" rel="noopener noreferrer" class="btn btn-outline ${!item.liveLink ? 'single' : ''}">
                        <i data-lucide="github"></i>
                        ${t.portfolio.viewCode}
                    </a>
                </div>
            </div>
        </div>
    `;

    return `
        <div class="portfolio-section">
            <div class="container">
                <h2 class="section-title">${t.portfolio.title}</h2>
                
                <!-- Portfolio Grid -->
                <div class="space-y-6">
                    <!-- Mobile: Single column - all projects -->
                    <div class="portfolio-mobile">
                        ${items.map(item => portfolioItemHTML(item)).join('')}
                    </div>

                    <!-- Tablet: 2+1 layout -->
                    <div class="portfolio-tablet">
                        <!-- First row - 2 projects -->
                        <div class="portfolio-tablet-row-1">
                            ${items.slice(0, 2).map(item => portfolioItemHTML(item)).join('')}
                        </div>
                        
                        <!-- Second row - 1 project centered -->
                        <div class="portfolio-tablet-row-3">
                            ${items.slice(2, 3).map(item => portfolioItemHTML(item)).join('')}
                        </div>
                    </div>

                    <!-- Desktop: 3 layout -->
                    <div class="portfolio-desktop">
                        <!-- Single row - 3 projects -->
                        <div class="portfolio-desktop-row-1">
                            ${items.slice(0, 3).map(item => portfolioItemHTML(item)).join('')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function createContactHTML() {
    const t = content[language];

    return `
        <div class="contact-section">
            <div class="container contact-container">
                <h2 class="section-title">${t.contact.title}</h2>
                <p class="contact-subtitle">${t.contact.subtitle}</p>
                
                <div class="contact-buttons">
                    <a href="mailto:ariane.saulnier@gmail.com" class="btn btn-primary contact-btn">
                        <i data-lucide="mail"></i>
                        <span>ariane.saulnier@gmail.com</span>
                    </a>
                    <a href="https://github.com/aria-vero-s" target="_blank" rel="noopener noreferrer" class="btn btn-outline contact-btn">
                        <i data-lucide="github"></i>
                        <span>${t.contact.github}</span>
                    </a>
                    <a href="https://linkedin.com/in/ariane-saulnier" target="_blank" rel="noopener noreferrer" class="btn btn-outline contact-btn">
                        <i data-lucide="linkedin"></i>
                        <span>${t.contact.linkedin}</span>
                    </a>
                </div>

                <div class="contact-form-container">
                    <h3 class="form-title">${t.contact.formTitle}</h3>
                    <form class="contact-form" action="https://formspree.io/f/mdkkpqwy" method="POST">
                        <div class="form-row">
                            <div class="form-field">
                                <label for="name">${t.contact.nameLabel}</label>
                                <input type="text" id="name" name="name" required>
                            </div>
                            <div class="form-field">
                                <label for="email">${t.contact.emailLabel}</label>
                                <input type="email" id="email" name="email" required>
                            </div>
                        </div>
                        <div class="form-field">
                            <label for="message">${t.contact.messageLabel}</label>
                            <textarea id="message" name="message" rows="5" placeholder="${t.contact.messagePlaceholder}" required></textarea>
                        </div>

                        <div class="form-submit">
                            <button type="submit" class="btn btn-primary">${t.contact.sendButton}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `;
}

function setupPortfolioGrid() {
    // Portfolio layout is now handled by CSS and HTML structure
    // No JavaScript manipulation needed
}

// Animate skill bars
function animateSkillBars() {
    if (!aboutAnimationReady || currentSection !== 'about') return;

    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach((bar, index) => {
        const percentage = bar.dataset.percentage;

        // Only animate if not already animated (prevents resets during transitions)
        if (bar.style.width === '0%' || bar.style.width === '' || bar.style.width === '0px') {
            // Animate to target width with staggered delay
            setTimeout(() => {
                bar.style.width = percentage + '%';
            }, index * 200);
        }
    });
}

// Toggle language
function toggleLanguage() {
    language = language === 'en' ? 'fr' : 'en';

    // Update current section content
    const currentContainer = document.getElementById('sectionCurrent').querySelector('.section-content');
    renderSection(currentSection, currentContainer, false);

    // Update navigation
    updateNavigation();

    // Re-animate skill bars if on about page
    if (currentSection === 'about') {
        aboutAnimationReady = true;
        setTimeout(() => {
            animateSkillBars();
        }, 100);
    }
}

// Event listeners
function setupEventListeners() {
    document.addEventListener('click', (e) => {
        if (e.target.closest('[data-action="navigate"]')) {
            const target = e.target.closest('[data-action="navigate"]').dataset.target;
            navigateToSection(target, e);
        }

        if (e.target.closest('[data-section]')) {
            const section = e.target.closest('[data-section]').dataset.section;
            navigateToSection(section, e);
        }

        if (e.target.closest('.language-toggle')) {
            toggleLanguage();
        }
    });

    // document.addEventListener('submit', (e) => {
    //     if (e.target.matches('.contact-form')) {
    //         e.preventDefault();
    //         console.log('Form submitted');
    //     }
    // });

    document.addEventListener('submit', async (e) => {
        if (!e.target.matches('.contact-form')) return;
        e.preventDefault();
      
        const form = e.target;
        const data = new FormData(form);
      
        try {
          const res = await fetch(form.action, {
            method: form.method,
            body: data,
            headers: { 'Accept': 'application/json' }
          });
      
          if (!res.ok) throw new Error('Network error');
      
          // Replace the form with your custom message:
          form.innerHTML = `
            <div class="thank-you">
              <h3>Thanks for reaching out!</h3>
              <p>I’ve received your message and will get back to you soon.</p>
              <p>Best regards,</p>
              <p>Ariane</p>
              <hr>
              <h3>Merci pour votre message !</h3>
            <p>J’ai bien reçu votre message et je vous répondrai bientôt.</p>
            <p>Cordialement,</p>
            <p>Ariane</p>
            </div>`;
        } catch (err) {
          form.insertAdjacentHTML('beforeend', `
            <p class="error">Oops—something went wrong. Please try again.</p>
          `);
          console.error(err);
        }
      });      
}

// Initialize application
function init() {
    // Setup event listeners
    setupEventListeners();

    // Ensure initial clip-path state is correct
    const currentContainer = document.getElementById('sectionCurrent');
    currentContainer.style.clipPath = `circle(150% at 50% 50%)`;

    // Show initial section
    renderSection(currentSection, currentContainer.querySelector('.section-content'), false);

    // Update navigation
    updateNavigation();

    // Initialize Lucide icons
    lucide.createIcons();
}

// Start the application
document.addEventListener('DOMContentLoaded', init);
