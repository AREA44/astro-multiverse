import { defineConfig } from 'astro/config'
import { FontaineTransform } from 'fontaine'

const VERCEL_PREVIEW_SITE =
  process.env.VERCEL_ENV !== 'production' &&
  process.env.VERCEL_URL &&
  `https://${process.env.VERCEL_URL}`

const site = VERCEL_PREVIEW_SITE || 'https://torn4dom4n.github.io'

// https://astro.build/config
export default defineConfig({
  site: process.env.CI ? site : 'http://localhost:4321',
  vite: {
    plugins: [
      FontaineTransform.vite({
        fallbacks: ['Arial'],
        resolvePath: (id) => new URL(`./public${id}`, import.meta.url),
      }),
    ],
  },
})
