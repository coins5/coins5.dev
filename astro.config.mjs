// @ts-check
import { defineConfig } from "astro/config";
import path from "path";

import tailwindcss from "@tailwindcss/vite";
import vue from "@astrojs/vue";

import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";
import webmanifest from "astro-webmanifest";

// https://astro.build/config
export default defineConfig({
  site: "https://coins5.dev",
  integrations: [
    vue(),
    mdx(),
    sitemap(),
    webmanifest({
      name: "Coins5.dev",
      icon: "src/assets/images/coins5.dev.png",

      short_name: "Coins5",
      description: "Digital Experiences, Thoughtful and Scalable",
      start_url: "/",
      // theme_color: '#3367D6',
      // background_color: '#3367D6',
      display: "standalone",
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve("./src"),
      },
    },
  },
});
