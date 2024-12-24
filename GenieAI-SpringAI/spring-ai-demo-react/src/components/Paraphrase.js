import React, { useState } from "react";

const Paraphrase = () => {
  const [input, setInput] = useState("");
  const [instructions, setInstructions] = useState("");
  const [paraphrase, setPharaphrase] = useState("");

  const generatePara = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/paraphrase?input=${input}&instructions=${instructions}`
      );
      const data = await response.text();
      setPharaphrase(data);
    } catch (e) {
      console.log("Error Pharaphrase Text: " + e);
    }
  };
  return (
    <div>
      <h2>Paraphrase Text!</h2>
      <textarea
        className="custom-textarea"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter text"
      />
      <textarea
        className="custom-textarea"
        type="text"
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
        placeholder="Enter instructions"
      />
      <button onClick={generatePara}>Paraphrase</button>
      <div className="output">
        <p className="paraphrase-text">{paraphrase}</p>
      </div>
    </div>
  );
};

export default Paraphrase;
