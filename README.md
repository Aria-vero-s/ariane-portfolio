# Ariane Saulnier – Portfolio Website

This is my bilingual personal portfolio website.

I am a UI/UX Designer and Web Developer based in Paris. The website is designed to showcase projects and services, while providing a visually interactive user experience.

Live preview: [arianesaulnier.com](https://arianesaulnier.com)  
GitHub: [github.com/aria-vero-s/ariane-portfolio](https://github.com/aria-vero-s/ariane-portfolio)

## Features

- **Bilingual Support** (EN / FR)  
- **Guide Line**: one continuous stroke of ink, drawn down the page by scrolling  
- **Stacked Project Cards**: one project at a time, each card sliding over the last  
- **Lucide Icon Integration**  
- **Interactive Portfolio Showcase**  
- **Fully Responsive Design**

## Style & Design

The design is modern, with focus on usability and minimalism:

- **Color Palette**  
  - Primary blue: `#091bd9`  
  - Light neutrals: `#f5f1f0` (background) & borders with subtle transparency around blue  
- **Typography**  
  - System font stack (`-apple-system`, `Segoe UI`, `Roboto`, ...) for optimal legibility and performance  
  - Hierarchy: section titles (2 rem), sub-section titles (1.5 rem), body text (1 rem), all from the tokens in `variables.css`
- **Interactions & Transitions**  
  - Smooth transitions: hover states on nav, buttons, cards  
  - The page is a single scroll (Bio → Portfolio → Contact) led by one stroke of ink, drawn in SVG behind the content by `line.js`. It winds down beside the bio, from side to side behind the project cards, passes under the email address and runs off the bottom of the page
  - Landing: the statement appears first, then the nav. The line is not drawn until the reader scrolls, and at the top of the page it is back at its starting point, out of sight
  - At the end the line reaches water: once it has run off the bottom of the page, its blue rises to fill the contact section, and where the line meets the surface it swells out into it. The contact text is only ever shown under water, in the background colour, once the surface has risen over it
  - Rule: the line is never straight. It follows free-flowing curves, is smoothed like a stabilised pen, and is made to meander until no stretch of it runs straight; no corners, no loops
  - Its thickness follows pressure, like a flat brush held at an angle; it is made of three bundles of bristles that drift apart now and then, and ends in a tapered tip
  - Scrolling draws the line while the page holds still; when the tip reaches the bottom of the screen the page moves down to make room, then the line carries on. The page sits in a fixed stage and `line.js` turns the scroll position into how much is drawn and how far down the page is. At rest it leans on and now and then makes a small move towards what comes next
  - The bio is there as soon as the page opens, its words rising into place; other content marked `.r` is revealed as the tip passes it
  - Project cards stop near the top of the screen; each new one slides up over the last, which shrinks and dims a little behind it
  - With `prefers-reduced-motion` the content is simply there and the line follows the scroll without animation
- **Layout & Responsiveness**  
  - Central fixed navigation that scrolls to each section and follows the scroll; a slide-in menu on mobile  
  - Content sits in one column; the bio keeps to the left of it and the cards to the middle, leaving room for the line  
  - Responsive grid systems:
- **Components**
  - The line is the only decoration; everything else is type, cards and space

## Built With

- **HTML5**
- **CSS3**
- **JavaScript (Vanilla)**
- **Lucide Icons** (via CDN)
- **SVG** for the line

## Project Structure

```plaintext
├── index.html              # Main HTML file
├── styles.css              # Custom styles
├── script.js               # Content, rendering and navigation
├── line.js                 # The line: its path, scroll mapping and motion
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
| Music Festival         | Wordpress Music Festival Website             | [Live](https://fmclacbaker.com) | –         |
| Marketplace Website    | Marketplace website for services           | (WIP)     | [Code](https://github.com/ariastoryreport-wq/bigwatts) |
| Book Club Website       | Book club with OpenBook API and GoogleBooks API        | –         | [Live](https://aria-vero-s.github.io/book-club/) |
| C Arcade Game          | Retro arcade game written in C             | –         | [Code](https://github.com/aria-vero-s/so_long) |


## Customization

To add new items:

- Update portfolioItems and content in script.js.
- Add images in images/
- Mark new elements with the `r` class to have the line reveal them; the route it takes is laid out in `build()` in line.js.

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
