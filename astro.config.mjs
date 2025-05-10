// @ts-check
import { defineConfig } from "astro/config";
import path from 'path';

import tailwindcss from "@tailwindcss/vite";
import vue from "@astrojs/vue";

import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://coins5.dev",
  integrations: [vue(), mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      },
    },
  },
});