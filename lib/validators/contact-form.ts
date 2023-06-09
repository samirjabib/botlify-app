import { z } from 'zod'

export const ContactSchema = z.object({
    name: z.string().min(3).max(50).nonempty(),
    email: z.string().email().min(3).max(50),
    phone: z.string(),
    message: z.string(),
})

export type ContactSchema = z.infer<typeof ContactSchema>
