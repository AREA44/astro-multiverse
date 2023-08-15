import Compress from 'astro-compress'
import Critters from 'astro-critters'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-multiverse.netlify.app',
  integrations: [Critters(), Compress({ SVG: false })],
})
