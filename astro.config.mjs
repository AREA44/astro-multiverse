import compress from 'astro-compress';
import critters from 'astro-critters';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-multiverse.netlify.app',
  integrations: [critters(), compress({ svg: false })],
});
