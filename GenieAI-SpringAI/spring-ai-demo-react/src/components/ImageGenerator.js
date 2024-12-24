import React, { useState } from "react";

const ImageGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [imageUrls, setImageUrls] = useState([]);
  const [nImage, setNImage] = useState(0);
  const generateImage = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/Generate-image?prompt=${prompt}&n=${nImage}`
      );
      const urls = await response.json();
      setImageUrls(urls);
    } catch (error) {
      console.log("Error generating image : " + error);
    }
  };
  return (
    <div className="tab-content">
      <h2>Generate Image !</h2>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter prompt for image"
      />
      <input
        type="n"
        value={nImage}
        onChange={(e) => setNImage(e.target.value)}
        placeholder="Number of image"
      />
      <button onClick={generateImage}>Generate Image</button>
      <div className="image-grid">
        {imageUrls.map((url, index) => (
          <img key={index} src={url} alt={`Generated index : ${index}`} />
        ))}
        {[...Array(4 - imageUrls.length)].map((_, index) => (
          <div
            key={index + imageUrls.length}
            className="empty-image-slot"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageGenerator;
