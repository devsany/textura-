import React, { useState } from "react";
import axios from "axios";

const BackgroundAndTextEditor = () => {
  const [image, setImage] = useState(null);
  const [processedImage, setProcessedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [text, setText] = useState("");
  const [finalImage, setFinalImage] = useState(null);

  // Handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  // Remove background using remove.bg API
  const removeBackground = async () => {
    if (image) {
      const formData = new FormData();
      formData.append("image_file", image);

      setIsLoading(true);

      try {
        const response = await axios.post(
          "https://api.remove.bg/v1.0/removebg",
          formData,
          {
            headers: {
              "X-Api-Key": "wa5jJ3KjcUViApMNgvt8AWBr", // Replace with your actual API key
              "Content-Type": "multipart/form-data",
            },
            responseType: "blob",
          }
        );
        const imageURL = URL.createObjectURL(response.data);
        setProcessedImage(imageURL);
      } catch (error) {
        console.error("Error removing background:", error);
        alert("Error removing background. Please try again.");
      } finally {
        setIsLoading(false);
      }
    } else {
      alert("Please upload an image first.");
    }
  };

  // Set background image
  const handleBackgroundChange = (background) => {
    setBackgroundImage(background);
  };

  // Add text to the image
  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  // Create the final image with background and text
  const createFinalImage = () => {
    if (processedImage && backgroundImage) {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      // Load the background image
      const bgImage = new Image();
      bgImage.src = backgroundImage;
      bgImage.onload = () => {
        canvas.width = bgImage.width;
        canvas.height = bgImage.height;
        ctx.drawImage(bgImage, 0, 0);

        // Load the processed image (without background)
        const fgImage = new Image();
        fgImage.src = processedImage;
        fgImage.onload = () => {
          // Draw the image with removed background on top of the background
          ctx.drawImage(fgImage, 50, 50, 300, 300); // Position and scale as needed

          // Add text overlay
          ctx.font = "30px Arial";
          ctx.fillStyle = "white";
          ctx.fillText(text, 100, 100); // Position the text

          // Create the final image
          setFinalImage(canvas.toDataURL("image/png"));
        };
      };
    } else {
      alert("Please select a background and an image first.");
    }
  };

  // Predefined background options
  const backgroundOptions = [
    "https://via.placeholder.com/600x400",
    "https://via.placeholder.com/600x400",
  ];

  return (
    <div className="min-h-screen grid grid-cols-12 gap-6 p-8 bg-gray-100">
      {/* Left side - Image Upload & Processed Image */}
      <div className="col-span-12 md:col-span-6 bg-white p-4 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-gray-800 text-center mb-6">
          Remove Background and Add Text
        </h1>

        {/* Image Upload */}
        <div className="mb-6">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="file:border file:border-gray-300 file:rounded-md file:px-6 file:py-3 file:bg-blue-100 file:text-blue-700 file:cursor-pointer hover:file:bg-blue-200 transition-all"
          />
          <button
            onClick={removeBackground}
            className="ml-4 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all"
            disabled={!image}
          >
            {isLoading ? "Processing..." : "Remove Background"}
          </button>
        </div>

        {/* Processed Image Display */}
        {processedImage && (
          <div className="mb-6">
            <h3 className="text-xl text-gray-800 mb-4">Processed Image</h3>
            <img
              src={processedImage}
              alt="Processed"
              className="w-full max-w-xs rounded-lg shadow-lg"
            />
          </div>
        )}

        {/* Text Input Section */}
        <div className="mb-6">
          <input
            type="text"
            value={text}
            onChange={handleTextChange}
            placeholder="Enter your text here"
            className="w-full px-6 py-3 border border-gray-300 rounded-md"
          />
        </div>

        {/* Create Final Image */}
        <div className="mb-6 text-center">
          <button
            onClick={createFinalImage}
            className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700"
            disabled={!processedImage || !backgroundImage}
          >
            Create Final Image
          </button>
        </div>

        {/* Final Image Display */}
        {finalImage && (
          <div className="mt-6 text-center">
            <h3 className="text-xl text-gray-800 mb-4">Final Image</h3>
            <img
              src={finalImage}
              alt="Final"
              className="w-full max-w-xs rounded-lg shadow-lg"
            />
            <a
              href={finalImage}
              download="final-image.png"
              className="inline-block mt-6 px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              Download Final Image
            </a>
          </div>
        )}
      </div>

      {/* Right side - Background Suggestions */}
      <div className="col-span-12 md:col-span-6 bg-white p-4 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4 overflow-hidden">
          Choose a Background
        </h3>

        {/* Background Options */}
        <div className="grid grid-cols-2 gap-4 max-h-48 overflow-y-scroll">
          {backgroundOptions.map((bg, index) => (
            <div
              key={index}
              className="cursor-pointer border-2 border-gray-300 p-2"
              onClick={() => handleBackgroundChange(bg)}
            >
              <img
                src={bg}
                alt={`Background ${index + 1}`}
                className="w-full h-32 object-cover rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BackgroundAndTextEditor;
