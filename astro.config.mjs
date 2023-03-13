// https://astro.build/config
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://astro-multiverse.netlify.app",
  experimental: {
    assets: true,
  },
  integrations: [sitemap()],
});
