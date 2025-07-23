# Ariane Saulnier – Portfolio Website

This is my bilingual personal portfolio website.

I am a UI/UX Designer and Web Developer based in Paris. The website is designed to showcase projects and services, while providing a visually interactive user experience.

Live preview: [arianesaulnier.com](https://arianesaulnier.com)  
GitHub: [github.com/aria-vero-s/ariane-portfolio](https://github.com/aria-vero-s/ariane-portfolio)

## Features

- **Bilingual Support** (EN / FR)  
- **Dynamic Page Transitions** with SVG circle reveals  
- **Lucide Icon Integration**  
- **Interactive Portfolio Showcase**  
- **Animated SVG Circuit Board Pattern**  
- **Skill Progress Bars**  
- **Fully Responsive Design**

## Style & Design

The design is modern, with focus on usability and minimalism:

- **Color Palette**  
  - Primary blue: `#091bd9`  
  - Light neutrals: `#f5f1f0` (background) & borders with subtle transparency around blue  
- **Typography**  
  - System font stack (`-apple-system`, `Segoe UI`, `Roboto`, ...) for optimal legibility and performance  
  - Hierarchy: large hero titles (4–9 rem), clear section headings (2.25 rem), body fonts scaled for readability
- **Interactions & Transitions**  
  - Smooth transitions: hover states on nav, buttons, cards  
  - SVG circuit animation uses CSS keyframes to draw and fade lines, pads, and vias for dynamic visual interest  
  - Clip-path circle reveals on navigation add a tactile, immersive feel
- **Layout & Responsiveness**  
  - Central fixed navigation that adapts: icon-only on mobile, icon + text on wider screens  
  - Responsive grid systems:
    - Portfolio: 1‑column (mobile), 2‑plus‑1 layout (tablet), 3+2 layout (desktop)
    - Service and contact sections with adaptive grid or column arrangements
- **Components & UI Patterns**  
  - Buttons: `.btn-primary` (solid) and `.btn-outline` (bordered), programmable size classes  
  - Cards and containers with soft rounded corners, consistent border styling  
  - A unified card design for skills, projects, services, and contact form enhances cohesion

## Built With

- **HTML5**
- **CSS3**
- **JavaScript (Vanilla)**
- **Lucide Icons** (via CDN)
- **SVG animations** for decorative circuit patterns

## Project Structure

```plaintext
├── index.html              # Main HTML file
├── styles.css              # Custom styles
├── script.js               # Application logic and transitions
├── images/                 # Project and section images
├── favicon.ico             # Site icon
└── README.md               # This file
```

## Getting Started

To run locally:
```
git clone https://github.com/Aria-vero-s/ariane-portfolio.git
```
No build process or dependencies—fully static and works offline.

## Language Toggle

The site supports English and French. Toggle switches language dynamically without reloading.

## Portfolio Projects

| Project Name           | Description                                | Live Link | GitHub |
|------------------------|--------------------------------------------|-----------|--------|
| Freelancer Portfolio   | Website for a freelance engineer           | [Live](https://aria-vero-s.github.io/camping/) | [Code](https://github.com/aria-veros/camping) |
| Musician Portfolio     | Elegant portfolio for a pianist            | [Live](https://paolorubinacci.com) | [Code](https://github.com/aria-veros/pianist) |
| E-Commerce Website     | Beauty shop with checkout and product management | (WIP)     | [Code](https://github.com/aria-veros/glow) |
| Python Quiz App        | Terminal app with Google Sheets API        | –         | [Code](https://github.com/aria-veros/enviro) |
| C Arcade Game          | Retro arcade game written in C             | –         | [Code](https://github.com/aria-veros/so_long) |


## Customization

To add new items:

- Update arrays in script.js: portfolioItems, services, content, etc.
- Add images in images/
- Optionally tweak circuit animation in createCircuitPattern().

## Contact

Reach out via:

- Email: ariane.saulnier@gmail.com
- GitHub: [aria-vero-s](https://github.com/Aria-vero-s)
- LinkedIn: [in/ariane-saulnier/](https://www.linkedin.com/in/ariane-saulnier/)

## License

This project is **not open source** and is provided with **All Rights Reserved**.  
You may not copy, modify, distribute, or use any part of this code without explicit written permission.

## Author

Ariane Saulnier
UI/UX Designer & Web Developer
Based in Paris (originally Canada)
Student at École 42, Code Institute alumna
