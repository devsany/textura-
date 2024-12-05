import React, { useState, useRef } from "react";
import axios from "axios";
import { FaDownload, FaEdit } from "react-icons/fa";

const BackgroundAndTextEditor = () => {
  const [image, setImage] = useState(null);
  const [processedImage, setProcessedImage] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [text, setText] = useState("");
  const [finalImage, setFinalImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const canvasRef = useRef(null);

  // Handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Set the uploaded image URL for instant display
      setProcessedImage(null); // Reset processed image before starting background removal
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
              "X-Api-Key": "wa5jJ3KjcUViApMNgvt8AWBr", // Your API key here
              "Content-Type": "multipart/form-data",
            },
            responseType: "blob",
          }
        );
        const imageURL = URL.createObjectURL(response.data);
        setProcessedImage(imageURL); // Display the processed image after background removal
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

  // Text input change
  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  // Create final image
  const createFinalImage = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Draw background image
    const bgImage = new Image();
    bgImage.src = backgroundImage;
    bgImage.onload = () => {
      canvas.width = bgImage.width;
      canvas.height = bgImage.height;
      ctx.drawImage(bgImage, 0, 0);

      // Draw processed image if available
      if (processedImage) {
        const fgImage = new Image();
        fgImage.src = processedImage;
        fgImage.onload = () => {
          ctx.drawImage(fgImage, 50, 50, 300, 300); // Adjust as needed

          // Draw text
          ctx.font = "30px Arial";
          ctx.fillStyle = "white";
          ctx.fillText(text, 100, 100); // Position the text

          // Generate final image
          setFinalImage(canvas.toDataURL("image/png"));
        };
      }
    };
  };

  // Background options (example)
  const backgroundOptions = [
    "https://example.com/bg1.jpg",
    "https://example.com/bg2.jpg",
  ];

  return (
    <div className="min-h-screen mt-10 bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white shadow-xl rounded-lg p-6 w-full sm:w-10/12 lg:w-8/12 xl:w-7/12">
        <h1 className="text-3xl font-semibold text-gray-800 text-center mb-6">
          Remove Background & Add Text
        </h1>

        {/* Image Upload Section */}
        <div className="mb-6">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="file:border file:border-gray-300 file:rounded-md file:px-6 file:py-3 file:text-sm file:bg-gray-50"
          />
          <button
            onClick={removeBackground}
            className="ml-4 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            disabled={!image || isLoading}
          >
            {isLoading ? "Processing..." : "Remove Background"}
          </button>
        </div>

        {/* Display Uploaded Image */}
        {image && (
          <div className="mb-6">
            <h3 className="text-xl text-gray-800 mb-4">Uploaded Image</h3>
            <img
              src={image}
              alt="Uploaded"
              className="w-full max-w-xs rounded-lg shadow-lg"
            />
          </div>
        )}

        {/* Display Processed Image */}
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

        {/* Text Input */}
        <div className="mb-6">
          <input
            type="text"
            value={text}
            onChange={handleTextChange}
            placeholder="Enter text here..."
            className="w-full px-6 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Background Selection */}
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Choose a Background
        </h3>
        <div className="grid grid-cols-2 gap-4 overflow-scroll">
          {backgroundOptions.map((bg, index) => (
            <div
              key={index}
              className="cursor-pointer border-2 border-gray-300 p-2 rounded-md hover:shadow-md"
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

        {/* Create Final Image Button */}
        <button
          onClick={createFinalImage}
          className="mt-6 px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700"
          disabled={!processedImage || !backgroundImage}
        >
          Create Final Image
        </button>

        {/* Edit Image Section */}
        <div className="mt-6 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Edit Image & Text
          </h3>
          <canvas
            ref={canvasRef}
            className="w-full h-96 bg-gray-200 border border-gray-300 rounded-md"
          />
        </div>

        {/* Buttons to Download or Edit */}
        {finalImage && (
          <div className="mt-6 flex justify-between">
            <a
              href={finalImage}
              download="final-image.png"
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center"
            >
              <FaDownload className="mr-2" />
              Download Final Image
            </a>
            <button
              onClick={() => window.location.reload()} // Reload to reset and edit again
              className="px-6 py-3 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 flex items-center"
            >
              <FaEdit className="mr-2" />
              Edit Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BackgroundAndTextEditor;
