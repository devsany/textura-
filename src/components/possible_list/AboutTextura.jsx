import React from "react";
import { NavLink } from "react-router-dom";

const AboutTextura = () => {
  return (
    <section className="relative m-4 rounded-lg shadow-md  bg-gradient-to-r from-teal-50 via-white to-teal-100 py-20 px-6 overflow-hidden">
      {/* SVG Curves */}
      <div className="absolute top-0 left-0 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="h-100"
        >
          <path
            fill="url(#tealGradient)"
            fillOpacity="1"
            d="M0,96L80,122.7C160,149,320,203,480,213.3C640,224,800,192,960,170.7C1120,149,1280,139,1360,133.3L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
          <defs>
            <linearGradient id="tealGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#90E4C1" />
              <stop offset="100%" stopColor="#90E4C1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="absolute bottom-0 right-0 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="h-100"
        >
          <path
            fill="url(#tealGradient2)"
            fillOpacity="0.7"
            d="M0,160L80,149.3C160,139,320,117,480,138.7C640,160,800,224,960,245.3C1120,267,1280,245,1360,213.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
          <defs>
            <linearGradient id="tealGradient2" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#90E4C1" />
              <stop offset="100%" stopColor="#90E4C1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Floating Divs */}
      <div className="absolute w-28 mt-20 h-28 bg-gradient-to-r from-teal-300 to-teal-400 rounded-full top-1/3 left-1/4 animate-pulse shadow-lg"></div>
      <div className="absolute w-40 h-40  mt-20 bg-gradient-to-r from-teal-100 to-teal-200 rounded-full top-10 right-10 opacity-50 animate-spin-slow"></div>

      {/* Content Section */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <div className="absolute w-[100px] h-[100px] mt-20   bg-gradient-to-r from-teal-200 to-teal-300 rounded-full bottom-1/4 right-1/4 animate-bounce shadow-lg"></div>
        <h2 className="text-5xl md:text-white text-teal-900 font-extrabold text-transparent bg-clip-text">
          Meet <span className="md:text-white text-teal-900">Textura</span>
        </h2>
        <p className="mt-4 text-xl text-teal-00 font-thin">
          Textura is the perfect platform for extracting and managing document
          text with precision, simplicity, and style.
        </p>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="p-6 bg-white shadow-lg rounded-lg transform transition-transform hover:scale-105">
            <h3 className="text-xl font-semibold text-teal-600">
              📄 Advanced Extraction
            </h3>
            <p className="text-gray-600 mt-2">
              Extract and process text from documents in a single click.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg transform transition-transform hover:scale-105">
            <h3 className="text-xl font-semibold text-teal-600">
              🌈 Beautiful UI
            </h3>
            <p className="text-gray-600 mt-2">
              Sleek, modern, and fully responsive designs tailored for everyone.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg transform transition-transform hover:scale-105">
            <h3 className="text-xl font-semibold text-teal-600">
              🚀 Lightning Speed
            </h3>
            <p className="text-gray-600 mt-2">
              Experience seamless performance across all devices.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg transform transition-transform hover:scale-105">
            <h3 className="text-xl font-semibold text-teal-600">
              🔒 Trusted Security
            </h3>
            <p className="text-gray-600 mt-2">
              Your data is encrypted and protected at all times.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg transform transition-transform hover:scale-105">
            <h3 className="text-xl font-semibold text-teal-600">
              📊 Analytics Ready
            </h3>
            <p className="text-gray-600 mt-2">
              Gain insights with our intuitive reporting tools.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg transform transition-transform hover:scale-105">
            <h3 className="text-xl font-semibold text-teal-600">
              🤝 Community Support
            </h3>
            <p className="text-gray-600 mt-2">
              Collaborate and connect with our growing community.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="pt-10">
          <button className="px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-700 text-white rounded-full font-semibold shadow-lg hover:bg-gradient-to-r hover:from-teal-700 hover:to-teal-500 transform transition-transform duration-300 hover:scale-105">
            <NavLink to="/" className="mt-12">
              Explore Textura
            </NavLink>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutTextura;
