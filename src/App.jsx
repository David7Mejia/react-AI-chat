import { useState } from "react";
import { Assistant } from "./assistants/googleai";
import styles from "./App.module.css";
import Chat from "./components/Chat/Chat";
import Controls from "./components/Controls/Controls";

const App = () => {
  const assistant = new Assistant();
  const [messages, setMessage] = useState([]);

  const addMessage = message => {
    setMessage(prevMessages => [...prevMessages, message]);
  };

  const handleContentSend = async content => {
    addMessage({ role: "user", content });
    try {
      const result = await assistant.chat(content);
      addMessage({ role: "assistant", content: result });
    } catch (err) {
      console.log(err);
      addMessage({ content: "Sorry, I couldn't process your request. Please try again.", role: "system" });
    }
  };
  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <img src="/neural-network.png" alt="logo" className={styles.Logo} />
        <h2 className={styles.Title}>AI Chatbot</h2>
      </header>
      <div className={styles.ChatContainer}>
        <Chat messages={messages} />
      </div>
      <Controls onSend={handleContentSend} />
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
