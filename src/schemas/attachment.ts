import { z } from "astro:content";

export const attachmentSchema = z.object({
  name: z.string(),
  description: z.string(),
  url: z.string(),
  type: z.string(),
});

// Exporta el tipo TypeScript
export type AttachmentSchema = z.infer<typeof attachmentSchema>;
