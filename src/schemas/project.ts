import { reference, z } from "astro:content";
import { url } from "inspector";

export const projectSchema = z.object({
  repo: z.string(),
  title: z.string(),
  url: z.string().url(),
  description: z.string(),
  image: z.string(),
  relatedSeries: z.array(reference("serie")).default([]),
});

export type ProjectSchema = z.infer<typeof projectSchema>;
