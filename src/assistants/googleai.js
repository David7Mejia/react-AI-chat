import { GoogleGenerativeAI } from "@google/generative-ai";

const googleai = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLEAI_API_KEY);

export class Assistant {
  #chat;
  constructor(model = "gemini-1.5-flash") {
    const gemini = googleai.getGenerativeModel({ model: model });
    this.#chat = gemini.startChat({ history: [] });
  }

  async chat(content) {
    try {
      const res = await this.#chat.sendMessage(content);
      return res.response.text();
    } catch (error) {
      throw error;
    }
  }

  async *chatStream(content) {
    try {
      const res = await this.#chat.sendMessageStream(content);

      for await (const chunk of res.stream) {
        yield chunk.text();
      }
    } catch (error) {
      throw error;
    }
  }
}
