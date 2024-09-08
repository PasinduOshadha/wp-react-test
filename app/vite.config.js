import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy';
import path from "path";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets', // The path to the assets folder in src
          dest: '' // Destination will be the root of the dist folder
        }
      ]
    })
  ],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'build.js', // Customize the name of the output file
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') {
            return 'app-styles.css';  // Customize CSS output name
          }
          return assetInfo.name;
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
