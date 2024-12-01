import { useState } from "react";
import JSZip from "jszip";
import { parseStringPromise } from "xml2js";
import { Document, Paragraph, Packer } from "docx"; // Correct import for Paragraph and Packer
import { saveAs } from "file-saver"; // FileSaver.js to save files

const PowerPointToWord = () => {
  const [pptFile, setPptFile] = useState(null);
  const [wordContent, setWordContent] = useState("");
  const [error, setError] = useState("");

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPptFile(file);
      extractPptContent(file);
    }
  };

  const extractPptContent = async (file) => {
    const zip = new JSZip();
    try {
      // Load the PowerPoint file asynchronously
      const content = await zip.loadAsync(file);

      // Check if the slide XML exists before attempting to read
      const slideFile = content.file("ppt/slides/slide1.xml");
      if (!slideFile) {
        throw new Error("Slide file not found in the PowerPoint file.");
      }

      // Extract the slide XML content as text
      const slideXML = await slideFile.async("text");

      // Use Promise-based xml2js parser
      const result = await parseStringPromise(slideXML);
      console.log("Parsed XML:", result);

      // Assuming we want to extract the text from the slide
      const slideText = result["pptx:slide"]["pptx:spTree"]["pptx:sp"]
        .map((sp) => sp["pptx:t"])
        .join(" ");
      setWordContent(slideText); // Update the state with the slide's text
    } catch (error) {
      setError(`Error reading PowerPoint file: ${error.message}`);
      console.error("Error reading PowerPoint file:", error);
    }
  };

  const handleDownload = () => {
    if (!wordContent) {
      setError("No content to download.");
      return;
    }

    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            new Paragraph({
              children: [wordContent], // Use Paragraph instead of P
            }),
          ],
        },
      ],
    });

    // Generate the Word document and trigger the download
    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, "extracted-content.docx");
    });
  };

  return (
    <div className="flex flex-col items-center mt-8 space-y-6 bg-gradient-to-r from-purple-300 via-green-300 to-pink-300 min-h-screen py-10">
      {/* File upload section */}
      <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 w-1/2">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          PowerPoint to Word Converter
        </h1>
        <input
          type="file"
          onChange={handleFileUpload}
          accept=".pptx"
          className="mb-4 px-6 py-3 bg-blue-600 text-white rounded-md cursor-pointer hover:bg-blue-700 transition"
        />
        <p className="text-sm text-gray-500">
          Upload a PowerPoint file (.pptx) to extract the content as text.
        </p>
      </div>

      {/* Error message section */}
      {error && (
        <div className="bg-red-200 text-red-800 px-4 py-2 rounded-md w-1/2 text-center">
          <p>{error}</p>
        </div>
      )}

      {/* Word content section */}
      {wordContent && (
        <div className="bg-white shadow-lg rounded-lg p-6 w-1/2">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Word Content:
          </h2>
          <div className="whitespace-pre-wrap break-words text-gray-800">
            {wordContent}
          </div>
        </div>
      )}

      {/* Download button */}
      {wordContent && (
        <button
          onClick={handleDownload}
          className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
        >
          Download Word Document
        </button>
      )}
    </div>
  );
};

export default PowerPointToWord;
