import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Zod schema validation for the Blog Collection.
 * Standardizes metadata for SEO, publishing status, classification tags,
 * and routing/i18n control.
 */
const blog = defineCollection({
  // Load markdown/mdx files from src/content/blog/ (handles subdirectories like en/ and es/)
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    // Strict SEO checks: titles must not exceed 60 characters
    title: z.string().max(60, {
      message: 'Title must be 60 characters or less for optimal SEO search results page presentation.',
    }),
    // Strict SEO checks: descriptions must not exceed 160 characters
    description: z.string().max(160, {
      message: 'Description must be 160 characters or less for optimal meta-description snippet presentation.',
    }),
    // Publication Date
    pubDate: z.coerce.date(),
    // Required language selection for routing & i18n
    lang: z.enum(['en', 'es'], {
      message: "Language must be either 'en' or 'es'.",
    }),
    // List of commercial or technological tags
    tags: z.array(z.string()),
    // Keywords for on-page SEO
    keywords: z.array(z.string()).optional(),
    // Custom Open Graph image URL or path
    ogImage: z.string().optional(),
    // Optional flag to set entry as draft
    draft: z.boolean().optional(),
  }),
});

/**
 * Zod schema validation for the Case Studies Collection ('cases').
 * Standardizes metadata for commercial validation, client credibility,
 * tech stack listing, and ROI metrics.
 */
const cases = defineCollection({
  // Load markdown/mdx files from src/content/cases/ (handles subdirectories like en/ and es/)
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/cases' }),
  schema: z.object({
    // Strict SEO checks for cases
    title: z.string().max(60, {
      message: 'Title must be 60 characters or less for optimal SEO search results page presentation.',
    }),
    description: z.string().max(160, {
      message: 'Description must be 160 characters or less for optimal meta-description snippet presentation.',
    }),
    // Client or platform identity (e.g. "Strategio", "NubaNutrición", "PróximaBolilla")
    clientName: z.string(),
    // Key high-impact metric for conversion / CRO proof points (e.g. "Hosting costs cut by 40%")
    impactMetric: z.string(),
    // Publication Date
    pubDate: z.date(),
    // Required language selection for routing & i18n
    lang: z.enum(['en', 'es'], {
      message: "Language must be either 'en' or 'es'.",
    }),
    // Tech stack list used in the project
    technologies: z.array(z.string()),
    // Keywords for on-page SEO
    keywords: z.array(z.string()).optional(),
    // Custom Open Graph image URL or path
    ogImage: z.string().optional(),
  }),
});

// Export all collections to trigger Astro static typing generation (.astro/types.d.ts)
export const collections = {
  blog,
  cases,
};
