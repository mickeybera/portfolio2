import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['react-hot-toast'], // Add this line
      external: ['react-typed'],
    },
    optimizeDeps: {
      include: ['react-icons'], // Add this line
    },
  },
});
