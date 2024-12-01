import React, { useState } from "react";
import * as XLSX from "xlsx";
import { Document, Packer, Paragraph, Table, TableRow, TableCell } from "docx";
import { saveAs } from "file-saver";

const ExcellToWord = () => {
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

  const convertExcelToWord = async () => {
    if (!previewData.length) {
      alert("Please preview the file before downloading.");
      return;
    }

    const rows = previewData.map(
      (row) =>
        new TableRow({
          children: row.map(
            (cell) =>
              new TableCell({
                children: [new Paragraph(cell?.toString() || "")],
              })
          ),
        })
    );

    const table = new Table({ rows });
    const doc = new Document({
      sections: [
        {
          children: [new Paragraph("Excel to Word Table"), table],
        },
      ],
    });

    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, "ConvertedDocument.docx");
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-teal-100 to-green-100 flex flex-col items-center justify-center p-6 text-gray-800">
      <div className="bg-white shadow-lg rounded-lg p-8 text-gray-800 max-w-xl w-full animate-fadeIn">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Excel to Word Converter
        </h2>
        <input
          type="file"
          accept=".xlsx, .xls"
          onChange={handleFileUpload}
          className="block w-full mb-6 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <div className="flex justify-between gap-4">
          <button
            onClick={handlePreview}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-300"
          >
            Preview
          </button>
          <button
            onClick={convertExcelToWord}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition duration-300"
          >
            Download Word File
          </button>
        </div>
      </div>

      {previewData.length > 0 && (
        <div className="mt-8 bg-white shadow-lg rounded-lg p-6 w-full max-w-5xl animate-fadeIn">
          <h3 className="text-lg font-semibold mb-4 text-center">Preview</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse border border-gray-300">
              <thead>
                <tr>
                  {previewData[0].map((header, index) => (
                    <th
                      key={index}
                      className="border border-gray-300 px-4 py-2 bg-gray-100 text-gray-800 text-sm"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {previewData.slice(1).map((row, rowIndex) => (
                  <tr key={rowIndex}>
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

export default ExcellToWord;
