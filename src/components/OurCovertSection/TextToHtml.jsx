import React, { useState } from "react";

const TextToHTML = () => {
  const [text, setText] = useState("");
  const [fontSize, setFontSize] = useState(16);
  const [fontColor, setFontColor] = useState("#000000");
  const [fontFamily, setFontFamily] = useState("Arial");

  const handleTextChange = (e) => setText(e.target.value);
  const handleFontSizeChange = (e) => setFontSize(parseInt(e.target.value, 10));
  const handleFontColorChange = (e) => setFontColor(e.target.value);
  const handleFontFamilyChange = (e) => setFontFamily(e.target.value);

  const generateHTML = () => {
    if (!text.trim()) {
      alert("Please enter some text before generating the HTML!");
      return;
    }

    const htmlContent = text
      .split("\n")
      .map(
        (line) =>
          `<p style="font-size: ${fontSize}px; color: ${fontColor}; font-family: ${fontFamily};">${line}</p>`
      )
      .join("");

    const blob = new Blob([htmlContent], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "GeneratedHTML.html";
    link.click();
  };

  return (
    <div className="flex flex-col mt-[50px] items-center justify-center p-8 bg-gradient-to-br from-yellow-100 to-green-100 min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-3xl w-full">
        <h2 className="text-2xl font-bold text-center text-green-600 mb-4">
          Text to HTML Converter
        </h2>

        <textarea
          rows="8"
          placeholder="Enter your text here (each line will be a paragraph)..."
          value={text}
          onChange={handleTextChange}
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-700"
        />

        <div className="mt-4 space-y-4">
          {/* Font Size Selection */}
          <div className="flex items-center">
            <label className="text-gray-600 mr-4">Font Size:</label>
            <select
              value={fontSize}
              onChange={handleFontSizeChange}
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {[10, 12, 14, 16, 18, 20, 24, 28, 32, 36].map((size) => (
                <option key={size} value={size}>
                  {size}px
                </option>
              ))}
            </select>
          </div>

          {/* Font Color Selection */}
          <div className="flex items-center">
            <label className="text-gray-600 mr-4">Font Color:</label>
            <input
              type="color"
              value={fontColor}
              onChange={handleFontColorChange}
              className="w-10 h-10 border-0 cursor-pointer"
            />
          </div>

          {/* Font Family Selection */}
          <div className="flex items-center">
            <label className="text-gray-600 mr-4">Font Family:</label>
            <select
              value={fontFamily}
              onChange={handleFontFamilyChange}
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {[
                "Arial",
                "Times New Roman",
                "Courier New",
                "Georgia",
                "Verdana",
                "Tahoma",
              ].map((font) => (
                <option key={font} value={font}>
                  {font}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          onClick={generateHTML}
          className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Generate & Download HTML File
        </button>
      </div>
    </div>
  );
};

export default TextToHTML;
