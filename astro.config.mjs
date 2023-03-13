import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-multiverse.netlify.app",
  experimental: {
    assets: true,
  },
  integrations: [sitemap()],
});
