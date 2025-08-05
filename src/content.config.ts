// Import the glob loader
import { glob } from "astro/loaders";
// Import utilities from `astro:content`
import { defineCollection } from "astro:content";
import { blogSchema } from "@/schemas/blog";
import { authorSchema } from "@/schemas/author";
import { serieSchema } from "@/schemas/serie";

// Define a `loader` and `schema` for each collection
const blog = defineCollection({
  // loader: glob({ pattern: "**/[^_]*.md", base: "./src/blog" }),
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/blog" }),
  schema: blogSchema,
});

// Define a `loader` and `schema` for each collection
const author = defineCollection({
  // loader: glob({ pattern: "**/[^_]*.md", base: "./src/blog" }),
  loader: glob({ pattern: "**/[^_]*.json", base: "./src/data/authors" }),
  schema: authorSchema,
});

// Define a `loader` and `schema` for each collection
const serie = defineCollection({
  // loader: glob({ pattern: "**/[^_]*.md", base: "./src/blog" }),
  loader: glob({ pattern: "**/[^_]*.json", base: "./src/data/series" }),
  schema: serieSchema,
});


// Export a single `collections` object to register your collection(s)
export const collections = { blog, author, serie };
