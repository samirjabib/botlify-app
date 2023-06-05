import {
  createParser,
  ParsedEvent,
  ReconnectInterval,
} from "eventsource-parser";

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


export async function OpenAIStreamPayload(payload:OpenAIStreamPayload){
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();

  let counter = 0;


  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OPENAI_API_KEY ?? ""}`,
    },
    method: 'POST',
    body: JSON.stringify(payload),
  });

  console.log(response,'  this is the response')

  

  // const stream = new ReadableStream({
  //     async start(controller) {
  //       // callback
  //       function onParse(event: ParsedEvent | ReconnectInterval) {
  //         if (event.type === "event") {
  //           const data = event.data;
  //            if (data === "[DONE]") {
  //             controller.close();
  //             return;
  //           }
  //           try {
  //             const json = JSON.parse(data);
  //             const text = json.choices[0].delta?.content || "";
  //             if (counter < 2 && (text.match(/\n/) || []).length) {
  //               return;
  //             }
  //             const queue = encoder.encode(text);
  //             controller.enqueue(queue);
  //             counter++;
  //           } catch (e) {
  //             controller.error(e);
  //           }
  //         }
  //       }
  

  //       const parser = createParser(onParse);
        
  //       for await (const chunk of response.body as any) {
  //         parser.feed(decoder.decode(chunk));
  //       }
  //     },
  //   });
  
  //   return stream;

}

