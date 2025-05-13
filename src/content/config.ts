import { defineCollection, z } from 'astro:content';

const showcase = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    client: z.string(),
    date: z.string(),
    image: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  showcase: showcase,
};
