import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    author: z.string().default("Antti Hiltunen"),
  }),
});

const work = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/work" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    category: z.enum(["professional", "personal"]),
    order: z.number(),
    links: z.array(z.object({
      label: z.string(),
      url: z.string(),
    })).default([]),
  }),
});

const about = defineCollection({
  loader: glob({ pattern: "about.md", base: "./src/content/about" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lead: z.string(),
    contactLinks: z.array(z.object({
      label: z.string(),
      url: z.string(),
      external: z.boolean().default(false),
    })),
  }),
});

export const collections = { blog, work, about };
