import { z } from 'zod'


export const messageSchema = z.object({
    id: z.string(),
    isUserMessage: z.boolean(),
    text: z.string(),
})

export type Message = z.infer<typeof messageSchema>