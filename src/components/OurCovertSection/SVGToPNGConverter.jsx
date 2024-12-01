import React, { useState, useRef } from "react";
import { toPng } from "html-to-image";

function SvgToPngApp() {
  const [svgString, setSvgString] = useState("");
  const [previewError, setPreviewError] = useState("");
  const svgContainerRef = useRef(null);

  const handleConvert = async () => {
    try {
      if (!svgString.trim()) {
        setPreviewError("SVG input is empty!");
        return;
      }

      // Clear any existing error
      setPreviewError("");

      const svgContainer = svgContainerRef.current;
      if (!svgContainer) {
        alert("Preview container not found!");
        return;
      }

      // Convert the SVG element inside the container to PNG
      const pngDataUrl = await toPng(svgContainer);
      const link = document.createElement("a");
      link.href = pngDataUrl;
      link.download = "converted-image.png";
      link.click();
    } catch (error) {
      console.error("Error converting SVG to PNG:", error);
      setPreviewError("Failed to convert the SVG to PNG.");
    }
  };

  return (
    <div className="p-6 mt-[50px] min-h-screen bg-gray-50 flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4 text-teal-500">
        SVG to PNG Converter
      </h2>
      <textarea
        value={svgString}
        onChange={(e) => setSvgString(e.target.value)}
        placeholder="Paste your SVG code here..."
        className="w-full p-3 border rounded-md mb-4 resize-none"
        rows={6}
      ></textarea>

      {svgString && (
        <div>
          <p className="mb-2">Preview:</p>
          <div
            ref={svgContainerRef}
            className="border p-4 bg-white"
            dangerouslySetInnerHTML={{ __html: svgString }}
          ></div>
        </div>
      )}

      {previewError && (
        <p className="text-red-500 font-semibold mt-2">{previewError}</p>
      )}

      <button
        onClick={handleConvert}
        disabled={!svgString.trim()}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 disabled:opacity-50"
      >
        Convert to PNG
      </button>
    </div>
  );
}

export default SvgToPngApp;
