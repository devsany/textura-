import React, { useState } from "react";

const TextToCSV = () => {
  const [text, setText] = useState("");

  const handleTextChange = (e) => setText(e.target.value);

  const generateCSV = () => {
    if (!text.trim()) {
      alert("Please enter some text before generating the CSV file!");
      return;
    }

    // Convert text to CSV format
    const rows = text.split("\n").map((line) => line.split(","));
    const csvContent = rows
      .map((row) => row.map((cell) => `"${cell.trim()}"`).join(","))
      .join("\n");

    // Create a Blob and trigger file download
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "GeneratedCSV.csv";
    link.click();
  };

  return (
    <div className="flex flex-col mt-[30px] items-center justify-center min-h-screen bg-gradient-to-tr from-purple-200 via-pink-200 to-blue-300 p-8">
      <div className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-3xl">
        <h2 className="text-3xl font-extrabold text-center text-teal-500 mb-6">
          Text to CSV Converter
        </h2>
        <p className="text-center text-gray-600 mb-4">
          Transform your text into a downloadable CSV file. Use commas for
          columns and new lines for rows.
        </p>

        <textarea
          rows="10"
          placeholder="Enter text here (e.g., 
Name,Age,Country
John,25,USA
Jane,30,UK)"
          value={text}
          onChange={handleTextChange}
          className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-teal-400 text-gray-700 resize-none shadow-sm transition duration-200"
        ></textarea>

        <div className="flex items-center justify-between mt-4 text-gray-500 text-sm">
          <span>
            Each line is a row, and values separated by commas are columns.
          </span>
          <span className="italic">Supports up to 10,000 characters.</span>
        </div>

        <button
          onClick={generateCSV}
          className="mt-6 w-full py-3 text-lg bg-teal-500 hover:bg-teal-700 text-white font-semibold rounded-lg shadow-md transition duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        >
          Generate & Download CSV
        </button>
      </div>
    </div>
  );
};

export default TextToCSV;
