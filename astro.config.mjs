import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: 'https://github.com/Daniel-Jaekel',
  base: '/github-page-test-2',
  integrations: [preact()]
});