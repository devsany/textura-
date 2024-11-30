import React, { useRef, useState } from "react";
import Tesseract from "tesseract.js"; //#endregion#

const JpgToText = () => {
  const [image, setImage] = useState(null);
  const [text, setText] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  // Handle file upload
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Display the uploaded image
    }
  };

  // Handle text extraction from the image
  const handleTextExtraction = () => {
    if (!image) return;

    setIsProcessing(true);

    // Use Tesseract.js for OCR
    Tesseract.recognize(
      image,
      "eng", // Language code, you can change based on the language
      {
        logger: (m) => console.log(m), // Logs the progress
      }
    )
      .then(({ data: { text } }) => {
        setText(text); // Set extracted text
        setIsProcessing(false); // Stop processing
      })
      .catch((error) => {
        console.error("Error during OCR:", error);
        setIsProcessing(false);
      });
  };

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
  const paragraphRef = useRef(null);

  const copyToClipboard = () => {
    const text = paragraphRef.current.innerText; // Get the text content of the paragraph
    navigator.clipboard.writeText(text).then(() => {
      alert("Paragraph copied to clipboard!");
    });
  };
  return (
    <div className="ocr-container">
      <div className="grid grid-cols-12 mt-[50px]">
        <div className="col-span-9">
          {" "}
          {/* image section */}
          <div>
            <h1 className="text-center font-semibold text-2xl text-teal-400">
              Text Extraction from Image
            </h1>
            {image && (
              <div className="h-[400px] bg-teal-100 m-4 rounded-lg border-slate-500 border-dotted border-2  flex items-center">
                <img
                  src={image}
                  alt="Uploaded"
                  style={{
                    width: "100%",
                    maxHeight: "300px",
                    objectFit: "contain",
                  }}
                />
              </div>
            )}
            {text && (
              <div>
                <div className="pl-3 pr-3">
                  <hr />
                </div>
                <div className="flex justify-between pt-3 pl-3 pr-3">
                  <div className="">
                    <h3 className="font-semibold text-2xl">Extracted Text:</h3>
                  </div>
                  <div className="">
                    <div>
                      <button
                        onClick={copyToClipboard}
                        className="px-4 py-2 text-white bg-purple-300 transition-all duration-300 ease-in-out  rounded-md hover:shadow-purple-400 hover:shadow  hover:bg-purple-500 focus:outline-none"
                      >
                        <div className="flex gap-3">
                          <div>
                            <svg
                              className="w-6 h-6 text-white   dark:text-white"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke="currentColor"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M14 4v3a1 1 0 0 1-1 1h-3m4 10v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2m11-3v10a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1V7.87a1 1 0 0 1 .24-.65l2.46-2.87a1 1 0 0 1 .76-.35H18a1 1 0 0 1 1 1Z"
                              />
                            </svg>
                          </div>
                          <div className="text-white ">Copy Text</div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="p-3">
                    {" "}
                    <p
                      className="font-thin text-sm bg-purple-200 border-slate-500 rounded-md p-2 border-2 border-dotted"
                      ref={paragraphRef}
                    >
                      {text}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="col-span-3  h-[500px]">
          {/* input box and drag and drop section */}

          {/* try */}
          <div className=" flex items-center justify-center min-h-[90%] p-4 bg-teal-50">
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
                accept="image/*"
                className="hidden"
                onChange={handleFileUpload}
              />
              {file && (
                <p className="text-center text-sm text-gray-700">
                  Selected File: {file.name}
                </p>
              )}
            </div>
          </div>
          <button
            onClick={handleTextExtraction}
            disabled={isProcessing || !image}
            className="w-full bg-teal-100 mt-3 pt-1 pb-1 cursor-pointer hover:bg-teal-500 hover:text-white  p-1 rounded-md font-semibold text-slate-500"
          >
            {isProcessing ? (
              <>
                <button
                  type="button"
                  className=" inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent   text-white   focus:outline-none focus:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                >
                  <span
                    className="animate-spin inline-block size-4 border-[3px] border-current border-t-transparent text-white rounded-full"
                    role="status"
                    aria-label="loading"
                  ></span>
                  Loading ...
                </button>
              </>
            ) : (
              "Extract Text"
            )}
          </button>

          <div>{/* button to extract*/}</div>
        </div>
      </div>
    </div>
  );
};

export default JpgToText;
