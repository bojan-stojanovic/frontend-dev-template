import { defineConfig } from "vite";
import mqMerge from "postcss-merge-queries";
import autoprefixer from "autoprefixer";

// place your html pages in this array as string ie. 'homepage', 'detail-page'. Pages should be in root directory
const additionalPages = [];

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // command === "dev" || command === "preiew"
  if (command === 'serve') {
    return {
      css: {
        preprocessorOptions: {
          // sourcemap for development ONLY!
          scss: {
            sourceMap: true,
            sourceMapEmbed: true
          },
        },
      },
      server: {
        host: true,
        open: true
      }
    }
  } else {
    // command === 'build'
    return {
      base: "",
      build: {
        rollupOptions: {
          input: {
            main: "index.html",
            ...additionalPages.map(page => {
              return `${page}.html`
            })
          },
          output: {
            entryFileNames: "js/[name].min.js",
            chunkFileNames: "js/[name]-chunk.min.js",
            assetFileNames: "css/styles.min[extname]"
          }
        },
      },
      css: {
        postcss: {
          plugins: [
            autoprefixer(),
            mqMerge({
              sort: true,
            })
          ],
        },
      }
    }
  }
});