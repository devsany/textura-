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
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        AVIF to PNG/JPG Converter
      </h1>

      {/* File Upload Section */}
      <div className="grid gap-4">
        <input
          type="file"
          accept=".avif"
          onChange={handleFileChange}
          className="block w-full p-3 border border-gray-300 rounded"
        />
        <select
          value={format}
          onChange={(e) => setFormat(e.target.value)}
          className="block w-full p-3 border border-gray-300 rounded"
        >
          <option value="image/png">Convert to PNG</option>
          <option value="image/jpeg">Convert to JPG</option>
        </select>
        <button
          onClick={convertFile}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Convert
        </button>
      </div>

      {/* Preview Section */}
      {previewImage && (
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Uploaded File Preview:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-300 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Preview:</h3>
              <img
                src={previewImage}
                alt="Uploaded Preview"
                className="w-full h-auto rounded"
              />
            </div>
            <div className="border border-gray-300 p-4 rounded-lg flex flex-col items-center justify-center">
              <h3 className="text-lg font-semibold mb-4 text-center">
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
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Converted Image:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Converted Image Preview */}
            <div className="border border-gray-300 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Preview:</h3>
              <img
                src={convertedImage}
                alt="Converted Preview"
                className="w-full h-auto rounded"
              />
            </div>

            {/* Download Section */}
            <div className="border border-gray-300 p-4 rounded-lg flex flex-col items-center justify-center">
              <h3 className="text-lg font-semibold mb-4 text-center">
                Download Your File
              </h3>
              <a
                href={convertedImage}
                download={`converted-image.${
                  format === "image/png" ? "png" : "jpg"
                }`}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
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
