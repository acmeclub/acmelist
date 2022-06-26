import { defineConfig } from 'vite'
import preact from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact(), svgr({
    exportAsDefault: true,
  })],
});

