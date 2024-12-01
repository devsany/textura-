import React, { useState } from "react";
import { jsPDF } from "jspdf";
import * as mammoth from "mammoth";

const WordToPDF = () => {
  const [file, setFile] = useState(null);
  const [previewContent, setPreviewContent] = useState("");
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
        const result = await mammoth.extractRawText({ arrayBuffer });
        setPreviewContent(result.value);
      } catch (error) {
        setErrorMessage("Error reading Word file for preview.");
        console.error(error);
      }
    };
    reader.readAsArrayBuffer(file);
  };

  const convertToPDF = () => {
    if (!previewContent) {
      alert("Please preview the file before converting to PDF.");
      return;
    }

    const doc = new jsPDF();
    const lines = previewContent.split("\n");

    lines.forEach((line, index) => {
      doc.text(line, 10, 10 + index * 10);
    });

    doc.save("ConvertedDocument.pdf");
  };

  return (
    <div className="min-h-screen mt-[50px] bg-gradient-to-r from-purple-100 via-pink-100 to-orange-100 flex flex-col items-center justify-center p-6 text-gray-800">
      <div className="bg-white shadow-lg rounded-lg p-8 text-gray-800 max-w-lg w-full animate-fadeIn">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
          Word to PDF Converter
        </h2>
        <input
          type="file"
          accept=".docx"
          onChange={handleFileUpload}
          className="block w-full mb-6 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-4 focus:ring-purple-300"
        />
        {errorMessage && (
          <p className="text-sm text-red-500 mb-4">{errorMessage}</p>
        )}
        <div className="flex justify-between gap-4">
          <button
            onClick={handlePreview}
            className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-md shadow-md transform transition-transform duration-300 hover:scale-105"
          >
            Preview
          </button>
          <button
            onClick={convertToPDF}
            className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded-md shadow-md transform transition-transform duration-300 hover:scale-105"
          >
            Download PDF
          </button>
        </div>
      </div>

      {previewContent && (
        <div className="mt-8 bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl animate-slideIn">
          <h3 className="text-lg font-semibold mb-4 text-center">
            File Preview
          </h3>
          <div className="max-h-96 overflow-y-auto p-4 border border-gray-300 rounded-md text-gray-700 text-sm whitespace-pre-wrap">
            {previewContent}
          </div>
        </div>
      )}
    </div>
  );
};

export default WordToPDF;
