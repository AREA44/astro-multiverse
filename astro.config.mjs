import { defineConfig } from 'astro/config';
import image from "@astrojs/image";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-multiverse.netlify.app",
  integrations: [image(), partytown()]
});