import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
  },
  base: process.env.NODE_ENV === 'production' 
    ? '/foka/' 
    : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Copy public folder contents
    copyPublicDir: true
  }
});
