// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  // Static output is required for Vercel's static adapter / plain CDN hosting.
  output: "static",
});
