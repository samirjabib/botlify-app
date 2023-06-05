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
});