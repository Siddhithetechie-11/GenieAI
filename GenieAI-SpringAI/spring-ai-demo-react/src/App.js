import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import ImageGenerator from "./components/ImageGenerator";
import ChatComponents from "./components/ChatComponents";
import RecipeGenerator from "./components/RecipeGenerator";
import Paraphrase from "./components/Paraphrase";
import EmailGenerator from "./components/EmailGenerator";

function App() {
  const [activeTab, setActiveTab] = useState("image-generator");
  const handleTabChange = (tab) => {
    // alert(tab);
    setActiveTab(tab);
  };
  return (
    <div className="App">
      <button
        className={activeTab === "image-generator" ? "active" : ""}
        onClick={() => handleTabChange("image-generator")}
      >
        Image Generator
      </button>
      <button
        className={activeTab === "ai-chat" ? "active" : ""}
        onClick={() => handleTabChange("ai-chat")}
      >
        AI Chat
      </button>
      <button
        className={activeTab === "recipe-generator" ? "active" : ""}
        onClick={() => handleTabChange("recipe-generator")}
      >
        Recipe Generator
      </button>
      <button
        className={activeTab === "paraphrase" ? "active" : ""}
        onClick={() => handleTabChange("paraphrase")}
      >
        Paraphrase
      </button>
      <button
        className={activeTab === "email" ? "active" : ""}
        onClick={() => handleTabChange("email")}
      >
        Generate E-mail
      </button>
      <div>
        {activeTab === "image-generator" && <ImageGenerator />}
        {activeTab === "ai-chat" && <ChatComponents />}
        {activeTab === "recipe-generator" && <RecipeGenerator />}
        {activeTab === "paraphrase" && <Paraphrase />}
        {activeTab === "email" && <EmailGenerator />}
      </div>
    </div>
  );
}

export default App;
