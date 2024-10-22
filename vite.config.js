import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['react-google-recaptcha'],
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3004', 
        changeOrigin: true, 
        secure: false   
      }
    }
  }
});
