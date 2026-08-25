# Hafeez KH — Portfolio

A light-themed, responsive personal portfolio built with React, Vite, and Tailwind CSS.

## Project structure

```
portfolio/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── public/
│   └── favicon.svg
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

## Before you deploy — placeholders to fill in

Email, phone, and GitHub are now filled in from your resume. A couple of
things are still placeholders in `src/data/portfolioData.js` — search for
`Placeholder` comments:

- `profile.resumeUrl` — link to your resume PDF (place the file in `public/` and point to it, e.g. `/resume.pdf`)
- Each project's `githubUrl` — repository links
- `experience[1].role` (Cognizof) — your resume lists this company as "Cognifyz Technologies," Web Development Intern, Feb–Mar 2026 — let me know if you'd like that corrected, plus the Softronics internship (Dec 2023–Jan 2024) added

The contact form in `Contact.jsx` is fully built but **not connected to an email
service** — submitting it currently only logs the data to the console. To make
it functional, wire `handleSubmit` up to a service such as Formspree, EmailJS,
or your own API endpoint.

Also add `public/og-image.png` (1200×630) if you'd like a custom social-share
preview image — `index.html` already references it.

## Notes

- All content is sourced only from the information provided about Hafeez KH — no
  fabricated employers, projects, statistics, or credentials.
- Colors, type, and spacing are defined as design tokens in `tailwind.config.js`.
- Animations respect `prefers-reduced-motion`.
