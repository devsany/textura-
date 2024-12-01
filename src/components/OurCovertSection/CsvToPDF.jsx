import React, { useState } from "react";
import Papa from "papaparse";
import jsPDF from "jspdf";
import "jspdf-autotable";

const CsvToPdf = () => {
  const [file, setFile] = useState(null);
  const [previewData, setPreviewData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile && uploadedFile.type === "text/csv") {
      setFile(uploadedFile);
      setErrorMessage("");
    } else {
      setFile(null);
      setErrorMessage("Please upload a valid CSV file.");
    }
  };

  const handlePreview = () => {
    if (!file) {
      alert("Please upload a CSV file to preview.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const csvData = e.target.result;

      // Parse CSV data
      Papa.parse(csvData, {
        complete: (result) => {
          setPreviewData(result.data);
        },
        error: (error) => {
          setErrorMessage("Error parsing the CSV file.");
          console.error(error);
        },
      });
    };
    reader.readAsText(file);
  };

  const convertToPdf = () => {
    if (!previewData.length) {
      alert("Please preview the file before converting to PDF.");
      return;
    }

    const doc = new jsPDF();
    doc.text("CSV to PDF Conversion", 14, 10);

    doc.autoTable({
      head: [previewData[0]], // First row as table headers
      body: previewData.slice(1), // Remaining rows as table data
    });

    doc.save("ConvertedDocument.pdf");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 flex flex-col items-center justify-center p-6 text-gray-800">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h2 className="text-3xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
          CSV to PDF Converter
        </h2>
        <input
          type="file"
          accept=".csv"
          onChange={handleFileUpload}
          className="block w-full mb-4 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-4 focus:ring-indigo-300"
        />
        {errorMessage && (
          <p className="text-sm text-red-500 mb-4">{errorMessage}</p>
        )}
        <div className="flex justify-between gap-4">
          <button
            onClick={handlePreview}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md transform transition-transform duration-300 hover:scale-105"
          >
            Preview
          </button>
          <button
            onClick={convertToPdf}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md shadow-md transform transition-transform duration-300 hover:scale-105"
          >
            Convert to PDF
          </button>
        </div>
      </div>

      {previewData.length > 0 && (
        <div className="mt-8 bg-white shadow-lg rounded-lg p-6 max-w-4xl w-full">
          <h3 className="text-lg font-semibold mb-4 text-center text-gray-700">
            File Preview
          </h3>
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  {previewData[0].map((header, index) => (
                    <th
                      key={index}
                      className="border border-gray-300 px-4 py-2 text-sm font-medium text-gray-600"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {previewData.slice(1).map((row, rowIndex) => (
                  <tr key={rowIndex} className="hover:bg-gray-50">
                    {row.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className="border border-gray-300 px-4 py-2 text-sm text-gray-500 text-center"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default CsvToPdf;
