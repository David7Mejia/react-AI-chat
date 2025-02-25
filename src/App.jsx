import { useState } from "react";
import styles from "./App.module.css";
import  Chat  from "./components/Chat/Chat";
import Controls from "./components/Controls/Controls";
function App() {
  const [messages, setMessage] = useState(Messages);

  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <img src="/neural-network.png" alt="logo" className={styles.Logo} />
        <h2 className={styles.Title}>AI Chatbot</h2>
      </header>
      <div className={styles.ChatContainer}>
        <Chat messages={messages} />
      </div>
      <Controls />
    </div>
  );
}

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
