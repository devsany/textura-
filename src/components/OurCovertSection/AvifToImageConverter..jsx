import React, { useState } from "react";

const AvifToImageConverter = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [convertedImage, setConvertedImage] = useState(null);
  const [format, setFormat] = useState("image/png"); // Default to PNG

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "image/avif") {
      setSelectedFile(file);
      // Create a preview URL
      const previewUrl = URL.createObjectURL(file);
      setPreviewImage(previewUrl);
    } else {
      alert("Please upload a valid AVIF file.");
      setSelectedFile(null);
      setPreviewImage(null);
    }
  };

  const convertFile = () => {
    if (!selectedFile) {
      alert("Please select an AVIF file first.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);

        canvas.toBlob(
          (blob) => {
            const imageUrl = URL.createObjectURL(blob);
            setConvertedImage(imageUrl);
          },
          format,
          1 // Image quality (1 for highest quality)
        );
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(selectedFile);
  };

  return (
    <div className="container mt-[100px] mx-auto p-6 max-w-4xl bg-gray-50 shadow-md rounded-lg">
      {/* Header Section */}
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">
        AVIF to PNG/JPG Converter
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Easily convert your AVIF files to high-quality PNG or JPG formats.
      </p>

      {/* File Upload Section */}
      <div className="grid gap-4 mb-8">
        <label className="block">
          <span className="text-lg font-medium text-gray-700">
            Upload Your File:
          </span>
          <input
            type="file"
            accept=".avif"
            onChange={handleFileChange}
            className="block w-full p-3 border border-gray-300 rounded mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
        <label className="block">
          <span className="text-lg font-medium text-gray-700">
            Select Format:
          </span>
          <select
            value={format}
            onChange={(e) => setFormat(e.target.value)}
            className="block w-full p-3 border border-gray-300 rounded mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="image/png">Convert to PNG</option>
            <option value="image/jpeg">Convert to JPG</option>
          </select>
        </label>
        <button
          onClick={convertFile}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
        >
          Convert
        </button>
      </div>

      {/* Preview Section */}
      {previewImage && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-700">
            Uploaded File Preview:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-300 p-4 rounded-lg shadow-sm bg-white">
              <h3 className="text-lg font-semibold mb-2 text-blue-500">
                Preview:
              </h3>
              <img
                src={previewImage}
                alt="Uploaded Preview"
                className="w-full h-auto rounded"
              />
            </div>
            <div className="border border-gray-300 p-4 rounded-lg shadow-sm flex flex-col items-center justify-center bg-white">
              <h3 className="text-lg font-semibold mb-4 text-blue-500">
                Ready to Convert
              </h3>
              <p className="text-gray-500 text-center">
                Select the desired format and click "Convert."
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Converted Image Section */}
      {convertedImage && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-700">
            Converted Image:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Converted Image Preview */}
            <div className="border border-gray-300 p-4 rounded-lg shadow-sm bg-white">
              <h3 className="text-lg font-semibold mb-2 text-green-500">
                Preview:
              </h3>
              <img
                src={convertedImage}
                alt="Converted Preview"
                className="w-full h-auto rounded"
              />
            </div>

            {/* Download Section */}
            <div className="border border-gray-300 p-4 rounded-lg shadow-sm flex flex-col items-center justify-center bg-white">
              <h3 className="text-lg font-semibold mb-4 text-green-500">
                Download Your File
              </h3>
              <a
                href={convertedImage}
                download={`converted-image.${
                  format === "image/png" ? "png" : "jpg"
                }`}
                className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition font-semibold"
              >
                Download
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AvifToImageConverter;
