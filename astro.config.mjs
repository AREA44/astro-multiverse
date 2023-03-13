import { defineConfig } from "astro/config";
import image from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-multiverse.netlify.app",
  integrations: [sitemap()],
});
