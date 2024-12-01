import React, { useState } from "react";
import * as XLSX from "xlsx";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";

const ExcelToImage = () => {
  const [excelData, setExcelData] = useState([]);
  const [error, setError] = useState("");
  const [imageFormat, setImageFormat] = useState("png");

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

      setExcelData(sheetData);
      setError("");
    };

    reader.onerror = () => {
      setError("Failed to read the file. Please upload a valid Excel file.");
    };

    reader.readAsBinaryString(file);
  };

  const handleDownloadImage = () => {
    if (excelData.length === 0) {
      setError("No data available to generate an image.");
      return;
    }

    const tableElement = document.getElementById("excel-table");
    if (!tableElement) {
      setError("Failed to generate the table for the image.");
      return;
    }

    html2canvas(tableElement).then((canvas) => {
      canvas.toBlob(
        (blob) => {
          saveAs(blob, `excel-to-image.${imageFormat}`);
        },
        imageFormat === "png" ? "image/png" : "image/jpeg"
      );
    });
  };

  return (
    <div className="flex mt-[30px] md:mt-[50px] flex-col items-center min-h-screen py-10 bg-gradient-to-br from-gray-100 via-white to-gray-300">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Excel to Image Converter
        </h1>
        <input
          type="file"
          onChange={handleFileUpload}
          accept=".xlsx, .xls"
          className="mb-4 px-6 py-3 bg-blue-500 text-white rounded-md cursor-pointer hover:bg-blue-600 transition w-full"
        />
        <p className="text-sm text-gray-500 text-center">
          Upload an Excel file (.xlsx or .xls) to convert its contents to an
          image.
        </p>

        {excelData.length > 0 && (
          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Choose Image Format:
            </label>
            <select
              value={imageFormat}
              onChange={(e) => setImageFormat(e.target.value)}
              className="mb-4 px-4 py-2 border border-gray-300 rounded-md w-full"
            >
              <option value="png">PNG</option>
              <option value="jpeg">JPEG</option>
            </select>

            <button
              onClick={handleDownloadImage}
              className="w-full px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
            >
              Download as Image
            </button>
          </div>
        )}
      </div>

      {error && (
        <div className="bg-red-200 text-red-800 px-4 py-2 rounded-md w-11/12 md:w-1/2 text-center mt-4">
          <p>{error}</p>
        </div>
      )}

      {excelData.length > 0 && (
        <div className="mt-6 bg-white shadow-lg rounded-lg p-4 w-11/12 md:w-3/4 overflow-auto">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
            Table Preview:
          </h2>
          <div id="excel-table">
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
        </div>
      )}
    </div>
  );
};

export default ExcelToImage;
