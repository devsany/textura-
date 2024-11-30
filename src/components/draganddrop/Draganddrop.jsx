import React, { useState } from "react";

const DragAndDrop = () => {
  const [file, setFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  // Handle file drop
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const files = e.dataTransfer.files;
    if (files && files[0]) {
      setFile(files[0]);
    }
  };

  // Handle file selection
  const handleChange = (e) => {
    const files = e.target.files;
    if (files && files[0]) {
      setFile(files[0]);
    }
  };

  // Handle drag events
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div
        className={`flex flex-col items-center justify-center w-96 h-48 p-4 bg-white border-2 ${
          dragActive ? "border-blue-500" : "border-gray-300"
        } border-dashed rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out`}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
        onClick={() => document.getElementById("fileInput").click()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 text-gray-400 mb-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4 3a2 2 0 012-2h8a2 2 0 012 2v1h-2V3H6v1H4V3zM4 7h12v2h-1v7H5v-7H4V7zM8 14a1 1 0 11-2 0 1 1 0 012 0zm5 1a1 1 0 10-2 0 1 1 0 002 0z"
            clipRule="evenodd"
          />
        </svg>
        <p className="text-gray-500 text-sm mb-2">
          Drag & drop a file here, or
        </p>
        <p className="text-blue-600 text-sm font-medium cursor-pointer hover:underline">
          browse
        </p>
        <input
          id="fileInput"
          type="file"
          className="hidden"
          onChange={handleChange}
        />
      </div>

      {file && (
        <div className="mt-4">
          <p className="text-gray-700">Selected File: {file.name}</p>
        </div>
      )}
    </div>
  );
};

export default DragAndDrop;
