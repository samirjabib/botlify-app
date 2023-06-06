import chatbotPrompt from "../../../lib/open-ai/chatbot-prompt"
import { ChatGPTMessage, OpenAIStreamPayload } from '../../../lib/open-ai/openai-stream';
import { Message, MessageArraySchema } from "../../../lib/validators/message"

export async function POST(req:Request){
    const { messages } = await req.json()  

    const parsedMessages = MessageArraySchema.parse(messages)

    const outboundMessages : ChatGPTMessage[] = parsedMessages.map((message : Message) => ({
        role: message.isUserMessage ? "user" : "system",
        content: message.text
    }))


    outboundMessages.unshift({
        role: "system",
        content:chatbotPrompt
    })



    const payload : OpenAIStreamPayload = {
        model:'gpt-3.5-turbo',
        messages:outboundMessages,
        temperature:0.4,
        top_p: 1,
        frequency_penalty:0,
        presence_penalty:0,
        max_tokens:150,
        stream:true
    }

    const stream = await OpenAIStreamPayload(payload)
    
    return new Response(stream)
}


