import React, { useState } from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

const ExcelToCSV = () => {
  const [excelData, setExcelData] = useState([]);
  const [csvData, setCsvData] = useState("");
  const [error, setError] = useState("");
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);

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

      const sheetName = workbook.SheetNames[0];
      const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

      if (sheetData.length === 0) {
        setError("The Excel sheet is empty or cannot be parsed.");
        return;
      }

      const csvOutput = XLSX.utils.sheet_to_csv(workbook.Sheets[sheetName]);

      setExcelData(sheetData);
      setCsvData(csvOutput);
      setError("");
    };

    reader.onerror = () => {
      setError("Failed to read the file. Please upload a valid Excel file.");
    };

    reader.readAsBinaryString(file);
  };

  const handleDownloadCSV = () => {
    if (!csvData) {
      setError("No data available to download.");
      return;
    }

    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "converted-data.csv");
  };

  const handleCopyToClipboard = () => {
    if (!csvData) {
      setError("No data available to copy.");
      return;
    }
    navigator.clipboard.writeText(csvData).then(
      () => {
        alert("CSV data copied to clipboard!");
      },
      (err) => {
        alert("Failed to copy CSV data. Error:", err);
      }
    );
  };

  return (
    <div className="flex flex-col mt-[50px] items-center min-h-screen py-10 bg-gradient-to-br from-blue-100 via-white to-blue-300">
      {/* File upload section */}
      <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 w-full max-w-md md:max-w-2xl">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Excel to CSV Converter
        </h1>
        <input
          type="file"
          onChange={handleFileUpload}
          accept=".xlsx, .xls"
          className="mb-4 px-6 py-3 bg-blue-500 text-white rounded-md cursor-pointer hover:bg-blue-600 transition w-full"
        />
        <p className="text-sm text-gray-500 text-center">
          Upload an Excel file (.xlsx or .xls) to convert it to CSV format.
        </p>
      </div>

      {/* Error message section */}
      {error && (
        <div className="bg-red-200 text-red-800 px-4 py-2 rounded-md w-11/12 md:w-1/2 text-center mt-4">
          <p>{error}</p>
        </div>
      )}

      {/* Preview and Action buttons */}
      {csvData && (
        <div className="flex flex-wrap justify-center mt-6 gap-4">
          <button
            onClick={() => setIsPreviewVisible((prev) => !prev)}
            className="px-6 py-3 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition"
          >
            {isPreviewVisible ? "Hide Preview" : "Preview Table"}
          </button>
          <button
            onClick={handleCopyToClipboard}
            className="px-6 py-3 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition"
          >
            Copy to Clipboard
          </button>
          <button
            onClick={handleDownloadCSV}
            className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
          >
            Download CSV
          </button>
        </div>
      )}

      {/* CSV Data Preview in Table Format */}
      {isPreviewVisible && excelData.length > 0 && (
        <div className="bg-white shadow-lg rounded-lg p-6 w-11/12 md:w-3/4 mt-6 overflow-auto">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
            CSV Table Preview:
          </h2>
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                {Object.keys(excelData[0]).map((key) => (
                  <th
                    key={key}
                    className="border border-gray-300 px-4 py-2 text-gray-700 bg-gray-100"
                  >
                    {key}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {excelData.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {Object.values(row).map((value, colIndex) => (
                    <td
                      key={colIndex}
                      className="border border-gray-300 px-4 py-2 text-gray-700"
                    >
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ExcelToCSV;
