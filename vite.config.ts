import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/Saneeth_Portfolio/",  // Ensure this matches your repo name
});