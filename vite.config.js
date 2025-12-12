import { defineConfig } from 'vite';

export default defineConfig({
  // Configuration for the development server (run with 'npm run dev' or 'vite')
  server: {
    // The hostnames that Vite is allowed to respond to during development.
    allowedHosts: [
      'tregalloway.com'
    ],
  },

  // Configuration for the preview server (run with 'npm run preview' or 'vite preview')
  preview: {
    // The hostnames that Vite is allowed to respond to when previewing the build.
    allowedHosts: [
      'tregalloway.com',
      'https://tregalloway.com'
    ],
    // Ensure the preview server binds to all interfaces
    host: true,
    port: 4321
  }
});
