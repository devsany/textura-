import React, { useState } from "react";

const CsvToHtml = () => {
  const [inputType, setInputType] = useState("text"); // 'text' or 'file'
  const [csvText, setCsvText] = useState("");
  const [htmlTable, setHtmlTable] = useState("");

  const handleCsvChange = (e) => setCsvText(e.target.value);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => setCsvText(event.target.result);
      reader.readAsText(file);
    }
  };

  const convertCsvToHtml = () => {
    if (!csvText.trim()) {
      alert("Please provide some CSV data before converting!");
      return;
    }

    try {
      const rows = csvText.trim().split("\n");
      const headers = rows[0].split(",").map((header) => header.trim());
      const dataRows = rows
        .slice(1)
        .map((row) => row.split(",").map((cell) => cell.trim()));

      const table = `
        <table border="1" style="border-collapse: collapse; width: 100%; text-align: left;">
          <thead>
            <tr>${headers.map((header) => `<th>${header}</th>`).join("")}</tr>
          </thead>
          <tbody>
            ${dataRows
              .map(
                (row) =>
                  `<tr>${row
                    .map((cell) => `<td>${cell || "&nbsp;"}</td>`)
                    .join("")}</tr>`
              )
              .join("")}
          </tbody>
        </table>
      `;

      setHtmlTable(table);
    } catch (error) {
      alert("Invalid CSV format. Please check your input.");
    }
  };

  const copyToClipboard = () => {
    if (htmlTable) {
      navigator.clipboard
        .writeText(htmlTable)
        .then(() => alert("HTML copied to clipboard!"))
        .catch((err) => alert("Failed to copy HTML. Please try again."));
    }
  };

  return (
    <div className="flex mt-[30px] flex-col items-center justify-center min-h-screen bg-gradient-to-br from-yellow-100 via-orange-200 to-red-300 p-8">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-4xl">
        <h2 className="text-3xl font-extrabold text-center text-orange-600 mb-6">
          CSV to HTML Table Converter
        </h2>

        {/* Choice Selector */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">
            Select Input Type:
          </label>
          <select
            value={inputType}
            onChange={(e) => setInputType(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-sm"
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
            className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-700 resize-none shadow-sm transition duration-200"
          ></textarea>
        ) : (
          <div>
            <input
              type="file"
              accept=".csv"
              onChange={handleFileUpload}
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-sm"
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
            onClick={convertCsvToHtml}
            className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg shadow-md transition duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
          >
            Convert to HTML
          </button>
          {htmlTable && (
            <button
              onClick={copyToClipboard}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            >
              Copy HTML
            </button>
          )}
        </div>

        {/* HTML Output */}
        {htmlTable && (
          <div className="mt-8 bg-gray-100 p-4 rounded-lg shadow-inner overflow-auto max-h-96 relative">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-semibold text-gray-700">
                Converted HTML:
              </h3>
            </div>
            <pre className="text-sm text-gray-800">{htmlTable}</pre>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-6 text-gray-600 text-sm text-center">
        © {new Date().getFullYear()} - CSV to HTML Converter. Effortless table
        generation.
      </footer>
    </div>
  );
};

export default CsvToHtml;
