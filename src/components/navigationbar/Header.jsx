import React, { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 p-4 transition-all ease-in-out duration-300 ${
          isScrolled
            ? "  bg-opacity-80 backdrop-blur-lg shadow-lg"
            : "bg-transparent bg-white"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <a
            href="#"
            className="text-2xl font-bold text-gray-800 hover:text-blue-600"
          >
            <img
              className="w-[170px]  rounded-md"
              src="/logos/logo4.png"
              alt="project_logo"
            />
          </a>

          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600">
              Home
            </a>
            <a href="#services" className="text-gray-700 hover:text-blue-600">
              Services
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white bg-opacity-90 p-4 rounded-lg shadow-md mt-4">
            <a
              href="#home"
              className="block py-2 text-gray-700 hover:text-blue-600"
            >
              Home
            </a>
            <a
              href="#services"
              className="block py-2 text-gray-700 hover:text-blue-600"
            >
              Services
            </a>
            <a
              href="#about"
              className="block py-2 text-gray-700 hover:text-blue-600"
            >
              About
            </a>
            <a
              href="#contact"
              className="block py-2 text-gray-700 hover:text-blue-600"
            >
              Contact
            </a>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
