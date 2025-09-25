// Import the glob loader
import { glob, file } from "astro/loaders";
// Import utilities from `astro:content`
import { defineCollection } from "astro:content";
import { blogSchema } from "@/schemas/blog";
import { authorSchema } from "@/schemas/author";
import { serieSchema } from "@/schemas/serie";
import { attachmentSchema } from "@/schemas/attachment";
import { projectSchema } from "@/schemas/project";

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

// Define a `loader` and `schema` for each collection
const attachment = defineCollection({
  loader: file("./src/data/attachments/attachments.json"),
  schema: attachmentSchema,
});

// Define a `loader` and `schema` for each collection
const project = defineCollection({
  loader: file("./src/data/projects/projects.json"),
  schema: projectSchema,
});

// Export a single `collections` object to register your collection(s)
export const collections = { blog, author, serie, attachment, project };
