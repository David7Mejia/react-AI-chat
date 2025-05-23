import { useState } from "react";
import { Assistant } from "./assistants/googleai";
import styles from "./App.module.css";
import Chat from "./components/Chat/Chat";
import Controls from "./components/Controls/Controls";
import Loader from "./components/Loader/Loader";

const App = () => {
  const assistant = new Assistant();
  const [messages, setMessage] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);
  const [model, setModel] = useState("gemini");

  const updateLastMessageContent = content => {
    setMessage(prevMessages => prevMessages.map((message, index) => (index === prevMessages.length - 1 ? { ...message, content: `${message.content}${content}` } : message)));
  };

  const addMessage = message => {
    setMessage(prevMessages => [...prevMessages, message]);
  };

  const handleModelChange = event => {
    setModel(event.target.value);
  };

  async function handleContentSend(content) {
    addMessage({ content, role: "user" });
    setIsLoading(true);
    try {
      const result = await assistant.chatStream(content);
      let isFirstChunk = false;
      for await (const chunk of result) {
        if (!isFirstChunk) {
          isFirstChunk = true;
          addMessage({ content: "", role: "assistant" });
          setIsLoading(false);
          setIsStreaming(true);
        }
        updateLastMessageContent(chunk);
      }
      setIsStreaming(false);
    } catch (error) {
      console.log(error);
      addMessage({ content: "Sorry, I couldn't process your request. Please try again.", role: "system" });
      setIsLoading(false);
      setIsStreaming(false);
    }
  }
  return (
    <div className={styles.App}>
      {isLoading && <Loader />}
      <header className={styles.Header}>
        <img src="/neural-network.png" alt="logo" className={styles.Logo} />
        <h2 className={styles.Title}>AI Chatbot</h2>
      </header>
      <div className={styles.ModelContainer}>
        <div className={styles.Model}>
          Choose Model:&nbsp;
        </div>
        <select className="select-model" value={model} onChange={handleModelChange}>
          <option value="gpt-4o-mini">GPT-4o Mini</option>
          <option value="gemini">Gemini</option>
        </select>
      </div>
      {console.log(model)}
      <div className={styles.ChatContainer}>
        <Chat messages={messages} isStreaming={isStreaming} />
      </div>
      <Controls isDisabled={isLoading || isStreaming} onSend={handleContentSend} />
    </div>
  );
};

const Messages = [
  {
    role: "user",
    content:
      "Hello! How are you doing today? I am doing well, thank you for asking!I am doing well, thank you for asking!I am doing well, thank you for asking!I am doing well, thank you for asking!I am doing well, thank you for asking!I am doing well, thank you for asking!I am doing well, thank you for asking!I am doing well, thank you for asking!I am doing well, thank you for asking!I am doing well, thank you for asking!I am doing well, thank you for asking!I am doing well, thank you for asking!I am doing well, thank you for asking!I am doing well, thank you for asking!",
  },
  {
    role: "bot",
    content:
      "I am doing well, thank you for asking! I am doing well, thank you for asking!I am doing well, thank you for asking!I am doing well, thank you for asking!I am doing well, thank you for asking!I am doing well, thank you for asking!I am doing well, thank you for asking!I am doing well, thank you for asking!I am doing well, thank you for asking!I am doing well, thank you for asking!I am doing well, thank you for asking!I am doing well, thank you for asking!",
  },
  {
    role: "user",
    content: "I was wondering what this app does, how does it work?",
  },
  { role: "bot", content: "This app is a chatbot that uses AI to respond to your messages." },
  {
    role: "user",
    content: "That's amazing! How does the AI work?",
  },
  { role: "bot", content: "The AI uses a neural network to process your messages and generate a response." },
  {
    role: "user",
    content: "That's so cool! How can I try it out?",
  },
];

export default App;
