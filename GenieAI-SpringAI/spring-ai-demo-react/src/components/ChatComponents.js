import React, { useState } from "react";

const ChatComponents = () => {
  const [prompt, setPrompt] = useState("");
  const [chatReponse, setChatResponse] = useState("");
  const askAI = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/ask-ai?prompt=${prompt}`
      );
      const data = await response.text();
      setChatResponse(data);
    } catch (e) {
      console.log("Error generating chat response : " + e);
    }
  };
  return (
    <div>
      <h2>AI Chat!</h2>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button onClick={askAI}>Ask AI</button>
      <div className="output">
        <p>{chatReponse}</p>
      </div>
    </div>
  );
};

export default ChatComponents;
