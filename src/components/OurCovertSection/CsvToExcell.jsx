import React, { useState } from "react";
import * as XLSX from "xlsx";

const CsvToExcel = () => {
  const [csvText, setCsvText] = useState("");
  const [csvFile, setCsvFile] = useState(null);

  // Handle CSV text input
  const handleCsvChange = (e) => {
    setCsvText(e.target.value);
  };

  // Handle file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "text/csv") {
      const reader = new FileReader();
      reader.onload = () => setCsvFile(reader.result);
      reader.readAsText(file);
    } else {
      alert("Please upload a valid CSV file.");
    }
  };

  // Convert CSV to Excel
  const convertCsvToExcel = () => {
    const content = csvFile || csvText;
    if (!content.trim()) {
      alert("Please provide some CSV data.");
      return;
    }

    // Parse the CSV data into rows and columns
    const rows = content
      .trim()
      .split("\n")
      .map((row) => row.split(","));

    // Create a new worksheet
    const ws = XLSX.utils.aoa_to_sheet(rows);

    // Create a new workbook and add the worksheet to it
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

    // Generate Excel file and trigger download
    XLSX.writeFile(wb, "CSVtoExcel.xlsx");
  };

  return (
    <div className="flex flex-col mt-[30px] items-center justify-center min-h-screen bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 py-8">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-3xl">
        <h2 className="text-4xl font-extrabold text-center text-indigo-600 mb-8">
          CSV to Excel Converter
        </h2>

        {/* CSV Input or File Upload */}
        <div className="mb-6">
          <label className="block text-gray-700 text-lg font-medium mb-2">
            CSV Input:
          </label>
          <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4">
            <textarea
              rows="6"
              placeholder="Enter CSV data (e.g., Name, Age, Country)..."
              value={csvText}
              onChange={handleCsvChange}
              className="w-full lg:w-2/3 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700 resize-none shadow-sm transition duration-200"
            ></textarea>

            <div className="w-full lg:w-1/3">
              <label className="block text-gray-700 text-lg font-medium mb-2">
                Or Upload CSV File:
              </label>
              <input
                type="file"
                accept=".csv"
                onChange={handleFileChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
        </div>

        {/* Convert to Excel Button */}
        <div className="mb-6">
          <button
            onClick={convertCsvToExcel}
            className="w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md transition duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
          >
            Convert to Excel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CsvToExcel;
