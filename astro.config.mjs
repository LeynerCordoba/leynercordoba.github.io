import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://leynercordoba.github.io',
  base: 'leynercordoba.github.io',
  integrations: [tailwind()],
  devToolbar: {
    enabled: false
  }
});