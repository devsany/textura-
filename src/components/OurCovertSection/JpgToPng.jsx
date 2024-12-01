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
    <div className="p-8 mt-[30px] text-teal-400    space-y-6">
      <h1 className="text-2xl font-bold">JPG to PNG Converter</h1>
      <div className="md:grid md:grid-cols-2">
        <div className="flex items-center justify-center mb-[100px] w-full">
          <label
            for="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-teal-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-teal-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                JPG (MAX. 800x400px)
              </p>
            </div>
            <input
              type="file"
              accept="image/jpeg"
              onChange={handleFileUpload}
              id="dropzone-file"
              className="hidden"
            />
          </label>
        </div>
        {/* File Input */}

        {/* Preview Uploaded Image */}
        <div>
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
      </div>
    </div>
  );
};

export default JPGToPNGConverter;
