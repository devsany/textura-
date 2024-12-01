import React, { useState } from "react";
import { jsPDF } from "jspdf";

const TextToPDF = () => {
  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const generatePDF = () => {
    const pdf = new jsPDF();
    pdf.text(text, 10, 10); // Add text at coordinates (10, 10)
    pdf.save("text.pdf"); // Save the file
  };

  return (
    <div
      className="mt-[50px] "
      style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}
    >
      <h2 className="text-center text-xl font-bold mb-4 text-teal-500">
        Text to PDF Converter
      </h2>
      <textarea
        className="border-2 rounded-md bg-purple-50 border-dotted"
        rows="10"
        cols="50"
        placeholder="Enter your text here..."
        value={text}
        onChange={handleTextChange}
        style={{ marginBottom: "20px", width: "100%", padding: "10px" }}
      />
      <br />
      <button
        onClick={generatePDF}
        style={{
          padding: "10px 20px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Generate PDF
      </button>
    </div>
  );
};

export default TextToPDF;
