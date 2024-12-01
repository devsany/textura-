import React, { useState } from "react";
import {
  Document,
  Packer,
  Paragraph,
  Table,
  TableRow,
  TableCell,
  TextRun,
} from "docx";

const CsvToWord = () => {
  const [csvText, setCsvText] = useState("");
  const [alignment, setAlignment] = useState("center");
  const [isBold, setIsBold] = useState(false);
  const [csvFile, setCsvFile] = useState(null);
  const [previewContent, setPreviewContent] = useState(null);

  // Handle CSV text input
  const handleCsvChange = (e) => setCsvText(e.target.value);

  // Handle CSV file input
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

  // Handle table alignment change
  const handleAlignmentChange = (e) => setAlignment(e.target.value);

  // Handle bold text toggle
  const handleBoldChange = (e) => setIsBold(e.target.checked);

  // Convert CSV to Word Document
  const convertCsvToWord = (csvContent) => {
    const rows = csvContent
      .trim()
      .split("\n")
      .map((row) => row.split(","));

    // Create table rows for the Word document with user-selected options
    const tableRows = rows.map(
      (row) =>
        new TableRow({
          children: row.map(
            (cell) =>
              new TableCell({
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: cell.trim(),
                        bold: isBold, // Apply bold text based on user selection
                      }),
                    ],
                    alignment: alignment, // Apply alignment based on user selection
                  }),
                ],
              })
          ),
        })
    );

    // Create a Word document
    const doc = new Document({
      sections: [
        {
          children: [
            new Paragraph({
              children: [
                new TextRun({
                  text: "CSV to Word Table",
                  bold: true,
                  size: 28,
                }),
              ],
              alignment: "center",
            }),
            new Table({
              rows: tableRows,
            }),
          ],
        },
      ],
    });

    // Generate and download the Word file
    Packer.toBlob(doc).then((blob) => {
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "CSVToWord.docx";
      link.click();
    });
  };

  // Handle Preview Button
  const handlePreview = () => {
    const content = csvFile || csvText;
    if (content.trim()) {
      setPreviewContent(content);
    } else {
      alert("Please provide some CSV data to preview.");
    }
  };

  // Render preview table (to show how the table will look in Word)
  const renderPreview = () => {
    const rows = previewContent
      .trim()
      .split("\n")
      .map((row) => row.split(","));
    return (
      <div className="overflow-x-auto border mt-[30px] rounded-lg shadow-md  bg-white p-4">
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              {rows[0].map((_, index) => (
                <th
                  key={index}
                  className="border px-4 py-2 text-center bg-gray-200"
                >
                  Header {index + 1}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="border px-4 py-2 text-center">
                    {cell.trim()}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center  mt-[30px] from-indigo-200 via-purple-200 to-pink-200 border-gray-300  justify-center min-h-screen bg-gradient-to-r from-indigo-00 via-purple-200 to-pink-200 py-8">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-3xl">
        <h2 className="text-4xl font-extrabold text-center text-indigo-600 mb-8">
          CSV to Word Converter
        </h2>

        <div className="mb-6">
          {/* Options Section */}
          <div className="flex justify-between items-center space-x-4">
            {/* Table Alignment Selection */}
            <div>
              <label className="text-lg font-medium text-gray-700">
                Table Alignment:
              </label>
              <select
                value={alignment}
                onChange={handleAlignmentChange}
                className="ml-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="left">Left</option>
                <option value="center">Center</option>
                <option value="right">Right</option>
              </select>
            </div>

            {/* Bold Text Option */}
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={isBold}
                onChange={handleBoldChange}
                className="mr-2"
              />
              <label className="text-lg font-medium text-gray-700">
                Bold Text
              </label>
            </div>
          </div>
        </div>

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

        {/* Preview Button */}
        <div className="mb-6">
          <button
            onClick={handlePreview}
            className="w-full px-6 py-3 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold rounded-lg shadow-md transition duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
          >
            Preview Table
          </button>
        </div>

        {/* Preview Section */}
        {previewContent && renderPreview()}

        {/* Convert to Word Button */}
        <button
          onClick={() => convertCsvToWord(csvFile || csvText)}
          className="w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md transition duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
        >
          Convert to Word
        </button>
      </div>

      {/* Footer */}
      <footer className="mt-8 text-gray-600 text-sm text-center">
        © {new Date().getFullYear()} - CSV to Word Converter. A seamless
        experience to convert CSV to Word.
      </footer>
    </div>
  );
};

export default CsvToWord;
