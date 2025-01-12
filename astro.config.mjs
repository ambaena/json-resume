import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel'

// https://astro.build/config
export default defineConfig({
  site: 'https://alfonsobaena.dev',
  build: {
    assetsPrefix: '.'
  },
  integrations: [tailwind()],
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  vite: {
    define: {
      'import.meta.env.PUBLIC_VERCEL_ANALYTICS_ID': JSON.stringify(
        process.env.VERCEL_ANALYTICS_ID,
      ),
      'import.meta.env.PUBLIC_VERCEL_URL': JSON.stringify(
        process.env.VERCEL_URL,
      ),
    },
  },
});
