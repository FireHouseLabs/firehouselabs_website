import { defineCollection, z } from 'astro:content';

const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    client: z.string(),
    industry: z.string(),
    tool: z.string(),
    platform: z.string(),
    challenge: z.string(),
    impact: z.string(),
    pubDate: z.string()
  })
});

export const collections = {
  'case-studies': caseStudies,
};
