import React, { useState } from "react";

const SvgToPngConverterURL = () => {
  const [svgUrl, setSvgUrl] = useState("");
  const [downloadUrl, setDownloadUrl] = useState("");

  const handleConvert = async () => {
    if (!svgUrl) {
      alert("Please enter a valid SVG URL!");
      return;
    }

    try {
      // Fetch the SVG content
      const response = await fetch(svgUrl, { mode: "cors" });
      if (!response.ok) {
        throw new Error(
          "Failed to fetch SVG. Please check the URL or try another file."
        );
      }
      const svgText = await response.text();

      // Create a temporary canvas
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      // Create an Image to render the SVG
      const img = new Image();
      const svgBlob = new Blob([svgText], { type: "image/svg+xml" });
      const url = URL.createObjectURL(svgBlob);

      img.onload = () => {
        // Set canvas size to match SVG dimensions
        canvas.width = img.width || 500; // Default width if none provided
        canvas.height = img.height || 500; // Default height if none provided

        // Draw SVG on the canvas
        ctx.drawImage(img, 0, 0);

        // Convert canvas to PNG
        const pngUrl = canvas.toDataURL("image/png");

        // Set the PNG URL for download
        setDownloadUrl(pngUrl);

        // Cleanup
        URL.revokeObjectURL(url);
      };

      img.onerror = () => {
        alert("Failed to load SVG. Please check the URL.");
        URL.revokeObjectURL(url);
      };

      img.src = url;
    } catch (error) {
      console.error("Error converting SVG to PNG:", error);
      alert("An error occurred while processing the SVG.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "60px" }}>
      <h1>SVG to PNG Converter</h1>
      <input
        type="text"
        placeholder="Enter SVG URL"
        value={svgUrl}
        onChange={(e) => setSvgUrl(e.target.value)}
        style={{
          width: "80%",
          padding: "10px",
          marginBottom: "20px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <br />
      <button
        onClick={handleConvert}
        style={{
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          backgroundColor: "#007bff",
          color: "white",
          cursor: "pointer",
        }}
      >
        Convert to PNG
      </button>
      <br />
      {downloadUrl && (
        <a
          href={downloadUrl}
          download="converted-image.png"
          style={{
            display: "inline-block",
            marginTop: "20px",
            textDecoration: "none",
            color: "#fff",
            backgroundColor: "#28a745",
            padding: "10px 20px",
            borderRadius: "5px",
          }}
        >
          Download PNG
        </a>
      )}
    </div>
  );
};

export default SvgToPngConverterURL;
