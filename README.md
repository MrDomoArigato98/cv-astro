# CV Website — Astro

A statically generated CV/portfolio site built with [Astro](https://astro.build). No content is hardcoded in components — everything comes from typed data files in `src/data/`.

---

## Project structure

```
src/
├── components/       # One Astro component per section
│   ├── Nav.astro
│   ├── Hero.astro
│   ├── Experience.astro
│   ├── Education.astro
│   ├── Skills.astro
│   ├── Projects.astro
│   └── Contact.astro
├── data/             # Edit your content here
│   ├── profile.ts    # Name, title, location, contact links, summary
│   ├── experience.ts # Work history
│   ├── education.ts  # Degrees and certifications
│   ├── skills.ts     # Skill categories and tags
│   └── projects.ts   # Portfolio projects (empty by default)
├── layouts/
│   └── Layout.astro  # HTML shell, global CSS, design tokens
└── pages/
    └── index.astro   # Assembles all components
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

## Customisation

- **Design tokens** (colours, fonts, spacing) are CSS variables defined in `src/layouts/Layout.astro` inside the `:root` block.
- **Accent colour** — change `--accent` and `--accent-2` to update the highlight colour across the whole site.
- **Font** — replace the Google Fonts `<link>` in `Layout.astro` and update `--font-sans` / `--font-mono`.
- **Projects section** — add entries to `src/data/projects.ts`; the section appears automatically once the array is non-empty.
