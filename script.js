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
    { id: 'services', name: { en: 'Services', fr: 'Services' }, icon: 'settings' },
    { id: 'contact', name: { en: 'Contact', fr: 'Contact' }, icon: 'message-circle' },
];

const portfolioItems = {
    en: [
        {
            title: 'Freelancer Portfolio',
            type: 'Website Design',
            description: 'A website showcasing the work and services of a freelance engineer.',
            image: 'images/freelancer.png',
            liveLink: 'https://aria-vero-s.github.io/camping/',
            githubLink: 'https://github.com/aria-vero-s/camping',
            icon: 'user'
        },
        {
            title: 'Musician Portfolio',
            type: 'Website Design',
            description: 'A simple, elegant website designed for a professional pianist.',
            image: 'images/musician-portfolio.png',
            liveLink: 'https://paolorubinacci.com/',
            githubLink: 'https://github.com/Aria-vero-s/pianist',
            icon: 'user'
        },
        {
            title: 'E-commerce Website',
            type: 'E-commerce',
            description: 'An e-commerce website for a beauty shop with payments and product management.',
            image: 'images/e-commerce.png',
            liveLink: '',
            githubLink: 'https://github.com/Aria-vero-s/glow',
            icon: 'shopping-cart'
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
            title: 'Portfolio de Freelance',
            type: 'Conception de site web',
            description: 'Un site web présentant le travail et les services d\'un ingénieur freelance.',
            image: 'images/freelancer.png',
            liveLink: 'https://aria-vero-s.github.io/camping/',
            githubLink: 'https://github.com/aria-vero-s/camping',
            icon: 'user'
        },
        {
            title: 'Portfolio de Musicien',
            type: 'Conception de site web',
            description: 'Un site simple et élégant conçu pour un pianiste professionnel.',
            image: 'images/musician-portfolio.png',
            liveLink: 'https://paolorubinacci.com/',
            githubLink: 'https://github.com/Aria-vero-s/pianist',
            icon: 'user'
        },
        {
            title: 'Site E-commerce',
            type: 'E-commerce',
            description: 'Un site e-commerce pour une boutique beauté avec paiements et gestion des produits.',
            image: 'images/e-commerce.png',
            liveLink: '',
            githubLink: 'https://github.com/Aria-vero-s/glow',
            icon: 'shopping-cart'
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

const services = {
    en: [
        { name: '1. Branding', description: 'Logo design, color palette, and fonts to create a cohesive brand identity.', icon: 'palette' },
        { name: '2. Website', description: 'Custom-designed websites that help you attract clients and build trust online.', icon: 'globe' },
        { name: '3. Hosting & Domain Setup', description: 'Set up your free or paid domains and hosting.', icon: 'server' },
        { name: '4. Business Email', description: 'Set up free or domain-specific email for professional communication.', icon: 'at-sign' },
        { name: '5. Marketing', description: 'Basic SEO strategies for your website.', icon: 'search' },
        { name: '6. Social Media', description: 'Guidance on setting up and managing social media accounts.', icon: 'users' },
    ],
    fr: [
        { name: '1. Image de Marque', description: 'Design de logo, palette de couleurs et polices pour créer une identité de marque cohérente.', icon: 'palette' },
        { name: '2. Site Web', description: 'Sites web personnalisés qui reflètent votre entreprise et votre marque.', icon: 'globe' },
        { name: '3. Hébergement & Domaine', description: 'Configuration de vos domaines gratuits ou payants et hébergement.', icon: 'server' },
        { name: '4. Email Professionnel', description: 'Configuration d\'email gratuit ou spécifique au domaine pour une communication professionnelle.', icon: 'at-sign' },
        { name: '5. Marketing', description: 'Stratégies SEO de base pour votre site web.', icon: 'search' },
        { name: '6. Réseaux Sociaux', description: 'Conseils pour configurer et gérer les comptes de réseaux sociaux.', icon: 'users' },
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
        services: {
            title: 'Services',
            subtitle: 'Whether you\'re starting from scratch or revamping your online presence, I offer complete web services designed for freelancers, creatives, and small businesses.'
        },
        contact: {
            title: 'Get In Touch',
            subtitle: 'Ready to bring your website to life? Let\'s start a conversation about your project.',
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
        services: {
            title: 'Services',
            subtitle: 'Que vous partiez de zéro ou que vous souhaitiez moderniser votre présence en ligne, je propose des services web complets adaptés aux freelances, créatifs et petites entreprises.'
        },
        contact: {
            title: 'Contactez-Moi',
            subtitle: 'Prêt à donner vie à votre site web ? Commençons une conversation sur votre projet.',
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
function createCircuitPattern() {
    const svg = document.querySelector('.circuit-svg');
    if (!svg) return;

    // Only initialize once per hero section visit to prevent interruption
    if (circuitAnimationInitialized && svg.children.length > 0) {
        return;
    }

    circuitAnimationInitialized = true;

    // Circuit traces timing and behavior
    const circuitTraces = [
        // Top frame
        {
            path: 'M-5,5 L20,5 L20,8 L30,8 L30,5 L70,5 L70,8 L80,8 L80,5 L105,5',
            delay: 0,
            duration: 4.0,
            strokeWidth: 0.25
        },
        {
            path: 'M-5,20 L15,20 L15,17 L25,17 L25,20 L75,20 L75,17 L85,17 L85,20 L105,20',
            delay: 0.5,
            duration: 3.8,
            strokeWidth: 0.22
        },

        // Bottom frame
        {
            path: 'M-5,85 L25,85 L25,82 L35,82 L35,85 L65,85 L65,82 L75,82 L75,85 L105,85',
            delay: 1.2,
            duration: 4.2,
            strokeWidth: 0.25
        },
        {
            path: 'M-5,70 L20,70 L20,73 L30,73 L30,70 L70,70 L70,73 L80,73 L80,70 L105,70',
            delay: 1.8,
            duration: 3.6,
            strokeWidth: 0.22
        },

        // Left frame
        {
            path: 'M5,-5 L5,20 L8,20 L8,30 L5,30 L5,60 L8,60 L8,70 L5,70 L5,95',
            delay: 2.0,
            duration: 3.5,
            strokeWidth: 0.24
        },
        {
            path: 'M20,-5 L20,15 L17,15 L17,25 L20,25 L20,65 L17,65 L17,75 L20,75 L20,95',
            delay: 2.5,
            duration: 3.8,
            strokeWidth: 0.20
        },

        // Right frame
        {
            path: 'M95,-5 L95,20 L92,20 L92,30 L95,30 L95,60 L92,60 L92,70 L95,70 L95,95',
            delay: 3.0,
            duration: 3.5,
            strokeWidth: 0.24
        },
        {
            path: 'M80,-5 L80,15 L83,15 L83,25 L80,25 L80,65 L83,65 L83,75 L80,75 L80,95',
            delay: 3.5,
            duration: 3.8,
            strokeWidth: 0.20
        },

        // Corner connectors
        {
            path: 'M20,5 L20,20',
            delay: 4.0,
            duration: 1.0,
            strokeWidth: 0.18
        },
        {
            path: 'M80,5 L80,20',
            delay: 4.2,
            duration: 1.0,
            strokeWidth: 0.18
        },
        {
            path: 'M20,70 L20,85',
            delay: 4.4,
            duration: 1.0,
            strokeWidth: 0.18
        },
        {
            path: 'M80,70 L80,85',
            delay: 4.6,
            duration: 1.0,
            strokeWidth: 0.18
        }
    ];

    // Component pads
    const componentPads = [
        { x: 5, y: 5, delay: 1.0 },
        { x: 95, y: 5, delay: 1.2 },
        { x: 5, y: 85, delay: 1.4 },
        { x: 95, y: 85, delay: 1.6 },
        { x: 20, y: 5, delay: 2.0 },
        { x: 80, y: 5, delay: 2.2 },
        { x: 20, y: 85, delay: 2.4 },
        { x: 80, y: 85, delay: 2.6 },
    ];

    const viaConnections = [
        { x: 20, y: 20 }, { x: 80, y: 20 }, { x: 20, y: 70 }, { x: 80, y: 70 }
    ];

    // Clear existing elements
    svg.innerHTML = '';

    // Create circuit traces with pathLength + opacity behavior
    circuitTraces.forEach((trace, index) => {
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', trace.path);
        path.setAttribute('stroke', '#091bd9');
        path.setAttribute('stroke-width', trace.strokeWidth.toString());
        path.setAttribute('fill', 'none');
        path.setAttribute('stroke-linecap', 'square');
        path.setAttribute('stroke-linejoin', 'miter');

        // Add to DOM first so we can calculate path length
        svg.appendChild(path);

        // Calculate path length for stroke-dasharray
        const pathLength = path.getTotalLength();
        path.style.strokeDasharray = pathLength.toString();
        path.style.strokeDashoffset = pathLength.toString();

        // Set initial state: completely hidden and undrawn
        path.style.opacity = '0';
        path.style.setProperty('--path-length', pathLength.toString());

        path.classList.add('circuit-trace-react');

        // Apply animation with fade + draw combination
        const totalCycleDuration = trace.duration + 3; // Original repeatDelay: 6
        const drawPercentage = (trace.duration / totalCycleDuration) * 100;

        // Choose fallback animation based on approximate percentage since CSS custom props in keyframes aren't well supported
        let animationName = 'drawTrace40'; // default for 4s duration
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
    componentPads.forEach((pad, index) => {
        const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');

        // Square pad base
        const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        rect.setAttribute('x', (pad.x - 0.6).toString());
        rect.setAttribute('y', (pad.y - 0.6).toString());
        rect.setAttribute('width', '1.2');
        rect.setAttribute('height', '1.2');
        rect.setAttribute('fill', '#091bd9');
        rect.setAttribute('rx', '0.1');
        rect.classList.add('circuit-pad-react');

        // Timing: 0.4s duration + 8s repeatDelay
        const padCycleDuration = 0.4 + 8;
        rect.style.animationDuration = `${padCycleDuration}s`;
        rect.style.animationDelay = `${pad.delay}s`;
        rect.style.animationTimingFunction = 'ease-out';
        rect.style.animationIterationCount = 'infinite';
        rect.style.animationFillMode = 'both';

        // Square pad center hole with scale animation
        const hole = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        hole.setAttribute('x', (pad.x - 0.25).toString());
        hole.setAttribute('y', (pad.y - 0.25).toString());
        hole.setAttribute('width', '0.5');
        hole.setAttribute('height', '0.5');
        hole.setAttribute('fill', '#f5f1f0');
        hole.setAttribute('rx', '0.05');
        hole.classList.add('circuit-hole-react');

        // Timing: 0.6s duration + 8s repeatDelay, with scale effect
        const holeCycleDuration = 0.6 + 8;
        hole.style.animationDuration = `${holeCycleDuration}s`;
        hole.style.animationDelay = `${pad.delay + 0.2}s`;
        hole.style.animationTimingFunction = 'ease-out';
        hole.style.animationIterationCount = 'infinite';
        hole.style.animationFillMode = 'both';

        g.appendChild(rect);
        g.appendChild(hole);
        svg.appendChild(g);
    });

    // Create via connections with timing
    viaConnections.forEach((via, index) => {
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', via.x.toString());
        circle.setAttribute('cy', via.y.toString());
        circle.setAttribute('r', '0.25');
        circle.setAttribute('fill', 'none');
        circle.setAttribute('stroke', '#091bd9');
        circle.setAttribute('stroke-width', '0.15');
        circle.classList.add('circuit-via-react');

        // Timing: 0.3s duration + 8.5s repeatDelay
        const viaCycleDuration = 0.3 + 8.5;
        circle.style.animationDuration = `${viaCycleDuration}s`;
        circle.style.animationDelay = `${3.0 + index * 0.2}s`;
        circle.style.animationTimingFunction = 'ease-out';
        circle.style.animationIterationCount = 'infinite';
        circle.style.animationFillMode = 'both';

        svg.appendChild(circle);
    });

    // Reset initialization flag when leaving hero section
    if (circuitAnimationTimer) {
        clearTimeout(circuitAnimationTimer);
    }

    // Mark as no longer on hero after a small delay to allow transitions
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

    // Render next section immediately in preview
    renderSection(nextSection, previewContainer, true);

    // Apply transition and clip-path immediately
    requestAnimationFrame(() => {
        currentContainer.style.transition = 'clip-path 1.4s cubic-bezier(0.4, 0, 0.2, 1)';
        currentContainer.style.clipPath = `circle(0% at ${revealCenter.x}% ${revealCenter.y}%)`;
    });

    // Complete transition after 1.4s
    setTimeout(() => {
        currentSection = sectionId;
        nextSection = null;
        isRevealing = false;

        // Update current section
        renderSection(currentSection, currentContainer.querySelector('.section-content'), false);
        previewContainer.innerHTML = '';

        // Reset clip path WITHOUT animation
        currentContainer.style.transition = 'none';
        currentContainer.style.clipPath = `circle(150% at ${revealCenter.x}% ${revealCenter.y}%)`;

        // Re-enable transition for next time
        setTimeout(() => {
            currentContainer.style.transition = '';
        }, 50);

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

        // Reset circuit animation flag when leaving hero
        if (currentSection !== 'hero' && circuitAnimationInitialized) {
            setTimeout(() => {
                circuitAnimationInitialized = false;
            }, 500);
        }
    }, 1400);
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
        case 'services':
            container.innerHTML = createServicesHTML();
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
                <svg class="circuit-svg" viewBox="0 0 100 90" preserveAspectRatio="xMidYMid slice"></svg>
            </div>
            <div class="hero-content">
                <h1 class="hero-title">Ariane Saulnier</h1>
                <p class="hero-subtitle">${t.hero.subtitle}</p>
                <p class="hero-tagline">${t.hero.tagline}</p>
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
                    <img src="${item.image}" alt="${item.title}" loading="lazy">
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

                    <!-- Tablet: 2+2+1 layout -->
                    <div class="portfolio-tablet">
                        <!-- First row - 2 projects -->
                        <div class="portfolio-tablet-row-1">
                            ${items.slice(0, 2).map(item => portfolioItemHTML(item)).join('')}
                        </div>
                        
                        <!-- Second row - 2 projects -->
                        <div class="portfolio-tablet-row-2">
                            ${items.slice(2, 4).map(item => portfolioItemHTML(item)).join('')}
                        </div>
                        
                        <!-- Third row - 1 project centered -->
                        <div class="portfolio-tablet-row-3">
                            ${items.slice(4, 5).map(item => portfolioItemHTML(item)).join('')}
                        </div>
                    </div>

                    <!-- Desktop: 3+2 layout -->
                    <div class="portfolio-desktop">
                        <!-- First row - 3 projects -->
                        <div class="portfolio-desktop-row-1">
                            ${items.slice(0, 3).map(item => portfolioItemHTML(item)).join('')}
                        </div>
                        
                        <!-- Second row - 2 projects centered -->
                        <div class="portfolio-desktop-row-2">
                            <div class="portfolio-desktop-row-2-inner">
                                ${items.slice(3, 5).map(item => portfolioItemHTML(item)).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function createServicesHTML() {
    const t = content[language];
    const servicesData = services[language];

    // Explanation containers for small vs bigger websites
    const smallSitesHTML = `
        <div class="site-type-container small-site">
            <h3 class="site-type-title">${language === 'en'
            ? 'Small Websites (Static)'
            : 'Petits sites web (statique)'}</h3>
            <p class="site-type-description">
                ${language === 'en'
            ? "Perfect for portfolios, landing pages, or simple info sites. Fast, secure, and budget-friendly custom-coded solutions."
            : "Parfait pour les portfolios, pages de présentation ou sites vitrines simples. Solutions codées sur mesure, rapides, sécurisées et économiques."}
            </p>
        </div>
    `;

    const bigSitesHTML = `
        <div class="site-type-container big-site">
            <h3 class="site-type-title">${language === 'en'
            ? 'Regular Websites'
            : 'Sites réguliers'}</h3>
            <p class="site-type-description">
                ${language === 'en'
            ? "Need an online shop, blog, or regular updates? I set up platforms like Shopify, WordPress, Wix, or Webflow and customize them for your needs."
            : "Besoin d’une boutique en ligne, d’un blog ou de mises à jour régulières ? Je configure et personnalise des plateformes comme Shopify, WordPress, Wix ou Webflow selon vos besoins."}
            </p>
        </div>
    `;

    return `
        <div class="services-section">
            <div class="container">
                <h2 class="section-title">${t.services.title}</h2>
                <p class="contact-subtitle">${t.services.subtitle}</p>
                
                                <!-- Website type explanations -->
                <div class="website-types grid gap-6 md:grid-cols-2 mb-8">
                    ${smallSitesHTML}
                    ${bigSitesHTML}
                </div>

                <div class="services-grid">
                    ${servicesData.map(service => `
                        <div class="service-item">
                            <div class="service-header">
                                <i data-lucide="${service.icon}" class="service-icon"></i>
                                <h4 class="service-name">${service.name}</h4>
                            </div>
                            <p class="service-description">${service.description}</p>
                        </div>
                    `).join('')}
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
                                <input type="text" id="name" name="name">
                            </div>
                            <div class="form-field">
                                <label for="email">${t.contact.emailLabel}</label>
                                <input type="email" id="email" name="email">
                            </div>
                        </div>
                        <div class="form-field">
                            <label for="message">${t.contact.messageLabel}</label>
                            <textarea id="message" name="message" rows="5" placeholder="${t.contact.messagePlaceholder}"></textarea>
                        </div>

                        <input type="hidden" name="_replyto" value="">
                        <input type="hidden" name="_next" value="thank-you.html">

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