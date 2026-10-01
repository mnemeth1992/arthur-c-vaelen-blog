import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default('Arthur C. Vaelen'),
    coverImage: z.string().optional(),
    imagePrompt: z.string().optional(),
    tags: z.array(z.string()),
    draft: z.boolean().default(false),
    slug: z.string().optional(),
    series: z.object({
      name: z.string(),
      part: z.number(),
      totalParts: z.number().optional(),
    }).optional(),
  }),
});

export const collections = {
  blog,
};
