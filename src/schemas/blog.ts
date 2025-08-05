import { z, reference } from "astro:content";

export const blogSchema = z.object({
  title: z.string(),
  pubDate: z.date(),
  description: z.string(),
  author: reference('author'),
  image: z.object({
    url: z.string(),
    alt: z.string(),
  }),
  tags: z.array(z.string()),
  relatedPosts: z.array(reference('blog')).default([]),
  nextPost: reference('blog').nullish(),
  // seriesPartNumber: z.number().nullish()
  seriesPartNumber: z.number().default(1)
});

// Exporta el tipo TypeScript
export type BlogSchema = z.infer<typeof blogSchema>;
