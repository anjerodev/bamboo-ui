import { defineCollection, z } from 'astro:content'

const docsCollections = defineCollection({
  type: 'content',
  schema: z.object({
    order: z.number(),
    title: z.string(),
    description: z.string().optional(),
  }),
})

const componentsCollections = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
})

export const collections = {
  docs: docsCollections,
  components: componentsCollections,
}
