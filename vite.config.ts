import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'src': path.resolve(__dirname, './src'),
      'img': path.resolve(__dirname, './src/img'),
      'sections': path.resolve(__dirname, './src/sections'),
      'utils': path.resolve(__dirname, './src/utils'),
  }
}})
