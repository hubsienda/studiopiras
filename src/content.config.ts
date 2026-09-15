import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
const approfondimenti = defineCollection({ loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/approfondimenti' }), schema: z.object({ title:z.string(), description:z.string(), pubDate:z.coerce.date().optional(), draft:z.boolean().default(true), area:z.string().optional() }) });
export const collections = { approfondimenti };
