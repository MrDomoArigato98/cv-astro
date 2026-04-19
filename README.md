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

## Data schemas

### `profile.ts`

```ts
{
  name:     string;   // Full name
  title:    string;   // One-line role title
  location: string;   // City, Country
  email:    string;
  phone:    string;
  linkedin: string;   // Full URL
  website:  string;   // Full URL
  summary:  string;   // Hero paragraph
}
```

### `experience.ts`

Array of `ExperienceItem`:

```ts
{
  title:    string;    // Job title
  company:  string;
  level?:   string;    // Optional level badge, e.g. "L5"
  period:   string;    // e.g. "June 2023 – Nov 2024"
  location: string;
  bullets:  string[];  // Achievements / responsibilities
}
```

### `education.ts`

Default export — array of `EducationItem`:

```ts
{
  degree:      string;
  institution: string;
  period:      string;
  location:    string;
  grade?:      string;   // Optional honour / classification
  bullets:     string[];
}
```

Named export `certifications` — `string[]` rendered as pills beneath the education list.

### `skills.ts`

Array of `SkillCategory`:

```ts
{
  category: string;   // Section heading
  items:    string[]; // Individual skill tags
}
```

### `projects.ts`

Array of `ProjectItem`:

```ts
{
  title:       string;
  description: string;
  tech:        string[];  // Tech stack tags
  url?:        string;    // Live site URL
  repo?:       string;    // Source code URL
}
```

> The Projects section is **hidden automatically** when the array is empty.

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

## Deploying to Vercel

1. Push the repo to GitHub.
2. Import the repo in [vercel.com/new](https://vercel.com/new).
3. Vercel detects Astro automatically. The `vercel.json` confirms the build command and output directory.
4. Click **Deploy**.

For a custom domain, add it under **Project → Settings → Domains** in the Vercel dashboard.

---

## Customisation tips

- **Design tokens** (colours, fonts, spacing) are CSS variables defined in `src/layouts/Layout.astro` inside the `:root` block.
- **Accent colour** — change `--accent` and `--accent-2` to update the highlight colour across the whole site.
- **Font** — replace the Google Fonts `<link>` in `Layout.astro` and update `--font-sans` / `--font-mono`.
- **Projects section** — add entries to `src/data/projects.ts`; the section appears automatically once the array is non-empty.
