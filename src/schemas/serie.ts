import { z, reference } from "astro:content";

export const serieSchema = z.object({
  name: z.string(),
  description: z.string(),
  authors: z.array(reference("author")).default([]),
  image: z
    .object({
      url: z.string(),
      alt: z.string(),
    })
    .nullish(),
  attachments: z.array(reference("attachment")).default([]),
  coverImage: z.string().nullish(),
  isFeatured: z.boolean().default(false),
  firstEntry: reference("blog"),
});

// Exporta el tipo TypeScript
export type SerieSchema = z.infer<typeof serieSchema>;
