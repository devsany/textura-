import React, { useState } from "react";
import { pdf2docx } from "pdf2docx"; // Assuming pdf2docx is available for use

const PDFToWordConverter = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [wordFile, setWordFile] = useState(null);

  // Handle file selection
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setPdfFile(file);
  };

  // Convert PDF to Word
  const convertToWord = () => {
    if (!pdfFile) return;

    setLoading(true);

    const fileReader = new FileReader();

    fileReader.onload = () => {
      const arrayBuffer = fileReader.result;

      try {
        // Convert PDF to Word
        const wordData = pdf2docx(arrayBuffer); // pdf2docx should return the Word data

        // Create a Blob object and convert it into a download URL
        const blob = new Blob([wordData], {
          type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        });
        const url = URL.createObjectURL(blob);

        // Set the Word file URL for downloading
        setWordFile(url);
      } catch (error) {
        console.error("Error during conversion:", error);
      } finally {
        setLoading(false);
      }
    };

    fileReader.readAsArrayBuffer(pdfFile); // Read the PDF file as ArrayBuffer
  };

  return (
    <div>
      <h2>PDF to Word Converter</h2>
      <input type="file" accept=".pdf" onChange={handleFileUpload} />
      <button onClick={convertToWord} disabled={loading}>
        {loading ? "Converting..." : "Convert to Word"}
      </button>

      {wordFile && (
        <div>
          <a href={wordFile} download="converted.docx">
            Download Word File
          </a>
        </div>
      )}
    </div>
  );
};

export default PDFToWordConverter;
