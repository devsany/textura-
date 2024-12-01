import React, { useState } from "react";
import * as XLSX from "xlsx";

const JsonToExcel = () => {
  const [jsonInput, setJsonInput] = useState("");
  const [jsonData, setJsonData] = useState(null);

  // Handle JSON input change (from text input)
  const handleJsonChange = (e) => {
    setJsonInput(e.target.value);
  };

  // Handle JSON file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      try {
        const fileJson = JSON.parse(reader.result);
        setJsonData(fileJson);
        setJsonInput(""); // Clear text input when file is selected
      } catch (error) {
        alert("Invalid JSON file format. Please upload a valid JSON file.");
      }
    };
    reader.readAsText(file);
  };

  // Parse JSON from input text
  const handleParseJson = () => {
    try {
      const parsedData = JSON.parse(jsonInput);
      setJsonData(parsedData);
    } catch (error) {
      alert("Invalid JSON format. Please check the input.");
    }
  };

  // Convert JSON to Excel
  const convertJsonToExcel = () => {
    if (!jsonData || jsonData.length === 0) {
      alert("Please provide valid JSON data.");
      return;
    }

    // Create a new worksheet from the JSON data
    const ws = XLSX.utils.json_to_sheet(jsonData);

    // Create a new workbook and append the worksheet
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

    // Write the workbook to an Excel file
    XLSX.writeFile(wb, "JsonToExcel.xlsx");
  };

  // Render table from JSON data
  const renderTable = () => {
    if (!jsonData || jsonData.length === 0) return null;

    const columns = Object.keys(jsonData[0]);

    return (
      <table className="w-full text-left border-collapse mt-6">
        <thead>
          <tr className="bg-indigo-600 text-white">
            {columns.map((col) => (
              <th key={col} className="px-6 py-3 border-b">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {jsonData.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-b hover:bg-gray-100">
              {columns.map((col) => (
                <td key={col} className="px-6 py-3 border-b">
                  {row[col]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className="flex mt-[30px] flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-200 via-pink-300 to-indigo-300 py-8">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-4xl">
        <h2 className="text-4xl font-extrabold text-center text-indigo-600 mb-8">
          JSON to Excel Converter
        </h2>

        {/* JSON Input Text */}
        <div className="mb-6">
          <label className="block text-gray-700 text-lg font-medium mb-2">
            JSON Input:
          </label>
          <textarea
            rows="6"
            placeholder='Enter JSON data here or upload a JSON file (e.g., [{"name": "John", "age": 30}, {"name": "Jane", "age": 25}])'
            value={jsonInput}
            onChange={handleJsonChange}
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700 resize-none shadow-sm transition duration-200"
          ></textarea>
        </div>

        {/* JSON File Upload */}
        <div className="mb-6">
          <label className="block text-gray-700 text-lg font-medium mb-2">
            Or Upload JSON File:
          </label>
          <input
            type="file"
            accept=".json"
            onChange={handleFileChange}
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
          />
        </div>

        {/* Parse JSON Button */}
        <div className="mb-6">
          <button
            onClick={handleParseJson}
            className="w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md transition duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
          >
            Parse JSON
          </button>
        </div>

        {/* Table Preview */}
        {renderTable()}

        {/* Convert to Excel Button */}
        <div className="mb-6">
          <button
            onClick={convertJsonToExcel}
            className="w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md transition duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
          >
            Convert to Excel
          </button>
        </div>
      </div>
    </div>
  );
};

export default JsonToExcel;
