export type ChatGPTAgent = "user" | "system";


 
export interface ChatGPTMessage {
    role: ChatGPTAgent;
    content: string;
  }
  

  export interface OpenAIStreamPayload{
    model:string;
    messages:ChatGPTMessage[];
    temperature:number;
    top_p: number;
    frequency_penalty: number;
    presence_penalty: number,
    max_tokens: number,
    stream: boolean
}


export async function OpenAIStream(payload:OpenAIStreamPayload){
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();

  let counter = 0;

  const response = await fetch('https://api.openai.com/v1/engines/davinci/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    }
  
    });
    
}