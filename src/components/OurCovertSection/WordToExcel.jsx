import React, { useState } from "react";
import * as XLSX from "xlsx";
import * as mammoth from "mammoth";

const WordToExcel = () => {
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

  const convertToExcel = () => {
    if (!previewContent) {
      alert("Please preview the file before converting to Excel.");
      return;
    }

    const rows = previewContent.split("\n").map((line) => [line]); // Convert lines into rows
    const worksheet = XLSX.utils.aoa_to_sheet(rows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    XLSX.writeFile(workbook, "ConvertedDocument.xlsx");
  };

  return (
    <div className="min-h-screen mt-[50px] flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradientMove opacity-20"></div>

      <div className="bg-white shadow-2xl rounded-lg p-8 text-gray-800 max-w-lg w-full relative z-10">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          Word to Excel Converter
        </h2>
        <input
          type="file"
          accept=".docx"
          onChange={handleFileUpload}
          className="block w-full mb-6 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-4 focus:ring-blue-300"
        />
        {errorMessage && (
          <p className="text-sm text-red-500 mb-4">{errorMessage}</p>
        )}
        <div className="flex justify-between gap-4">
          <button
            onClick={handlePreview}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition-transform duration-500 hover:translate-y-1"
          >
            Preview
          </button>
          <button
            onClick={convertToExcel}
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition-transform duration-500 hover:translate-y-1"
          >
            Download Excel
          </button>
        </div>
      </div>

      {previewContent && (
        <div className="mt-8 bg-white shadow-2xl rounded-lg p-6 w-full max-w-3xl relative z-10 transition-all duration-700 transform hover:scale-105">
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

export default WordToExcel;
