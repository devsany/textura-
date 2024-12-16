import React, { useState } from "react";

const SvgToImageAndDownload = () => {
  const [file, setFile] = useState(null);
  const [pngUrl, setPngUrl] = useState(null);
  const [svgCode, setSvgCode] = useState("");
  const [error, setError] = useState(null);
  const [fileName, setFileName] = useState("converted-image"); // Default file name for image

  // Handle file input change
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.type === "image/svg+xml") {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onload = (e) => {
        setSvgCode(e.target.result);
        setError(null); // Clear any previous errors
      };
      reader.readAsText(selectedFile);
    } else {
      setError("Please select a valid SVG file.");
    }
  };

  // Handle file name input change
  const handleFileNameChange = (event) => {
    setFileName(event.target.value);
  };

  // Convert SVG to image (PNG, JPG, WebP)
  const convertSvgToImage = (format) => {
    if (!file) {
      setError("Please upload an SVG file first.");
      return;
    }

    setError(null);
    setPngUrl(null);

    const reader = new FileReader();
    reader.onload = (e) => {
      const svgText = e.target.result;

      // Create a hidden canvas to draw the SVG
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const img = new Image();

      img.onload = () => {
        // Set canvas size to match image size
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        // Convert canvas to selected image format (PNG, JPG, or WebP)
        const imageDataUrl = canvas.toDataURL(`image/${format}`);
        setPngUrl(imageDataUrl);
      };

      img.onerror = () => {
        setError(
          "Error rendering the SVG. Please check if it is a valid SVG file."
        );
      };

      // Set the SVG as the source of the image
      const base64Svg = `data:image/svg+xml;base64,${btoa(svgText)}`;
      img.src = base64Svg;
    };

    reader.onerror = () => {
      setError("Failed to read the SVG file.");
    };

    reader.readAsText(file);
  };

  // Copy SVG code to clipboard
  const copyCodeToClipboard = () => {
    navigator.clipboard.writeText(svgCode).then(() => {
      alert("SVG code copied to clipboard!");
    });
  };

  return (
    <div className="container mt-[120px] border mx-auto p-6 sm:p-12 max-w-xl bg-white shadow-lg rounded-lg overflow-hidden">
      {/* <?xml version="1.0" ?> */}

      {/* <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --> */}

      <h1 className="text-3xl font-semibold mb-6 text-center text-blue-600">
        SVG to Image Converter
      </h1>
      <p className="text-lg text-gray-700 text-center mb-6">
        Convert your SVG file into an image (PNG, JPG, or WebP) and also
        download or copy the SVG code.
      </p>

      {/* File Input Section */}
      <div className="mb-6">
        <label
          htmlFor="svgFile"
          className="block text-lg text-gray-800 font-medium mb-2"
        >
          Upload your SVG file
        </label>
        <input
          type="file"
          id="svgFile"
          accept=".svg"
          onChange={handleFileChange}
          className="block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {error && <p className="mt-2 text-red-600 text-center">{error}</p>}
      </div>

      {/* File Name Input Section */}
      {pngUrl && (
        <div className="mb-6">
          <label
            htmlFor="fileName"
            className="block text-lg text-gray-800 font-medium mb-2"
          >
            Enter file name for download:
          </label>
          <input
            type="text"
            id="fileName"
            value={fileName}
            onChange={handleFileNameChange}
            className="block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., my-svg-image"
          />
        </div>
      )}

      {/* Conversion Buttons Section */}
      <div className="mb-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <button
          onClick={() => convertSvgToImage("png")}
          className="bg-blue-600 text-white w-full py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Convert to PNG
        </button>
        <button
          onClick={() => convertSvgToImage("jpeg")}
          className="bg-green-600 text-white w-full py-3 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Convert to JPG
        </button>
        <button
          onClick={() => convertSvgToImage("webp")}
          className="bg-purple-600 text-white w-full py-3 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          Convert to WebP
        </button>
      </div>

      {/* Image Preview and Download Section */}
      {pngUrl && (
        <div className="mt-6 text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Converted Image Preview
          </h2>
          <img
            src={pngUrl}
            alt="Converted Image"
            className="max-w-full h-auto rounded-lg border border-gray-300 mb-4"
          />
          <a
            href={pngUrl}
            download={`${fileName}.${pngUrl.split(";")[0].split("/")[1]}`} // Dynamic file extension
            className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Download Image
          </a>
        </div>
      )}

      {/* SVG Code Preview and Download Section */}
      {svgCode && (
        <div className="mt-8 text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            SVG Code Preview
          </h2>
          <div className="bg-gray-800 text-white p-6 rounded-lg overflow-x-auto mb-4 max-h-60 overflow-y-auto">
            <pre className="whitespace-nowrap">{svgCode}</pre>
          </div>
          <div className="flex justify-center gap-6">
            <button
              onClick={copyCodeToClipboard}
              className="bg-yellow-600 text-white py-2 px-6 rounded-lg hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              Copy SVG Code
            </button>
            <a
              href={`data:image/svg+xml;base64,${btoa(svgCode)}`}
              download={`${fileName}.svg`}
              className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Download SVG Code
            </a>
          </div>
        </div>
      )}

      <p className="text-center text-sm text-gray-500 mt-8">
        Made with ❤️ using React and TailwindCSS. Convert SVG files
        effortlessly!
      </p>
    </div>
  );
};

export default SvgToImageAndDownload;
