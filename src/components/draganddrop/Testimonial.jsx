import React from "react";
import { Draggable } from "react-draggable";

const Testimonial = () => {
  return (
    <div>
      <Draggable>
        <div className="w-full max-w-md p-6 bg-white border rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out">
          {/* Testimonial Content */}
          <div className="text-center mb-4">
            <p className="text-lg font-semibold text-gray-800">
              "This tool has completely transformed the way I work. From
              converting JPG to Text for extracting content to the seamless file
              conversions like PDF to JPG, Text to Word, and more, it’s made
              everything more efficient and streamlined."
            </p>
          </div>

          {/* Author Name */}
          <div className="text-center">
            <p className="text-sm font-medium text-gray-600">— Jane Smith</p>
            <p className="text-xs text-gray-500">Freelance Data Analyst</p>
          </div>
        </div>
      </Draggable>
    </div>
  );
};

export default Testimonial;
