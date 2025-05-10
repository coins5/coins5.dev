import { z } from "astro:content";

export const authorSchema =z.object({
    name: z.string()
  });

export type AuthorSchema = z.infer<typeof authorSchema>;