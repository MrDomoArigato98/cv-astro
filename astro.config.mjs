// @ts-check
import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
  // Used for absolute URLs in canonical / Open Graph tags (Layout.astro).
  site: "https://dodobro.cv",
  // Static output is required for Vercel's static adapter / plain CDN hosting.
  output: "static",
  // Downloaded at build time and served from this site — no runtime request
  // to a font CDN. Fontsource rather than Google: it serves static per-weight
  // files, while Google serves variable fonts, which Chrome's "Save as PDF"
  // embeds as Type 3 glyphs with visibly uneven letter spacing.
  // The generated family names are hashed, so always reference these
  // through the CSS variables, never by family name.
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Inter",
      cssVariable: "--font-inter",
      weights: [400, 500, 600, 700],
    },
    {
      provider: fontProviders.fontsource(),
      name: "JetBrains Mono",
      cssVariable: "--font-jetbrains-mono",
      weights: [400, 500, 700],
      fallbacks: ["monospace"],
    },
  ],
});
