import { defineCollection, z } from 'astro:content';

const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    description: z.string().optional(),
    domain: z.string(),
    order: z.number(),
    ogImage: z.string().optional(),
  }),
});

export const collections = {
  'case-studies': caseStudies,
};
