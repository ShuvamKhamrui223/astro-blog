import { defineCollection, z } from "astro:content";


const travel = defineCollection({
    schema: z.object({
        title: z.string(),
        author: z.string(),
        date: z.date(),
        type: z.string(),
        description: z.string(),
        categories: z.array(z.string()),
        tags: z.array(z.string()),
        draft: z.boolean().default(true),
        featured: z.boolean(),
    }),
});

const guides = defineCollection({
    schema: z.object({
        title: z.string(),
        author: z.string(),
        date: z.date(),
        type: z.string(),
        description: z.string(),
        categories: z.array(z.string()),
        tags: z.array(z.string()),
        draft: z.boolean().default(true),
        featured: z.boolean(),
    }),
});

const webdev = defineCollection({
    schema: z.object({
        title: z.string(),
        author: z.string(),
        date: z.date(),
        type: z.string(),
        description: z.string(),
        categories: z.array(z.string()),
        tags: z.array(z.string()),
        draft: z.boolean().default(true),
        featured: z.boolean(),
    }),
});

const cooking = defineCollection({
    schema: z.object({
        title: z.string(),
        author: z.string(),
        date: z.date(),
        type: z.string(),
        description: z.string(),
        categories: z.array(z.string()),
        tags: z.array(z.string()),
        draft: z.boolean().default(true),
        featured: z.boolean(),
    }),
});

export const collections = { webdev, travel, cooking };
