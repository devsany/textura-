import React, { useState } from "react";
import PizZip from "pizzip";
import Docxtemplater from "docxtemplater";

const JsonToWord = () => {
  const [jsonInput, setJsonInput] = useState("");
  const [jsonData, setJsonData] = useState(null);

  // Handle JSON input change
  const handleJsonChange = (e) => {
    setJsonInput(e.target.value);
  };

  // Parse JSON input
  const handleParseJson = () => {
    try {
      const parsedData = JSON.parse(jsonInput);
      setJsonData(parsedData);
    } catch (error) {
      alert("Invalid JSON format. Please check the input.");
    }
  };

  // Convert JSON to Word
  const convertJsonToWord = () => {
    if (!jsonData || jsonData.length === 0) {
      alert("Please provide valid JSON data.");
      return;
    }

    // Prepare the content for Word document as a template
    const templateContent = `
      <w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
        <w:body>
          <w:p>
            <w:r>
              <w:t>JSON to Word Document</w:t>
            </w:r>
          </w:p>
          <w:p>
            <w:r>
              <w:t>Below is the JSON data formatted as a table:</w:t>
            </w:r>
          </w:p>
          <w:tbl>
            <w:tblPr>
              <w:tblBorders>
                <w:top w:val="single" w:space="0" w:sz="4" w:space="0" w:color="auto" />
                <w:left w:val="single" w:space="0" w:sz="4" w:space="0" w:color="auto" />
                <w:bottom w:val="single" w:space="0" w:sz="4" w:space="0" w:color="auto" />
                <w:right w:val="single" w:space="0" w:sz="4" w:space="0" w:color="auto" />
                <w:insideH w:val="single" w:space="0" w:sz="4" w:space="0" w:color="auto" />
                <w:insideV w:val="single" w:space="0" w:sz="4" w:space="0" w:color="auto" />
              </w:tblBorders>
            </w:tblPr>
            <w:tr>
              <w:tc>
                <w:p>
                  <w:r>
                    <w:t>Name</w:t>
                  </w:r>
                </w:p>
              </w:tc>
              <w:tc>
                <w:p>
                  <w:r>
                    <w:t>Age</w:t>
                  </w:r>
                </w:p>
              </w:tc>
              <w:tc>
                <w:p>
                  <w:r>
                    <w:t>City</w:t>
                  </w:r>
                </w:p>
              </w:tc>
            </w:tr>
            ${jsonData
              .map(
                (row) => `
              <w:tr>
                <w:tc>
                  <w:p>
                    <w:r>
                      <w:t>${row.name || ""}</w:t>
                    </w:r>
                  </w:p>
                </w:tc>
                <w:tc>
                  <w:p>
                    <w:r>
                      <w:t>${row.age || ""}</w:t>
                    </w:r>
                  </w:p>
                </w:tc>
                <w:tc>
                  <w:p>
                    <w:r>
                      <w:t>${row.city || ""}</w:t>
                    </w:r>
                  </w:p>
                </w:tc>
              </w:tr>
            `
              )
              .join("")}
          </w:tbl>
        </w:body>
      </w:document>
    `;

    // Create a new PizZip object and add the content
    const zip = new PizZip();
    zip.file("word/document.xml", templateContent);

    // Create the Docxtemplater document
    const doc = new Docxtemplater(zip, {
      paragraphLoop: true,
      linebreaks: true,
    });

    // Generate the output file as a blob
    const out = doc.getZip().generate({ type: "blob" });

    // Create a link to download the generated Word file
    const link = document.createElement("a");
    link.href = URL.createObjectURL(out);
    link.download = "json_to_word.docx";
    link.click();
  };

  return (
    <div className="flex flex-col mt-[30px] items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 py-8">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-4xl">
        <h2 className="text-4xl font-extrabold text-center text-indigo-600 mb-8">
          JSON to Word Converter
        </h2>

        {/* JSON Input Text */}
        <div className="mb-6">
          <label className="block text-gray-700 text-lg font-medium mb-2">
            JSON Input:
          </label>
          <textarea
            rows="6"
            placeholder='Enter JSON data here (e.g., [{"name": "John", "age": 30, "city": "New York"}])'
            value={jsonInput}
            onChange={handleJsonChange}
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700 resize-none shadow-sm transition duration-200"
          ></textarea>
        </div>

        {/* Parse JSON Button */}
        <div className="mb-6">
          <button
            onClick={handleParseJson}
            className="w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md transition duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
          >
            Parse JSON
          </button>
        </div>

        {/* Convert to Word Button */}
        <div className="mb-6">
          <button
            onClick={convertJsonToWord}
            className="w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md transition duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
          >
            Convert to Word
          </button>
        </div>
      </div>
    </div>
  );
};

export default JsonToWord;
