import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import SelectBox from "../possible_list/SelectBox";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (event) => {
    const selectedPath = event.target.value;
    if (selectedPath) {
      navigate(selectedPath); // Navigate to the selected path
    }
  };
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

  const toggleSelectBox = () => {
    setIsExpanded((prev) => !prev);
  };
  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 p-4 transition-all ease-in-out duration-300 ${
          isScrolled
            ? "  bg-opacity-80 backdrop-blur-lg shadow-lg"
            : "bg-transparent bg-white"
        }`}
      >
        <div className=" flex md:contents justify-between items-center  md:justify-center  items-centre">
          <div className="md:grid md:grid-cols-12">
            <div className="col-span-3 flex justify-center items-center  ">
              {" "}
              <NavLink
                to="/"
                className="text-2xl font-bold text-gray-800 hover:text-blue-600"
              >
                <img
                  className="w-[170px]  rounded-md"
                  src="/logos/logo4.png"
                  alt="project_logo"
                />
              </NavLink>
            </div>
            <div className="col-span-5  md:flex   hidden justify-center items-center">
              <div
                className={`transition-all  duration-300 ease-in-out bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg ${
                  isExpanded ? "w-full p-2" : "w-1/3 p-2"
                }`}
              >
                <select
                  onChange={handleNavigation}
                  id="countries"
                  onClick={toggleSelectBox}
                  className="bg-transparent focus:outline-none block w-full"
                >
                  <option selected>Choose a the formate to conversion</option>
                  <option value="/background_remover">
                    Background Remover
                  </option>
                  <option value="/background_remover_and_text_editor">
                    Background Remover and Text Editor
                  </option>
                  <option value="/avif_to_jpg_or_png">
                    AVIF to PNG or JPEG
                  </option>
                  <option value="/jpg_to_text">JPG to Text</option>
                  <option value="/jpg_to_png">JPG to PNG</option>
                  <option value="/json_to_excell">JSON to Excell</option>
                  <option value="/json_to_word">JSON to Word</option>
                  <option value="/text_to_pdf">Text to PDF</option>
                  <option value="/text_to_word">Text to Word</option>
                  <option value="/text_to_html">Text to HTML</option>
                  <option value="/text_to_csv">Text to CSV</option>
                  <option value="/csv_to_json">CSV to JSON</option>
                  <option value="/csv_to_html">CSV to HTML</option>
                  <option value="/csv_to_word">CSV to Word</option>
                  <option value="/csv_to_excell">CSV to Excell</option>
                  <option value="/csv_to_pdf">CSV to PDF</option>
                  <option value="/excel_to_csv">Excell to CSV</option>
                  <option value="/excel_to_json">Excell to JSON</option>
                  <option value="/excel_to_html">Excell to HTML</option>
                  <option value="/excel_to_word">Excell to Word</option>
                  <option value="/excel_to_pdf">Excell to PDF</option>
                  <option value="/excel_to_image">Excel to Image</option>
                  <option value="/word_to_pdf">Word to PDF</option>
                  <option value="/word_to_excel">Word to Excel</option>
                  <option value="/word_to_image">Word to Image</option>
                  <option value="/svg_to_png">SVG to PNG</option>
                  <option value="/pdf_to_jpg">PDF to JPG</option>
                  <option
                    className="hover:bg-blue-100 px-2 py-1 rounded"
                    value="/pptx_to_word"
                  >
                    PPTX to Word
                  </option>
                </select>
              </div>
            </div>
            <div className="col-span-4  flex justify-center items-center">
              {" "}
              <div className="hidden md:flex space-x-8">
                <NavLink to="/" className="text-gray-700 hover:text-blue-600">
                  Home
                </NavLink>
                <NavLink
                  to="/editor"
                  className="text-gray-700 hover:text-blue-600"
                >
                  Editor
                </NavLink>
                <NavLink
                  to="/about"
                  className="text-gray-700 hover:text-blue-600"
                >
                  About
                </NavLink>
                <NavLink
                  to="/contact"
                  className="text-gray-700 hover:text-blue-600"
                >
                  Contact
                </NavLink>
              </div>
            </div>
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
            <NavLink
              to="/"
              className="block py-2 text-gray-700 hover:text-blue-600"
            >
              Home
            </NavLink>
            <NavLink
              to="/editor"
              className="block py-2 text-gray-700 hover:text-blue-600"
            >
              Editor
            </NavLink>
            <NavLink
              to="/about"
              className="block py-2 text-gray-700 hover:text-blue-600"
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className="block py-2 text-gray-700 hover:text-blue-600"
            >
              Contact
            </NavLink>
            <div
              className={`transition-all duration-300 ease-in-out bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg ${
                isExpanded ? "w-full p-3" : "w-1/3 p-2"
              }`}
            >
              <select
                id="countries"
                onClick={toggleSelectBox}
                className="bg-transparent focus:outline-none block w-full"
              >
                <option selected>Choose a country</option>
                {/* background_remover_and_text_editor */}
                <option value="/background_remover">Background Remover</option>
                <option value="/background_remover_and_text_editor">
                  Background Remover and Text Editor
                </option>
                <option value="/jpg_to_text">JPG to Text</option>
                <option value="/jpg_to_png">JPG to PNG</option>
                <option value="/json_to_excell">JSON to Excell</option>
                <option value="/json_to_word">JSON to Word</option>
                <option value="/text_to_pdf">Text to PDF</option>
                <option value="/text_to_word">Text to Word</option>
                <option value="/text_to_html">Text to HTML</option>
                <option value="/text_to_csv">Text to CSV</option>
                <option value="/csv_to_json">CSV to JSON</option>
                <option value="/csv_to_html">CSV to HTML</option>
                <option value="/csv_to_word">CSV to Word</option>
                <option value="/csv_to_excell">CSV to Excell</option>
                <option value="/csv_to_pdf">CSV to PDF</option>
                <option value="/excel_to_csv">Excell to CSV</option>
                <option value="/excel_to_json">Excell to JSON</option>
                <option value="/excel_to_html">Excell to HTML</option>
                <option value="/excel_to_word">Excell to Word</option>
                <option value="/excel_to_pdf">Excell to PDF</option>
                <option value="/excel_to_image">Excel to Image</option>
                <option value="/word_to_pdf">Word to PDF</option>
                <option value="/word_to_excel">Word to Excel</option>
                <option value="/word_to_image">Word to Image</option>
                <option value="/svg_to_png">SVG to PNG</option>
                <option value="/pdf_to_jpg">PDF to JPG</option>
                <option value="/pptx_to_word">PPTX to Word</option>
              </select>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
