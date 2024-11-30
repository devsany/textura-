import React, { useState } from "react";

const OurServices = () => {
  const [position, setPosition] = useState({ x: 49, y: 49 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setPosition({ x, y });
  };

  return (
    <div className="flex justify-around items-center">
      <div>
        <iframe
          className="   rounded-lg p-6 cursor-pointer relative transform transition-all duration-300 ease-out"
          onMouseMove={handleMouseMove}
          style={{
            transform: `perspective(1000px) rotateX(${
              (position.y - 50) / 2
            }deg) rotateY(${(position.x - 50) / 2}deg)  `,
          }}
          width="600"
          height="700"
          src="https://lottie.host/embed/34584c21-4908-4c2b-84ea-4f2a301d7d2b/1pC5mKixkf.lottie"
        ></iframe>
      </div>
      <div>
        <div className="max-w-screen-lg mx-auto mt-16 ">
          <h2 className="text-4xl font-semibold text-center text-gray-800 mb-12">
            How the App Works
          </h2>

          {/* <!-- Step 1: Upload a Document --> */}
          <div className="flex items-center justify-between bg-white p-6 rounded-xl shadow-lg mb-8">
            <div className="flex items-center space-x-4">
              {/* <!-- Upload SVG Icon --> */}
              <svg
                className="w-16 h-16 text-indigo-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
              <div>
                <h3 className="text-2xl font-medium text-gray-800">
                  Step 1: Upload a Document
                </h3>
                <p className="text-gray-500">
                  Upload a document (PDF or Image) to start the extraction
                  process.
                </p>
              </div>
            </div>
          </div>

          {/* <!-- Step 2: Text Extraction Begins --> */}
          <div className="flex items-center justify-between bg-white p-6 rounded-xl shadow-lg mb-8">
            <div className="flex items-center space-x-4">
              {/* <!-- Document Processing SVG Icon --> */}
              <svg
                className="w-16 h-16 text-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6h6"
                />
              </svg>
              <div>
                <h3 className="text-2xl font-medium text-gray-800">
                  Step 2: Text Extraction Begins
                </h3>
                <p className="text-gray-500">
                  Watch as the document is processed and text is extracted in
                  real time.
                </p>
              </div>
            </div>
          </div>

          {/* <!-- Step 3: View and Edit Extracted Text --> */}
          <div className="flex items-center justify-between bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center space-x-4">
              {/* <!-- Edit Text SVG Icon --> */}
              <svg
                className="w-16 h-16 text-green-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 5h9m-9 4h9m-9 4h9m-9 4h9m-9 4h9"
                />
              </svg>
              <div>
                <h3 className="text-2xl font-medium text-gray-800">
                  Step 3: View and Edit Extracted Text
                </h3>
                <p className="text-gray-500">
                  Edit and save the extracted text for further use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
