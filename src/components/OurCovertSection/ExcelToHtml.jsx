import React, { useState } from "react";
import * as XLSX from "xlsx";

const ExcelToHTML = () => {
  const [excelData, setExcelData] = useState([]);
  const [error, setError] = useState("");
  const [exportType, setExportType] = useState("html"); // Default to HTML

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      readExcelFile(file);
    }
  };

  const readExcelFile = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: "binary" });

      const sheetName = workbook.SheetNames[0]; // Read the first sheet
      const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

      if (sheetData.length === 0) {
        setError("The Excel sheet is empty or cannot be parsed.");
        return;
      }

      setExcelData(sheetData);
      setError("");
    };

    reader.onerror = () => {
      setError("Failed to read the file. Please upload a valid Excel file.");
    };

    reader.readAsBinaryString(file);
  };

  // Generate HTML string for table
  const generateHTML = () => {
    const header = Object.keys(excelData[0])
      .map((key) => `<th>${key}</th>`)
      .join("");
    const rows = excelData
      .map(
        (row) =>
          `<tr>${Object.values(row)
            .map((value) => `<td>${value}</td>`)
            .join("")}</tr>`
      )
      .join("");

    return `
      <table class="table-auto min-w-full bg-white shadow-lg rounded-lg">
        <thead>
          <tr class="bg-indigo-500 text-white">
            ${header}
          </tr>
        </thead>
        <tbody>
          ${rows}
        </tbody>
      </table>
    `;
  };

  // Generate React component code
  const generateReactComponent = () => {
    const tableRows = excelData
      .map(
        (row) =>
          `<tr>
            ${Object.values(row)
              .map(
                (value) => `<td>{${value}}</td>` // Correct JSX formatting
              )
              .join("")}
          </tr>`
      )
      .join("");

    return `
      import React from 'react';

      const ExcelTable = ({ data }) => {
        return (
          <table className="table-auto min-w-full bg-white shadow-lg rounded-lg">
            <thead>
              <tr className="bg-indigo-500 text-white">
                ${Object.keys(excelData[0])
                  .map((key) => `<th>{key}</th>`)
                  .join("")}
              </tr>
            </thead>
            <tbody>
              {data.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  ${tableRows}
                </tr>
              ))}
            </tbody>
          </table>
        );
      };

      export default ExcelTable;
    `;
  };

  // Download the content
  const handleDownload = () => {
    let content = "";
    if (exportType === "html") {
      content = generateHTML();
    } else if (exportType === "react") {
      content = generateReactComponent();
    }

    const blob = new Blob([content], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = exportType === "html" ? "table.html" : "ExcelTable.js";
    link.click();
  };

  return (
    <div className="flex mt-[50px] flex-col items-center min-h-screen py-10 bg-gradient-to-br from-indigo-100 via-white to-indigo-300">
      {/* Upload Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl text-blue-600 font-semibold   mb-4 text-center">
          Excel to HTML Table
        </h1>
        <input
          type="file"
          onChange={handleFileUpload}
          accept=".xlsx, .xls"
          className="mb-4 px-6 py-3 bg-indigo-500 text-white rounded-md cursor-pointer hover:bg-indigo-600 transition w-full"
        />
        <p className="text-sm text-gray-500 text-center">
          Upload an Excel file (.xlsx or .xls) to convert and view as a table.
        </p>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-200 text-red-800 px-4 py-2 rounded-md w-11/12 md:w-1/2 text-center mt-4">
          <p>{error}</p>
        </div>
      )}

      {/* Excel Data Table */}
      {excelData.length > 0 && (
        <div className="overflow-x-auto mt-6 w-11/12 md:w-3/4">
          <table className="min-w-full table-auto bg-white shadow-lg rounded-lg">
            <thead>
              <tr className="bg-indigo-500 text-white">
                {Object.keys(excelData[0]).map((key) => (
                  <th key={key} className="px-4 py-2 text-left border-b">
                    {key}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {excelData.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {Object.values(row).map((value, colIndex) => (
                    <td key={colIndex} className="px-4 py-2 border-b">
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Export Option */}
      {excelData.length > 0 && (
        <div className="mt-6 w-full max-w-md text-center">
          <label className="mr-4 text-lg text-gray-800">Export as:</label>
          <select
            value={exportType}
            onChange={(e) => setExportType(e.target.value)}
            className="p-2 bg-indigo-500 text-white rounded-md cursor-pointer"
          >
            <option value="html">HTML</option>
            <option value="react">React Component</option>
          </select>
        </div>
      )}

      {/* Download Button */}
      {excelData.length > 0 && (
        <div className="mt-6">
          <button
            onClick={handleDownload}
            className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
          >
            Download as {exportType === "html" ? "HTML" : "React Component"}
          </button>
        </div>
      )}
    </div>
  );
};

export default ExcelToHTML;
