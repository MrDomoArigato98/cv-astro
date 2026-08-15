# CV Website — Astro

A statically generated CV/portfolio site built with [Astro](https://astro.build), deployed at [dodobro.cv](https://dodobro.cv). Nearly all content lives in typed data files in `src/data/` — components render that data, they don't hold copy themselves.

---

## Project structure

```
src/
├── components/         # One Astro component per section
│   ├── Nav.astro        # Links, theme toggle, Corpo/Personality toggle, brand mark
│   ├── Hero.astro       # Name, title, contact links, summary
│   ├── Experience.astro
│   ├── Education.astro
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
│   └── Layout.astro     # HTML shell, global CSS, design tokens, favicon links
└── pages/
    └── index.astro      # Assembles all components

public/
├── favicon.svg           # Source favicon (also inlined in Nav.astro / Hero.astro as the brand mark)
└── favicon.ico           # Multi-res fallback, generated from favicon.svg
```

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

---

## Content conventions

- **Two voices** — `profile.ts` has a `summary`/`summaryCorpo` pair and a `contactCta`/`contactCtaCorpo` pair. Nav.astro's toggle switches between them (`html.corpo` class); default is the personality voice. Keep both in sync when you change one.
- **Company/institution logos** — `experience.ts` and `education.ts` items take an optional `logo: ImageMetadata`. Import from `src/assets/projects/Logos/`; the components render it as a small white chip so dark wordmarks stay legible in dark mode too.
- **Mobile "Tell me more"** — Experience/Education bullet lists and the Hero summary's later paragraphs collapse behind a "Tell me more" button below 640px (always fully expanded on desktop). It's a plain `<button>` + a small inline `<script>` per component (not `<details>` — a forced-open-on-desktop `<details>` was tried first and broke in Chromium, which hides closed `<details>` content via an internal mechanism plain CSS can't override). If you add this pattern elsewhere, scope `querySelectorAll` to that section's `id` — two components sharing an unscoped class name will double-fire the same click.
- **Favicon / brand mark** — regenerate `favicon.ico` from `favicon.svg` after editing it (e.g. via ImageMagick: `magick -background none favicon.svg -resize <size>x<size> favicon-<size>.png` for 16/32/48/64, then combine with `magick favicon-16.png favicon-32.png favicon-48.png favicon-64.png favicon.ico`). The same mark is duplicated inline in Nav.astro and Hero.astro so it renders in the site's actual font instead of a browser's favicon-context font fallback — update all three together.

---

## Customisation

- **Design tokens** (colours, fonts, spacing) are CSS variables defined in `src/layouts/Layout.astro` inside the `:root` block.
- **Accent colour** — change `--accent` and `--accent-2` to update the highlight colour across the whole site.
- **Font** — replace the Google Fonts `<link>` in `Layout.astro` and update `--font-sans` / `--font-mono`.
- **Projects section** — add entries to `src/data/projects.ts`; the section appears automatically once the array is non-empty.
