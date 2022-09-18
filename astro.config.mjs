import { defineConfig } from 'astro/config';
import image from "@astrojs/image";

export default defineConfig({
  site: "https://astro-multiverse.netlify.app",
  integrations: [image()]
});