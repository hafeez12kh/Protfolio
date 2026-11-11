# Hafeez KH — Portfolio

A light-themed, responsive personal portfolio for Hafeez KH — Software Developer | Python & Django, built with React, Vite, and Tailwind CSS.

## Project structure

```
portfolio/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── .env.example
├── public/
│   ├── favicon.svg
│   ├── hafeez-portrait.jpg
│   └── Hafeez_KH_Resume.pdf
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── data/
    │   └── portfolioData.js      # All content lives here — edit this file to update text
    ├── hooks/
    │   └── useReveal.js          # Scroll-triggered fade-in
    └── components/
        ├── Container.jsx
        ├── SectionHeading.jsx
        ├── Reveal.jsx
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Skills.jsx
        ├── Projects.jsx
        ├── ProjectCard.jsx
        ├── Experience.jsx
        ├── Education.jsx
        ├── Contact.jsx
        └── Footer.jsx
```

## Install dependencies

```bash
cd portfolio
npm install
```

## Run locally

```bash
npm run dev
```

This starts Vite's dev server (usually at `http://localhost:5173`) with hot reload.

## Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

## Configuration & Setup

### 1. Contact Form (Formspree)
The contact form in `Contact.jsx` is connected to [Formspree](https://formspree.io) using Vite environment variables:
1. Create a form endpoint on [Formspree](https://formspree.io).
2. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
3. Add your Formspree endpoint in `.env`:
   ```env
   VITE_FORMSPREE_URL=https://formspree.io/f/your_form_id
   ```

### 2. Resume PDF
Place your resume PDF named `Hafeez_KH_Resume.pdf` inside the `public/` directory. The "Download Resume" buttons across the Navbar, Hero, and Footer are wired to `/Hafeez_KH_Resume.pdf`.

### 3. Social & Repository Links
All links are configured directly in `src/data/portfolioData.js`:
- GitHub: [https://github.com/hafeez12kh](https://github.com/hafeez12kh)
- LinkedIn: [https://linkedin.com/in/hafeez-kh](https://linkedin.com/in/hafeez-kh)
- Email: [hafeez12kh@gmail.com](mailto:hafeez12kh@gmail.com)
- Project Repositories:
  - IqraaMart: [https://github.com/hafeez12kh/iqraamart-ecommerce-backend](https://github.com/hafeez12kh/iqraamart-ecommerce-backend)
  - AttendX: [https://github.com/hafeez12kh/AttendX](https://github.com/hafeez12kh/AttendX)
  - PackageHub: [https://github.com/hafeez12kh/packageHub-django](https://github.com/hafeez12kh/packageHub-django)

## Notes

- All content reflects the resume of Hafeez KH (Software Developer | Python & Django).
- Colors, type, and spacing are defined as design tokens in `tailwind.config.js`.
- Animations respect `prefers-reduced-motion`.
