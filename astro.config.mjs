// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  vite: {
    preview: {
      allowedHosts: ['tregalloway.com', 'https://tregalloway.com', 'localhost']  // Allow both domains
    }
  },
  server: {
    host: true, // Bind to 0.0.0.0 (not just localhost)
    port: 4321,
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
