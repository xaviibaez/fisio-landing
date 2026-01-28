import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://www.axiscambrils.com',
  output: 'static',
  adapter: netlify(),
  i18n: {
    defaultLocale: 'ca',
    locales: ['ca', 'es', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
