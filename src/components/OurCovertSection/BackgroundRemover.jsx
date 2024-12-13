import React, { useState } from "react";
import axios from "axios";

const BackgroundRemover = () => {
  const [image, setImage] = useState(null);
  const [processedImage, setProcessedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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
      formData.append("image_file", image); // Append the actual file object

      setIsLoading(true);

      try {
        const response = await axios.post(
          "https://api.remove.bg/v1.0/removebg",
          formData,
          {
            headers: {
              "X-Api-Key": "wdhWDcDE5jkXmTKv8zkr7Wpq", // Replace with your actual API key
              "Content-Type": "multipart/form-data",
            },
            responseType: "blob", // Expect the response as a blob
          }
        );

        // Convert the Blob response to a URL for the image
        const imageURL = URL.createObjectURL(response.data);
        setProcessedImage(imageURL);
      } catch (error) {
        console.error(
          "Background removal failed:",
          error.response?.data || error.message
        );
        alert(
          "Error removing background. Please check the API key or input image."
        );
      } finally {
        setIsLoading(false);
      }
    } else {
      alert("Please upload an image first.");
    }
  };

  return (
    <div className="min-h-screen mt-5 flex items-center justify-center bg-gray-50 px-6 py-10">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-2xl p-8">
        <h1 className="text-4xl font-semibold text-gray-800 text-center mb-8">
          Background Remover
        </h1>

        {/* Image Upload Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div className="flex justify-center">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="file:border file:border-gray-300 file:rounded-md file:px-6 file:py-3 file:bg-blue-100 file:text-blue-700 file:cursor-pointer hover:file:bg-blue-200 transition-all w-full max-w-xs"
            />
          </div>

          <div className="flex justify-center items-center">
            <button
              onClick={removeBackground}
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all"
              disabled={!image}
            >
              {isLoading ? "Processing..." : "Remove Background"}
            </button>
          </div>
        </div>

        {/* Display Images Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {image && (
            <div className="flex flex-col items-center">
              <h3 className="text-xl text-gray-800 font-semibold mb-2">
                Original Image
              </h3>
              <img
                src={URL.createObjectURL(image)}
                alt="Original"
                className="w-full max-w-xs rounded-lg shadow-lg transition-all hover:scale-105"
              />
            </div>
          )}

          {processedImage && (
            <div
              className="flex flex-col items-center p-6 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 shadow-lg"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, #d3d3d3 0px, #d3d3d3 1px, transparent 1px, transparent 10px)",
                backgroundSize: "10px 10px",
              }}
            >
              <h3 className="text-xl text-gray-800 font-semibold mb-2">
                Processed Image
              </h3>
              <img
                src={processedImage}
                alt="Processed"
                className="w-full max-w-xs rounded-lg shadow-lg transition-all hover:scale-105"
              />
              <a
                href={processedImage}
                download="processed-image.png"
                className="inline-block mt-6 px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-all"
              >
                Download Image
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BackgroundRemover;
