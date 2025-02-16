import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@componants": "/src/componants",
      "@layouts": "/src/layouts",
      "@assets": "/src/assets",
      "@constants": "/src/constants",
      "@baseNavigator": "/src/baseNavigator",
    },
  },
})
