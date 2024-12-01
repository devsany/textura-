import React, { useState } from "react";
import * as pdfjsLib from "pdfjs-dist";
import { Document, Packer, Paragraph, TextRun } from "docx";
import { GlobalWorkerOptions } from 'pdfjs-dist';

// Set the worker source to the versioned worker script
GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.8./pdf.worker.min.js';

const PdfToWordConverter = () => {
  const [pdfFile, setPdfFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setPdfFile(file);
    } else {
      alert("Please upload a valid PDF file.");
    }
  };

  const convertPdfToWord = async () => {
    if (!pdfFile) return alert("Please upload a PDF file.");

    // Read the PDF file
    const fileReader = new FileReader();
    fileReader.readAsArrayBuffer(pdfFile);
    fileReader.onload = async () => {
      const pdfData = new Uint8Array(fileReader.result);

      try {
        const pdf = await pdfjsLib.getDocument(pdfData).promise;
        const numPages = pdf.numPages;
        let textContent = "";

        // Extract text from each page
        for (let i = 1; i <= numPages; i++) {
          const page = await pdf.getPage(i);
          const text = await page.getTextContent();
          text.items.forEach((item) => {
            textContent += item.str + " ";
          });
        }

        // Create the Word document
        const doc = new Document({
          sections: [
            {
              properties: {},
              children: [
                new Paragraph({
                  children: [new TextRun(textContent)],
                }),
              ],
            },
          ],
        });

        // Convert to buffer and trigger download
        const buffer = await Packer.toBuffer(doc);
        const blob = new Blob([buffer], {
          type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "converted.docx";
        a.click();
        window.URL.revokeObjectURL(url);
      } catch (error) {
        console.error("Error converting PDF to Word:", error);
        alert("An error occurred while converting the PDF.");
      }
    };
  };

  return (
    <div className="mt-[50px]">
      <h1>PDF to Word Converter</h1>
      <input type="file" accept="application/pdf" onChange={handleFileChange} />
      <button onClick={convertPdfToWord}>Convert to Word</button>
    </div>
  );
};

export default PdfToWordConverter;
