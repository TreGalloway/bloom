// astro.config.mjs
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  integrations: [mdx()],

  // Astro dev server settings (optional, but nice to keep consistent)
  server: {
    host: true,
    port: 4321,
  },

  // Astro preview server settings (THIS is what `astro preview` uses)
  preview: {
    host: true,
    port: 4321,
  },

  // Vite settings (this is where allowedHosts belongs)
  vite: {
    plugins: [tailwindcss()],
    preview: {
      allowedHosts: ["tregalloway.com", "localhost"],
    },
  },
});
