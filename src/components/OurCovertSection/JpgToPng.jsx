import React, { useState } from "react";
import { saveAs } from "file-saver";

const JPGToPNGConverter = () => {
  const [imageSrc, setImageSrc] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setImageSrc(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const convertToPNG = () => {
    if (!imageSrc) return;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const image = new Image();

    image.onload = () => {
      canvas.width = image.width;
      canvas.height = image.height;
      ctx.drawImage(image, 0, 0);

      canvas.toBlob(
        (blob) => {
          saveAs(blob, "converted-image.png"); // Download the PNG file
        },
        "image/png",
        1.0 // Quality
      );
    };

    image.src = imageSrc;
  };

  return (
    <div className="p-8 flex flex-col items-center justify-center space-y-6">
      <h1 className="text-2xl font-bold">JPG to PNG Converter</h1>

      {/* File Input */}
      <input
        type="file"
        accept="image/jpeg"
        onChange={handleFileUpload}
        className="p-2 border border-gray-300 rounded-md"
      />

      {/* Preview Uploaded Image */}
      {imageSrc && (
        <div className="flex flex-col items-center space-y-4">
          <img
            src={imageSrc}
            alt="Uploaded"
            className="w-64 h-auto rounded-md shadow-md"
          />
          <button
            onClick={convertToPNG}
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
          >
            Convert & Download PNG
          </button>
        </div>
      )}
    </div>
  );
};

export default JPGToPNGConverter;
