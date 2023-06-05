import { OpenAIStreamPayload } from '../openai-stream';
import { ReadableStream } from 'web-streams-polyfill';

describe('OpenAIStreamPayload', () => {
    beforeEach(() => {
        global.fetch = jest.fn().mockResolvedValue({
          ok: true,
          body: new ReadableStream({
            start(controller) {
              const responseData = { choices: [{ delta: { content: 'Mocked content' } }] };
              const encodedData = new TextEncoder().encode(JSON.stringify(responseData));
              controller.enqueue(encodedData);
              controller.close();
            },
          }),
        });
      });

    afterEach(() => {
    jest.restoreAllMocks();
    });

    async function consumeStream(stream : any) {
        const decoder = new TextDecoder();
        let data = '';
      
        const reader = stream.getReader();
      
        try {
          while (true) {
            const { done, value } = await reader.read();
      
            if (done) {
              break;
            }
      
            data += decoder.decode(value, { stream: !done });
          }
      
          return data;
        } finally {
          reader.releaseLock();
        }
      }
      


    it('should fetch and process data correctly', async() => {
        const payload: OpenAIStreamPayload = {
            model: "model-name",
            messages: [
              { role: "user", content: "User message 1" },
              { role: "system", content: "System message 1" },
            ],
            temperature: 0.8,
            top_p: 0.9,
            frequency_penalty: 0.6,
            presence_penalty: 0.4,
            max_tokens: 100,
            stream: true,
          };
          
          const result = await OpenAIStreamPayload(payload);

          const response = await consumeStream(result);

          expect(response).toBe('Mocked content');

    })
});