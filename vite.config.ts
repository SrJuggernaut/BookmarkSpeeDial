import pluginReact from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [pluginReact()],
  resolve:{
    alias: {
      '@': path.resolve(__dirname, "./src"),
    }
  }
})
