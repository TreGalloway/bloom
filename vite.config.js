import { defineConfig } from 'vite';

export default defineConfig({
  // Configuration for the development server (run with 'npm run dev' or 'vite')
  server: {
    // The hostnames that Vite is allowed to respond to during development.
    // 'tregalloway.com' is added here.
    // If you are using a proxy/reverse proxy, you might need to add its host here too.
    allowedHosts: [
      'tregalloway.com'
    ],
  },

  // Configuration for the preview server (run with 'npm run preview' or 'vite preview')
  preview: {
    // The hostnames that Vite is allowed to respond to when previewing the build.
    allowedHosts: [
      'tregalloway.com'
    ],
    // If your preview is running on a different port, you might need to set it here:
    // port: 4173
  }

  // ... other Vite configuration options (plugins, build, etc.)
});
