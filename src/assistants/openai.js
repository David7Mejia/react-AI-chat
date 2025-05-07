import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export class Assistant {
  #model;
  constructor(model = "gpt-4o-mini") {
    this.#model = model;
  }

  async chat(content, history) {
    try {
      const res = await openai.chat.completions.create({
        model: this.#model,
        messages: [...history, { content, role: "user" }],
        // max_tokens: 150,
        // temperature: 0.7,
      });

      return res.choices[0].message;
    } catch (error) {
      throw error;
    }
  }
}
