import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// PLACEHOLDER: change `site` to your real domain before deploying.
// It is used for sitemap.xml and canonical URLs.
export default defineConfig({
  site: 'https://example.com',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
