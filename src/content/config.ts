import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    date: z.date(),
    image: z.string().optional(),
    category: z.enum(['deportiva', 'traumatologica', 'neurologica', 'pediatrica', 'respiratoria', 'geriatrica']),
    tags: z.array(z.string()).optional(),
  }),
});

const servicesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    shortDescription: z.string(),
    description: z.string(),
    icon: z.string(),
    benefits: z.array(z.string()),
    process: z.array(z.object({
      step: z.string(),
      description: z.string(),
    })).optional(),
    duration: z.string().optional(),
    price: z.string().optional(),
    image: z.string().optional(),
    gallery: z.array(z.string()).optional(),
    faqs: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional(),
    order: z.number(),
  }),
});

export const collections = {
  'blog': blogCollection,
  'services': servicesCollection,
};
