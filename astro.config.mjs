import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://arthur-c-vaelen.pages.dev',
  output: 'static',
  integrations: [tailwind()],
});
