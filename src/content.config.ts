// Import the glob loader
import { glob } from "astro/loaders";
// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
import { blogSchema } from "./schemas/blog";

// Define a `loader` and `schema` for each collection
const blog = defineCollection({
  // loader: glob({ pattern: "**/[^_]*.md", base: "./src/blog" }),
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/blog" }),
  schema: blogSchema,
});
// Export a single `collections` object to register your collection(s)
export const collections = { blog };
