import React, { useState } from "react";

const CsvToJson = () => {
  const [inputType, setInputType] = useState("text"); // 'text' or 'file'
  const [csvText, setCsvText] = useState("");
  const [jsonResult, setJsonResult] = useState(null);

  const handleCsvChange = (e) => setCsvText(e.target.value);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => setCsvText(event.target.result);
      reader.readAsText(file);
    }
  };

  const convertCsvToJson = () => {
    if (!csvText.trim()) {
      alert("Please provide some CSV data before converting!");
      return;
    }

    try {
      const rows = csvText.trim().split("\n");
      const headers = rows[0].split(",").map((header) => header.trim());
      const json = rows.slice(1).map((row) => {
        const values = row.split(",").map((value) => value.trim());
        return headers.reduce((acc, header, index) => {
          acc[header] = values[index] || "";
          return acc;
        }, {});
      });

      setJsonResult(json);
    } catch (error) {
      alert("Invalid CSV format. Please check your input.");
    }
  };

  const downloadJson = () => {
    if (!jsonResult) return;
    const jsonBlob = new Blob([JSON.stringify(jsonResult, null, 2)], {
      type: "application/json",
    });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(jsonBlob);
    link.download = "ConvertedJSON.json";
    link.click();
  };

  const copyToClipboard = () => {
    if (jsonResult) {
      navigator.clipboard
        .writeText(JSON.stringify(jsonResult, null, 2))
        .then(() => alert("JSON copied to clipboard!"))
        .catch((err) => alert("Failed to copy JSON. Please try again."));
    }
  };

  return (
    <div className="flex mt-[30px] flex-col items-center justify-center min-h-screen bg-gradient-to-tr from-green-200 via-teal-200 to-blue-300 p-8">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-4xl">
        <h2 className="text-3xl font-extrabold text-center text-teal-600 mb-6">
          CSV to JSON Converter
        </h2>

        {/* Choice Selector */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">
            Select Input Type:
          </label>
          <select
            value={inputType}
            onChange={(e) => setInputType(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-sm"
          >
            <option value="text">Text Input</option>
            <option value="file">Upload CSV File</option>
          </select>
        </div>

        {/* Input Box or File Upload */}
        {inputType === "text" ? (
          <textarea
            rows="10"
            placeholder="Enter CSV data (e.g., Name,Age,Country)..."
            value={csvText}
            onChange={handleCsvChange}
            className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-700 resize-none shadow-sm transition duration-200"
          ></textarea>
        ) : (
          <div>
            <input
              type="file"
              accept=".csv"
              onChange={handleFileUpload}
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-sm"
            />
            {csvText && (
              <div className="mt-4 text-gray-500 text-sm">
                File loaded successfully. Ready to convert!
              </div>
            )}
          </div>
        )}

        {/* Buttons */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={convertCsvToJson}
            className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg shadow-md transition duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2"
          >
            Convert to JSON
          </button>
          {jsonResult && (
            <button
              onClick={downloadJson}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            >
              Download JSON
            </button>
          )}
        </div>

        {/* JSON Output */}
        {jsonResult && (
          <div className="mt-8 bg-gray-100 p-4 rounded-lg shadow-inner overflow-auto max-h-96 relative">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-semibold text-gray-700">
                Converted JSON:
              </h3>
              <button
                onClick={copyToClipboard}
                className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-700 px-3 py-1 rounded shadow focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2"
              >
                Copy JSON
              </button>
            </div>
            <pre className="text-sm text-gray-800">
              {JSON.stringify(jsonResult, null, 2)}
            </pre>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-6 text-gray-600 text-sm text-center">
        © {new Date().getFullYear()} - Your CSV Companion. Simplify your data
        conversions.
      </footer>
    </div>
  );
};

export default CsvToJson;
