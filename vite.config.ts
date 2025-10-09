import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: [
      'localhost',
      '127.0.0.1', 
      '127.0.0.1.nip.io', 
      "192.168.1.119.nip.io",
      'fullstack.192.168.1.119.nip.io',
      '87.249.138.181'
    ]
  },
  resolve: {
    alias: {
      'src': path.resolve(__dirname, './src'),
      'img': path.resolve(__dirname, './src/img'),
      'components': path.resolve(__dirname, './src/components'),
      'sections': path.resolve(__dirname, './src/components/sections'),
      'props': path.resolve(__dirname, './src/components/props'),
      'utils': path.resolve(__dirname, './src/utils'),
  }
}})
