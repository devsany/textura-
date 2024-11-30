import React, { useState } from "react";
import * as PDFJS from "pdfjs-dist";
import Docxtemplater from "docxtemplater";

const PdfToWordConverter = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setPdfFile(e.target.files[0]);
  };

  const convertToWord = async () => {
    if (!pdfFile) {
      alert("Please select a PDF file");
      return;
    }

    setLoading(true);

    // Read PDF file as an array buffer
    const fileReader = new FileReader();
    fileReader.onload = async function () {
      const pdfData = new Uint8Array(this.result);
      const pdf = await PDFJS.getDocument(pdfData).promise;

      let extractedText = "";
      for (let i = 0; i < pdf.numPages; i++) {
        const page = await pdf.getPage(i + 1);
        const textContent = await page.getTextContent();
        extractedText +=
          textContent.items.map((item) => item.str).join(" ") + "\n";
      }

      // Now create a Word document with extracted text
      const doc = new Docxtemplater();
      doc.loadZip(new JSZip()); // Create a new zip container for the Word file
      doc.setData({ content: extractedText });

      try {
        doc.render(); // Render the Word document
        const out = doc.getZip().generate({ type: "blob" });

        // Trigger download
        const link = document.createElement("a");
        link.href = URL.createObjectURL(out);
        link.download = "converted.docx";
        link.click();
      } catch (error) {
        console.error(error);
        alert("Error creating Word document");
      } finally {
        setLoading(false);
      }
    };

    fileReader.readAsArrayBuffer(pdfFile);
  };

  return (
    <div>
      <input type="file" accept=".pdf" onChange={handleFileChange} />
      <button onClick={convertToWord} disabled={loading}>
        {loading ? "Converting..." : "Convert PDF to Word"}
      </button>
    </div>
  );
};

export default PdfToWordConverter;
