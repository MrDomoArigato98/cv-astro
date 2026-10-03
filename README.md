# CV Website — Astro

A statically generated CV/portfolio site built with [Astro](https://astro.build), deployed at [dodobro.cv](https://dodobro.cv). Nearly all content lives in typed data files in `src/data/` — components render that data, they don't hold copy themselves.

---

## Project structure

```
src/
├── components/         # One Astro component per section
│   ├── Nav.astro        # Links, theme toggle, Corpo/Personality toggle, brand mark
│   ├── Hero.astro       # Name, title, contact links, Save-as-PDF button, summary
│   ├── Timeline.astro   # Experience and Education cards (index.astro maps both data files onto it)
│   ├── Skills.astro
│   ├── Projects.astro
│   └── Contact.astro
├── data/                # Edit your content here
│   ├── profile.ts       # Name, title, location, contact links, summary
│   ├── experience.ts    # Work history (each entry can carry a company `logo`)
│   ├── education.ts     # Degrees and placements (each entry can carry an institution `logo`)
│   ├── skills.ts        # Skill categories and tags
│   └── projects.ts      # Portfolio projects
├── assets/
│   └── projects/
│       ├── Logos/        # Company/institution logos used in Experience & Education
│       └── houseshare/   # Screenshots for the Houseshare project card
├── layouts/
│   └── Layout.astro     # HTML shell, meta/Open Graph tags, fonts, global CSS + print CSS, design tokens
└── pages/
    └── index.astro      # Assembles all components

public/
├── favicon.svg           # Source favicon (also inlined in Nav.astro / Hero.astro as the brand mark)
├── favicon.ico           # Multi-res fallback, generated from favicon.svg
└── og.png                # 1200×630 link-preview image — static, update it if name/title change
```

## Notes

- **PDF version** — the "Save as PDF" button opens the browser's print dialog. Print styles (`@media print` in `Layout.astro` and each component) turn the page into a 2-page A4 CV, in whichever voice (Personality / Recruiter-safe) is active.
- **Fonts** — self-hosted at build time via Astro's Fonts API (`astro.config.mjs`), referenced only through `--font-inter` / `--font-jetbrains-mono`.

---

## Running locally

```bash
npm install
npm run dev      # http://localhost:4321
```

## Building for production

```bash
npm run build    # outputs to dist/
npm run preview  # preview the built output locally
```
