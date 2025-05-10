// @ts-check
import { defineConfig } from "astro/config";
import path from 'path';

import tailwindcss from "@tailwindcss/vite";
import vue from "@astrojs/vue";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://coins5.dev",
  integrations: [vue(), mdx()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      },
    },
  },
});