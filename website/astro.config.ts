import { defineConfig } from 'astro/config';
import partytown from "@astrojs/partytown";
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);



// https://astro.build/config
export default defineConfig({
  build: {
    format: 'directory'
  },
  integrations: [partytown({
    // Adds dataLayer.push as a forwarding-event.
    config: {
      forward: ["dataLayer.push"]
    }
  }), svelte(), tailwind({
    config: {
      applyBaseStyles: false
    }
  }), sitemap()],
  vite: {
    plugins: [],
    resolve: {
      alias: {
        '$': resolve(__dirname, './src')
      }
    },
    optimizeDeps: {
      allowNodeBuiltins: true
    }
  }
});