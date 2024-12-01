import React, { useState } from "react";
import { Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from "file-saver";

const TextToWord = () => {
  const [text, setText] = useState("");
  const [fontSize, setFontSize] = useState(28); // Default size (14pt in Word)
  const [fontColor, setFontColor] = useState("#000000"); // Default black color
  const [fontFamily, setFontFamily] = useState("Calibri"); // Default font

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleFontSizeChange = (e) => {
    setFontSize(parseInt(e.target.value, 10));
  };

  const handleFontColorChange = (e) => {
    setFontColor(e.target.value);
  };

  const handleFontFamilyChange = (e) => {
    setFontFamily(e.target.value);
  };

  const generateWord = () => {
    if (!text.trim()) {
      alert("Please enter some text before generating the Word document!");
      return;
    }

    const paragraphs = text.split("\n").map(
      (line) =>
        new Paragraph({
          children: [
            new TextRun({
              text: line,
              size: fontSize, // Ensure the font size is correct
              color: fontColor.replace("#", ""), // Remove '#' if present
              font: fontFamily, // Set font family
            }),
          ],
        })
    );

    const doc = new Document({
      creator: "Your Name", // Optional: specify the creator
      title: "Generated Document", // Optional: set title for document
      sections: [
        {
          children: paragraphs, // Add paragraphs as children of the section
        },
      ],
    });

    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, "CustomFormattedText.docx");
    });
  };

  return (
    <div className="flex flex-col mt-[30px] items-center justify-center p-8 bg-gradient-to-r from-blue-100 to-purple-200 min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-3xl w-full">
        <h2 className="text-2xl font-bold text-center text-teal-500 mb-4">
          Enhanced Text to Word Converter
        </h2>

        <textarea
          rows="8"
          placeholder="Enter your text here (each line will be a paragraph)..."
          value={text}
          onChange={handleTextChange}
          className="w-full border bg-purple-50  border-dotted broder-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
        />

        <div className="mt-4 space-y-4">
          {/* Font Size Selection */}
          <div className="flex items-center">
            <label className="text-gray-600 mr-4">Font Size:</label>
            <select
              value={fontSize}
              onChange={handleFontSizeChange}
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {[8, 10, 12, 14, 16, 18, 20, 24, 28, 32, 36, 48, 72].map(
                (size) => (
                  <option key={size} value={size * 2}>
                    {size}pt
                  </option>
                )
              )}
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
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {[
                "Arial",
                "Calibri",
                "Times New Roman",
                "Courier New",
                "Georgia",
                "Verdana",
              ].map((font) => (
                <option key={font} value={font}>
                  {font}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Generate Button */}
        <button
          onClick={generateWord}
          className="w-full mt-6 bg-teal-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Generate & Download Word Document
        </button>
      </div>
    </div>
  );
};

export default TextToWord;
