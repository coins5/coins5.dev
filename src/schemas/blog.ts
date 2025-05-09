import { z } from "astro:content";

export const blogSchema = z.object({
  title: z.string(),
  pubDate: z.date(),
  description: z.string(),
  author: z.string(),
  image: z.object({
    url: z.string(),
    alt: z.string(),
  }),
  tags: z.array(z.string()),
});

// Exporta el tipo TypeScript
export type BlogSchema = z.infer<typeof blogSchema>;
