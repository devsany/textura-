import React, { useState } from "react";
import * as mammoth from "mammoth";
import html2canvas from "html2canvas";

const WordToImage = () => {
  const [file, setFile] = useState(null);
  const [previewHtml, setPreviewHtml] = useState("");
  const [image, setImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    if (
      uploadedFile &&
      uploadedFile.type ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      setFile(uploadedFile);
      setErrorMessage("");
    } else {
      setFile(null);
      setErrorMessage("Please upload a valid Word (.docx) file.");
    }
  };

  const handlePreview = () => {
    if (!file) {
      alert("Please upload a Word file to preview.");
      return;
    }

    const reader = new FileReader();
    reader.onload = async (event) => {
      const arrayBuffer = event.target.result;
      try {
        const result = await mammoth.convertToHtml({
          arrayBuffer,
          styleMap: [
            "b => strong",
            "i => em",
            "p[style-name='Heading 1'] => h1",
          ],
        });
        setPreviewHtml(result.value);
      } catch (error) {
        setErrorMessage("Error reading Word file for preview.");
        console.error(error);
      }
    };
    reader.readAsArrayBuffer(file);
  };

  const convertToImage = () => {
    if (!previewHtml) {
      alert("Please preview the file before converting to an image.");
      return;
    }

    const previewDiv = document.getElementById("preview-content");
    if (previewDiv) {
      html2canvas(previewDiv, { scale: 2 }).then((canvas) => {
        const imageUrl = canvas.toDataURL("image/png");
        setImage(imageUrl);
      });
    }
  };

  return (
    <div className="min-h-screen mt-[50px] bg-gradient-to-br from-indigo-50 to-indigo-100 flex flex-col items-center p-6">
      {/* Hero Section */}
      <div className="relative w-full py-16 bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-700 shadow-xl rounded-md mb-8 overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-pattern bg-cover bg-center"></div>{" "}
        {/* Decorative Pattern */}
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-extrabold tracking-tight leading-tight mb-4 animate-fade-in-up">
            Transform Word to Image
          </h1>
          <p className="text-lg font-medium tracking-wide mb-6 animate-fade-in-up delay-100">
            Seamlessly convert your Word documents into high-quality images.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-indigo-700 font-semibold px-6 py-2 rounded-md shadow-lg hover:bg-indigo-100 transform transition-transform hover:scale-105">
              Learn More
            </button>
            <button className="bg-gradient-to-r from-purple-500 to-purple-700 text-white font-semibold px-6 py-2 rounded-md shadow-lg hover:from-purple-400 hover:to-purple-600 transform transition-transform hover:scale-105">
              Start Converting
            </button>
          </div>
        </div>
      </div>

      {/* File Upload and Actions */}
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-xl w-full">
        <h2 className="text-2xl font-bold mb-4 text-gray-700 text-center">
          Upload and Convert
        </h2>
        <input
          type="file"
          accept=".docx"
          onChange={handleFileUpload}
          className="block w-full mb-4 p-3 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-4 focus:ring-blue-400 transition"
        />
        {errorMessage && (
          <p className="text-sm text-red-500 mb-4">{errorMessage}</p>
        )}
        <div className="flex flex-col gap-4">
          <button
            onClick={handlePreview}
            className="bg-gradient-to-r from-blue-400 to-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg"
          >
            Preview
          </button>
          <button
            onClick={convertToImage}
            className="bg-gradient-to-r from-purple-400 to-purple-600 text-white font-semibold py-2 px-4 rounded-md shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg"
          >
            Convert to Image
          </button>
          {image && (
            <a
              href={image}
              download="ConvertedImage.png"
              className="bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold py-2 px-4 rounded-md shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg text-center"
            >
              Download Image
            </a>
          )}
        </div>
      </div>

      {/* Preview and Download Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8 max-w-7xl w-full">
        {/* Preview Section */}
        {previewHtml && (
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-700 text-center">
              File Preview
            </h3>
            <div
              id="preview-content"
              className="p-4 border border-gray-300 rounded-md text-gray-700 text-sm bg-gray-50"
              style={{
                fontFamily: "Arial, sans-serif",
                lineHeight: "1.6",
                overflow: "auto",
                maxHeight: "500px",
              }}
              dangerouslySetInnerHTML={{ __html: previewHtml }}
            />
          </div>
        )}

        {/* Download Section */}
        {image && (
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-700 text-center">
              Download Image
            </h3>
            <img
              src={image}
              alt="Converted Image"
              className="w-full h-auto rounded-md shadow-md"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default WordToImage;
