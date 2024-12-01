import React, { useState } from "react";
import * as XLSX from "xlsx";
import { jsPDF } from "jspdf";
import "jspdf-autotable";

const ExcelToPDF = () => {
  const [file, setFile] = useState(null);
  const [previewData, setPreviewData] = useState([]);

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const handlePreview = () => {
    if (!file) {
      alert("Please upload an Excel file.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const firstSheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[firstSheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      setPreviewData(jsonData);
    };
    reader.readAsArrayBuffer(file);
  };

  const convertToPDF = () => {
    if (!previewData.length) {
      alert("Please preview the file before generating the PDF.");
      return;
    }

    const doc = new jsPDF();
    doc.text("Excel to PDF Table", 14, 10);

    doc.autoTable({
      startY: 20,
      head: [previewData[0]],
      body: previewData.slice(1),
    });

    doc.save("ConvertedDocument.pdf");
  };

  return (
    <div className="min-h-screen mt-[50px] bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 flex flex-col items-center justify-center p-6 text-gray-800">
      <div className="bg-white shadow-lg rounded-lg p-8 text-gray-800 max-w-xl w-full animate-fadeIn transition-transform duration-500 hover:scale-105">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
          Excel to PDF Converter
        </h2>
        <input
          type="file"
          accept=".xlsx, .xls"
          onChange={handleFileUpload}
          className="block w-full mb-6 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-4 focus:ring-indigo-300"
        />
        <div className="flex justify-between gap-4">
          <button
            onClick={handlePreview}
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-6 rounded-md shadow-md transform transition-transform duration-300 hover:scale-105"
          >
            Preview
          </button>
          <button
            onClick={convertToPDF}
            className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-md shadow-md transform transition-transform duration-300 hover:scale-105"
          >
            Download PDF
          </button>
        </div>
      </div>

      {previewData.length > 0 && (
        <div className="mt-8 bg-white shadow-lg rounded-lg p-6 w-full max-w-5xl animate-slideIn transition-transform duration-500">
          <h3 className="text-xl font-semibold mb-4 text-center text-gray-700">
            Preview
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse border border-gray-300">
              <thead>
                <tr>
                  {previewData[0].map((header, index) => (
                    <th
                      key={index}
                      className="border border-gray-300 px-4 py-2 bg-indigo-100 text-indigo-700 text-sm font-medium"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {previewData.slice(1).map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className="hover:bg-gray-100 transition-colors"
                  >
                    {row.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className="border border-gray-300 px-4 py-2 text-sm text-gray-600 text-center"
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

export default ExcelToPDF;
