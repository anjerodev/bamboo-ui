import { defineCollection, z } from 'astro:content'

export const docSchema = z.object({
  order: z.number().optional(),
  title: z.string(),
  description: z.string().optional(),
  badges: z.array(z.object({ name: z.string(), url: z.string() })).optional(),
})

const docsCollections = defineCollection({
  type: 'content',
  schema: docSchema,
})

export const collections = {
  docs: docsCollections,
  components: docsCollections,
}
