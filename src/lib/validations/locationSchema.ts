import { z } from 'zod'

export const locationSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  slug: z.string().optional(),
  city: z.string().min(2, 'City is required').default('Kochi'),
  description: z.string().optional(),
  image: z.string().url('Invalid URL').optional(),
  propertyCount: z
    .number()
    .min(0, 'Property count must be positive')
    .optional()
    .default(0),
})

export type LocationFormValues = z.infer<typeof locationSchema>
