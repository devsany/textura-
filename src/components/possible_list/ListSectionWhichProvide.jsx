
import { NavLink } from "react-router-dom";

const ListSectionWhichProvide = () => {
  return (
    <div>
      <div className="flex flex-grow-1 flex-wrap gap-8 mt-[120px]">
        {/* svg_to_png_converter_URL */}
        {/* svg_viewer */}
        <NavLink
          to="/svg_viewer"
          className="max-w-sm mx-auto p-6 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out relative"
        >
          {/* Top-left Label */}
          <div className="absolute top-0 left-0 p-2 text-sm bg-teal-500 rounded-br-lg font-semibold text-gray-50">
            New
          </div>

          {/* Top-right Blinking Element */}
          <div className="absolute top-0 right-0 p-2 m-1 rounded-full  bg-yellow-400 text-white rounded-bl-lg animate-blink"></div>

          {/* Card Content: SVG Icon and Text */}
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            {/* SVG Icon */}
            <svg
              className="w-15 h-15 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 18V8a1 1 0 0 1 1-1h1.5l1.707-1.707A1 1 0 0 1 8.914 5h6.172a1 1 0 0 1 .707.293L17.5 7H19a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z"
              />
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>

            {/* Title Text */}
            <span className="text-2xl font-semibold text-gray-800">
              SVG Viewer
            </span>

            {/* Description Text */}
            <p className="text-sm text-gray-500">
              Convert your SVG  documents into high-quality images (JPG/PNG),
              preserving the content and layout for easy sharing and downlodable or embedding in
              other media.
            </p>
          </div>
        </NavLink>
        <NavLink
          to="/avif_to_jpg_or_png"
          className="max-w-sm mx-auto p-6 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out relative"
        >
          {/* Top-left Label */}
          <div className="absolute top-0 left-0 p-2 text-sm bg-teal-500 rounded-br-lg font-semibold text-gray-50">
            New
          </div>

          {/* Top-right Blinking Element */}
          <div className="absolute top-0 right-0 p-2 m-1 rounded-full  bg-yellow-400 text-white rounded-bl-lg animate-blink"></div>

          {/* Card Content: SVG Icon and Text */}
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            {/* SVG Icon */}
            <svg
              className="w-15 h-15 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 18V8a1 1 0 0 1 1-1h1.5l1.707-1.707A1 1 0 0 1 8.914 5h6.172a1 1 0 0 1 .707.293L17.5 7H19a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z"
              />
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>

            {/* Title Text */}
            <span className="text-2xl font-semibold text-gray-800">
              AVIF to PNG ot JPEG
            </span>

            {/* Description Text */}
            <p className="text-sm text-gray-500">
              Convert your Word documents into high-quality images (JPG/PNG),
              preserving the content and layout for easy sharing or embedding in
              other media.
            </p>
          </div>
        </NavLink>
        <NavLink
          to="/jpg_to_text"
          className="max-w-sm mx-auto p-6 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out relative"
        >
          {/* Top-left Label */}
          <div className="absolute top-0 left-0 p-2 text-sm bg-teal-500 rounded-br-lg font-semibold text-gray-50">
            Latest
          </div>

          {/* Top-right Blinking Element */}
          <div className="absolute top-0 right-0 p-2 m-1 rounded-full  bg-yellow-400 text-white rounded-bl-lg animate-blink"></div>

          {/* Card Content: SVG Icon and Text */}
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            {/* SVG Icon */}
            <svg
              className="w-15 h-15 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 18V8a1 1 0 0 1 1-1h1.5l1.707-1.707A1 1 0 0 1 8.914 5h6.172a1 1 0 0 1 .707.293L17.5 7H19a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z"
              />
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>

            {/* Title Text */}
            <span className="text-2xl font-semibold text-gray-800">
              JPG to Text
            </span>

            {/* Description Text */}
            <p className="text-sm text-gray-500">
              Converting JPG to text allows you to extract editable content from
              image files, enabling efficient data processing and analysis.
            </p>
          </div>
        </NavLink>

        <NavLink
          to="/jpg_to_png"
          className="max-w-sm mx-auto p-6 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out relative"
        >
          {/* Top-left Label */}
          <div className="absolute top-0 left-0 p-2 text-sm bg-teal-500 rounded-br-lg font-semibold text-gray-50">
            New Release
          </div>

          {/* Top-right Blinking Element */}
          <div className="absolute top-0 right-0 p-2 m-1 rounded-full  bg-yellow-400 text-white rounded-bl-lg animate-blink1"></div>

          {/* Card Content: SVG Icon and Text */}
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            {/* SVG Icon */}
            <svg
              className="w-15 h-15 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 18V8a1 1 0 0 1 1-1h1.5l1.707-1.707A1 1 0 0 1 8.914 5h6.172a1 1 0 0 1 .707.293L17.5 7H19a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z"
              />
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>

            {/* Title Text */}
            <span className="text-2xl font-semibold text-gray-800">
              JPG to PNG
            </span>

            {/* Description Text */}
            <p className="text-sm text-gray-500">
              Convert JPG to PNG for clearer images with lossless quality and
              the ability to maintain transparency, making it ideal for
              graphics, logos, and web use.
            </p>
          </div>
        </NavLink>
        <NavLink
          to="pdf_to_jpg"
          className="max-w-sm mx-auto p-6 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out relative"
        >
          {/* Top-left Label */}
          <div className="absolute top-0 left-0 p-2 text-sm bg-teal-500 rounded-br-lg font-semibold text-gray-50">
            Under Process
          </div>

          {/* Top-right Blinking Element */}
          <div className="absolute top-0 right-0 p-2 m-1 rounded-full  bg-yellow-400 text-white rounded-bl-lg animate-blink"></div>

          {/* Card Content: SVG Icon and Text */}
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            {/* SVG Icon */}
            <svg
              className="w-15 h-15 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 18V8a1 1 0 0 1 1-1h1.5l1.707-1.707A1 1 0 0 1 8.914 5h6.172a1 1 0 0 1 .707.293L17.5 7H19a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z"
              />
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>

            {/* Title Text */}
            <span className="text-2xl font-semibold text-gray-800">
              PDF to JPG
            </span>

            {/* Description Text */}
            <p className="text-sm text-gray-500">
              Convert PDF files to high-quality JPG images, making it easier to
              share, edit, or use specific pages from PDFs in image-based
              projects.
            </p>
          </div>
        </NavLink>
        <NavLink
          to="svg_to_png"
          className="max-w-sm mx-auto p-6 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out relative"
        >
          {/* Top-left Label */}
          <div className="absolute top-0 left-0 p-2 text-sm bg-teal-500 rounded-br-lg font-semibold text-gray-50">
            Latest
          </div>

          {/* Top-right Blinking Element */}
          <div className="absolute top-0 right-0 p-2 m-1 rounded-full  bg-yellow-400 text-white rounded-bl-lg animate-blink"></div>

          {/* Card Content: SVG Icon and Text */}
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            {/* SVG Icon */}
            <svg
              className="w-15 h-15 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 18V8a1 1 0 0 1 1-1h1.5l1.707-1.707A1 1 0 0 1 8.914 5h6.172a1 1 0 0 1 .707.293L17.5 7H19a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z"
              />
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>

            {/* Title Text */}
            <span className="text-2xl font-semibold text-gray-800">
              SVG to PNG
            </span>

            {/* Description Text */}
            <p className="text-sm text-gray-500">
              Convert scalable vector graphics (SVG) to PNG format, perfect for
              using high-quality images that are compatible with various
              platforms and web applications.
            </p>
          </div>
        </NavLink>
        <NavLink
          to="/text_to_pdf"
          className="max-w-sm mx-auto p-6 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out relative"
        >
          {/* Top-left Label */}
          <div className="absolute top-0 left-0 p-2 text-sm bg-teal-500 rounded-br-lg font-semibold text-gray-50">
            Latest
          </div>

          {/* Top-right Blinking Element */}
          <div className="absolute top-0 right-0 p-2 m-1 rounded-full  bg-yellow-400 text-white rounded-bl-lg animate-blink"></div>

          {/* Card Content: SVG Icon and Text */}
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            {/* SVG Icon */}
            <svg
              className="w-15 h-15 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 18V8a1 1 0 0 1 1-1h1.5l1.707-1.707A1 1 0 0 1 8.914 5h6.172a1 1 0 0 1 .707.293L17.5 7H19a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z"
              />
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>

            {/* Title Text */}
            <span className="text-2xl font-semibold text-gray-800">
              Text to PDF
            </span>

            {/* Description Text */}
            <p className="text-sm text-gray-500">
              Convert plain text documents into PDF format for easy sharing and
              consistent formatting, ensuring your content looks great across
              all devices and platforms.
            </p>
          </div>
        </NavLink>
        <NavLink
          to="/text_to_word"
          className="max-w-sm mx-auto p-6 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out relative"
        >
          {/* Top-left Label */}
          <div className="absolute top-0 left-0 p-2 text-sm bg-teal-500 rounded-br-lg font-semibold text-gray-50">
            Latest
          </div>

          {/* Top-right Blinking Element */}
          <div className="absolute top-0 right-0 p-2 m-1 rounded-full  bg-yellow-400 text-white rounded-bl-lg animate-blink"></div>

          {/* Card Content: SVG Icon and Text */}
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            {/* SVG Icon */}
            <svg
              className="w-15 h-15 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 18V8a1 1 0 0 1 1-1h1.5l1.707-1.707A1 1 0 0 1 8.914 5h6.172a1 1 0 0 1 .707.293L17.5 7H19a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z"
              />
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>

            {/* Title Text */}
            <span className="text-2xl font-semibold text-gray-800">
              Text to Word
            </span>

            {/* Description Text */}
            <p className="text-sm text-gray-500">
              Easily convert text files into Word documents, preserving
              formatting and making it simple to edit and collaborate on content
              in a widely-used, accessible format.
            </p>
          </div>
        </NavLink>
        <NavLink
          to="/text_to_html"
          className="max-w-sm mx-auto p-6 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out relative"
        >
          {/* Top-left Label */}
          <div className="absolute top-0 left-0 p-2 text-sm bg-teal-500 rounded-br-lg font-semibold text-gray-50">
            Latest
          </div>

          {/* Top-right Blinking Element */}
          <div className="absolute top-0 right-0 p-2 m-1 rounded-full  bg-yellow-400 text-white rounded-bl-lg animate-blink"></div>

          {/* Card Content: SVG Icon and Text */}
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            {/* SVG Icon */}
            <svg
              className="w-15 h-15 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 18V8a1 1 0 0 1 1-1h1.5l1.707-1.707A1 1 0 0 1 8.914 5h6.172a1 1 0 0 1 .707.293L17.5 7H19a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z"
              />
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>

            {/* Title Text */}
            <span className="text-2xl font-semibold text-gray-800">
              Text to HTML
            </span>

            {/* Description Text */}
            <p className="text-sm text-gray-500">
              Convert plain text into HTML format, allowing you to create
              structured web content with headings, links, and other HTML
              elements, ready for online use.
            </p>
          </div>
        </NavLink>
        <NavLink
          to="/text_to_csv"
          className="max-w-sm mx-auto p-6 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out relative"
        >
          {/* Top-left Label */}
          <div className="absolute top-0 left-0 p-2 text-sm bg-teal-500 rounded-br-lg font-semibold text-gray-50">
            Latest
          </div>

          {/* Top-right Blinking Element */}
          <div className="absolute top-0 right-0 p-2 m-1 rounded-full  bg-yellow-400 text-white rounded-bl-lg animate-blink"></div>

          {/* Card Content: SVG Icon and Text */}
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            {/* SVG Icon */}
            <svg
              className="w-15 h-15 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 18V8a1 1 0 0 1 1-1h1.5l1.707-1.707A1 1 0 0 1 8.914 5h6.172a1 1 0 0 1 .707.293L17.5 7H19a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z"
              />
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>

            {/* Title Text */}
            <span className="text-2xl font-semibold text-gray-800">
              Text to CSV
            </span>

            {/* Description Text */}
            <p className="text-sm text-gray-500">
              Convert plain text into a CSV (Comma-Separated Values) format,
              making it easy to organize and analyze data in spreadsheet
              applications like Excel or Google Sheets.
            </p>
          </div>
        </NavLink>
        <NavLink
          to="/csv_to_json"
          className="max-w-sm mx-auto p-6 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out relative"
        >
          {/* Top-left Label */}
          <div className="absolute top-0 left-0 p-2 text-sm bg-teal-500 rounded-br-lg font-semibold text-gray-50">
            Latest
          </div>

          {/* Top-right Blinking Element */}
          <div className="absolute top-0 right-0 p-2 m-1 rounded-full  bg-yellow-400 text-white rounded-bl-lg animate-blink"></div>

          {/* Card Content: SVG Icon and Text */}
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            {/* SVG Icon */}
            <svg
              className="w-15 h-15 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 18V8a1 1 0 0 1 1-1h1.5l1.707-1.707A1 1 0 0 1 8.914 5h6.172a1 1 0 0 1 .707.293L17.5 7H19a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z"
              />
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>

            {/* Title Text */}
            <span className="text-2xl font-semibold text-gray-800">
              CSV to JSON
            </span>

            {/* Description Text */}
            <p className="text-sm text-gray-500">
              Convert CSV (Comma-Separated Values) data into JSON (JavaScript
              Object Notation) format for easy integration with web applications
              and APIs, ensuring structured and readable data.
            </p>
          </div>
        </NavLink>
        <NavLink
          to="/csv_to_html"
          className="max-w-sm mx-auto p-6 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out relative"
        >
          {/* Top-left Label */}
          <div className="absolute top-0 left-0 p-2 text-sm bg-teal-500 rounded-br-lg font-semibold text-gray-50">
            Latest
          </div>

          {/* Top-right Blinking Element */}
          <div className="absolute top-0 right-0 p-2 m-1 rounded-full  bg-yellow-400 text-white rounded-bl-lg animate-blink"></div>

          {/* Card Content: SVG Icon and Text */}
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            {/* SVG Icon */}
            <svg
              className="w-15 h-15 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 18V8a1 1 0 0 1 1-1h1.5l1.707-1.707A1 1 0 0 1 8.914 5h6.172a1 1 0 0 1 .707.293L17.5 7H19a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z"
              />
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>

            {/* Title Text */}
            <span className="text-2xl font-semibold text-gray-800">
              CSV to HTML
            </span>

            {/* Description Text */}
            <p className="text-sm text-gray-500">
              Transform your CSV data into a clean and readable HTML table
              format, perfect for displaying datasets on webpages with easy
              customization and styling options.
            </p>
          </div>
        </NavLink>
        <NavLink
          to="/csv_to_word"
          className="max-w-sm mx-auto p-6 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out relative"
        >
          {/* Top-left Label */}
          <div className="absolute top-0 left-0 p-2 text-sm bg-teal-500 rounded-br-lg font-semibold text-gray-50">
            Latest
          </div>

          {/* Top-right Blinking Element */}
          <div className="absolute top-0 right-0 p-2 m-1 rounded-full  bg-yellow-400 text-white rounded-bl-lg animate-blink"></div>

          {/* Card Content: SVG Icon and Text */}
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            {/* SVG Icon */}
            <svg
              className="w-15 h-15 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 18V8a1 1 0 0 1 1-1h1.5l1.707-1.707A1 1 0 0 1 8.914 5h6.172a1 1 0 0 1 .707.293L17.5 7H19a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z"
              />
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>

            {/* Title Text */}
            <span className="text-2xl font-semibold text-gray-800">
              CSV to WORD
            </span>

            {/* Description Text */}
            <p className="text-sm text-gray-500">
              Convert your CSV data into a well-structured Word document, ideal
              for generating reports, summaries, or documents that require
              table-based information from your CSV files.
            </p>
          </div>
        </NavLink>
        <NavLink
          to="/csv_to_excell"
          className="max-w-sm mx-auto p-6 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out relative"
        >
          {/* Top-left Label */}
          <div className="absolute top-0 left-0 p-2 text-sm bg-teal-500 rounded-br-lg font-semibold text-gray-50">
            Latest
          </div>

          {/* Top-right Blinking Element */}
          <div className="absolute top-0 right-0 p-2 m-1 rounded-full  bg-yellow-400 text-white rounded-bl-lg animate-blink"></div>

          {/* Card Content: SVG Icon and Text */}
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            {/* SVG Icon */}
            <svg
              className="w-15 h-15 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 18V8a1 1 0 0 1 1-1h1.5l1.707-1.707A1 1 0 0 1 8.914 5h6.172a1 1 0 0 1 .707.293L17.5 7H19a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z"
              />
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>

            {/* Title Text */}
            <span className="text-2xl font-semibold text-gray-800">
              CSV to Excell
            </span>

            {/* Description Text */}
            <p className="text-sm text-gray-500">
              Easily convert your CSV files into Excel format for better data
              manipulation, analysis, and visualization, while maintaining the
              integrity of your data.
            </p>
          </div>
        </NavLink>
        <NavLink
          to="/csv_to_pdf"
          className="max-w-sm mx-auto p-6 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out relative"
        >
          {/* Top-left Label */}
          <div className="absolute top-0 left-0 p-2 text-sm bg-teal-500 rounded-br-lg font-semibold text-gray-50">
            Latest
          </div>

          {/* Top-right Blinking Element */}
          <div className="absolute top-0 right-0 p-2 m-1 rounded-full  bg-yellow-400 text-white rounded-bl-lg animate-blink"></div>

          {/* Card Content: SVG Icon and Text */}
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            {/* SVG Icon */}
            <svg
              className="w-15 h-15 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 18V8a1 1 0 0 1 1-1h1.5l1.707-1.707A1 1 0 0 1 8.914 5h6.172a1 1 0 0 1 .707.293L17.5 7H19a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z"
              />
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>

            {/* Title Text */}
            <span className="text-2xl font-semibold text-gray-800">
              CSV to PDF
            </span>

            {/* Description Text */}
            <p className="text-sm text-gray-500">
              Transform your CSV data into a professional-looking PDF document,
              ideal for reports, presentations, and sharing data in a visually
              appealing format.
            </p>
          </div>
        </NavLink>
        <NavLink
          to="/json_to_excell"
          className="max-w-sm mx-auto p-6 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out relative"
        >
          {/* Top-left Label */}
          <div className="absolute top-0 left-0 p-2 text-sm bg-teal-500 rounded-br-lg font-semibold text-gray-50">
            Latest
          </div>

          {/* Top-right Blinking Element */}
          <div className="absolute top-0 right-0 p-2 m-1 rounded-full  bg-yellow-400 text-white rounded-bl-lg animate-blink"></div>

          {/* Card Content: SVG Icon and Text */}
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            {/* SVG Icon */}
            <svg
              className="w-15 h-15 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 18V8a1 1 0 0 1 1-1h1.5l1.707-1.707A1 1 0 0 1 8.914 5h6.172a1 1 0 0 1 .707.293L17.5 7H19a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z"
              />
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>

            {/* Title Text */}
            <span className="text-2xl font-semibold text-gray-800">
              JSON to Excell
            </span>

            {/* Description Text */}
            <p className="text-sm text-gray-500">
              Convert your JSON data into Excel format for easier analysis and
              organization, allowing seamless interaction with your data using
              spreadsheets.
            </p>
          </div>
        </NavLink>
        <NavLink
          to="/json_to_word"
          className="max-w-sm mx-auto p-6 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out relative"
        >
          {/* Top-left Label */}
          <div className="absolute top-0 left-0 p-2 text-sm bg-teal-500 rounded-br-lg font-semibold text-gray-50">
            Latest
          </div>

          {/* Top-right Blinking Element */}
          <div className="absolute top-0 right-0 p-2 m-1 rounded-full  bg-yellow-400 text-white rounded-bl-lg animate-blink"></div>

          {/* Card Content: SVG Icon and Text */}
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            {/* SVG Icon */}
            <svg
              className="w-15 h-15 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 18V8a1 1 0 0 1 1-1h1.5l1.707-1.707A1 1 0 0 1 8.914 5h6.172a1 1 0 0 1 .707.293L17.5 7H19a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z"
              />
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>

            {/* Title Text */}
            <span className="text-2xl font-semibold text-gray-800">
              JSON to WORD
            </span>

            {/* Description Text */}
            <p className="text-sm text-gray-500">
              Transform your JSON data into a Word document for easy sharing,
              reporting, and presentation. Perfect for generating structured
              content from raw data.
            </p>
          </div>
        </NavLink>
        <NavLink
          to="/pptx_to_word"
          className="max-w-sm mx-auto p-6 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out relative"
        >
          {/* Top-left Label */}
          <div className="absolute top-0 left-0 p-2 text-sm bg-teal-500 rounded-br-lg font-semibold text-gray-50">
            Latest
          </div>

          {/* Top-right Blinking Element */}
          <div className="absolute top-0 right-0 p-2 m-1 rounded-full  bg-yellow-400 text-white rounded-bl-lg animate-blink"></div>

          {/* Card Content: SVG Icon and Text */}
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            {/* SVG Icon */}
            <svg
              className="w-15 h-15 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 18V8a1 1 0 0 1 1-1h1.5l1.707-1.707A1 1 0 0 1 8.914 5h6.172a1 1 0 0 1 .707.293L17.5 7H19a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z"
              />
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>

            {/* Title Text */}
            <span className="text-2xl font-semibold text-gray-800">
              Pptx to WORD
            </span>

            {/* Description Text */}
            <p className="text-sm text-gray-500">
              Convert PowerPoint presentations (PPTX) into editable Word
              documents, making it easier to extract, edit, and reuse text
              content from slides for reports or further processing.
            </p>
          </div>
        </NavLink>
        <NavLink
          to="/excel_to_csv"
          className="max-w-sm mx-auto p-6 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out relative"
        >
          {/* Top-left Label */}
          <div className="absolute top-0 left-0 p-2 text-sm bg-teal-500 rounded-br-lg font-semibold text-gray-50">
            Latest
          </div>

          {/* Top-right Blinking Element */}
          <div className="absolute top-0 right-0 p-2 m-1 rounded-full  bg-yellow-400 text-white rounded-bl-lg animate-blink"></div>

          {/* Card Content: SVG Icon and Text */}
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            {/* SVG Icon */}
            <svg
              className="w-15 h-15 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 18V8a1 1 0 0 1 1-1h1.5l1.707-1.707A1 1 0 0 1 8.914 5h6.172a1 1 0 0 1 .707.293L17.5 7H19a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z"
              />
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>

            {/* Title Text */}
            <span className="text-2xl font-semibold text-gray-800">
              Excel to CSV
            </span>

            {/* Description Text */}
            <p className="text-sm text-gray-500">
              Convert Excel spreadsheets into CSV format, allowing for easy data
              manipulation and compatibility with various applications,
              especially for importing or exporting large datasets.
            </p>
          </div>
        </NavLink>
        <NavLink
          to="/excel_to_image"
          className="max-w-sm mx-auto p-6 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out relative"
        >
          {/* Top-left Label */}
          <div className="absolute top-0 left-0 p-2 text-sm bg-teal-500 rounded-br-lg font-semibold text-gray-50">
            Latest
          </div>

          {/* Top-right Blinking Element */}
          <div className="absolute top-0 right-0 p-2 m-1 rounded-full  bg-yellow-400 text-white rounded-bl-lg animate-blink"></div>

          {/* Card Content: SVG Icon and Text */}
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            {/* SVG Icon */}
            <svg
              className="w-15 h-15 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 18V8a1 1 0 0 1 1-1h1.5l1.707-1.707A1 1 0 0 1 8.914 5h6.172a1 1 0 0 1 .707.293L17.5 7H19a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z"
              />
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>

            {/* Title Text */}
            <span className="text-2xl font-semibold text-gray-800">
              Excel to Image
            </span>

            {/* Description Text */}
            <p className="text-sm text-gray-500">
              Convert your Excel sheets into image files, preserving the layout
              and formatting of your data for easy sharing and embedding in
              presentations, documents, or websites.
            </p>
          </div>
        </NavLink>
        <NavLink
          to="/excel_to_json"
          className="max-w-sm mx-auto p-6 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out relative"
        >
          {/* Top-left Label */}
          <div className="absolute top-0 left-0 p-2 text-sm bg-teal-500 rounded-br-lg font-semibold text-gray-50">
            Latest
          </div>

          {/* Top-right Blinking Element */}
          <div className="absolute top-0 right-0 p-2 m-1 rounded-full  bg-yellow-400 text-white rounded-bl-lg animate-blink"></div>

          {/* Card Content: SVG Icon and Text */}
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            {/* SVG Icon */}
            <svg
              className="w-15 h-15 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 18V8a1 1 0 0 1 1-1h1.5l1.707-1.707A1 1 0 0 1 8.914 5h6.172a1 1 0 0 1 .707.293L17.5 7H19a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z"
              />
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>

            {/* Title Text */}
            <span className="text-2xl font-semibold text-gray-800">
              Excel to JSON
            </span>

            {/* Description Text */}
            <p className="text-sm text-gray-500">
              Easily convert your Excel data into JSON format, making it
              compatible with web applications, databases, and APIs for seamless
              data integration and manipulation.
            </p>
          </div>
        </NavLink>
        <NavLink
          to="/excel_to_html"
          className="max-w-sm mx-auto p-6 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out relative"
        >
          {/* Top-left Label */}
          <div className="absolute top-0 left-0 p-2 text-sm bg-teal-500 rounded-br-lg font-semibold text-gray-50">
            Latest
          </div>

          {/* Top-right Blinking Element */}
          <div className="absolute top-0 right-0 p-2 m-1 rounded-full  bg-yellow-400 text-white rounded-bl-lg animate-blink"></div>

          {/* Card Content: SVG Icon and Text */}
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            {/* SVG Icon */}
            <svg
              className="w-15 h-15 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 18V8a1 1 0 0 1 1-1h1.5l1.707-1.707A1 1 0 0 1 8.914 5h6.172a1 1 0 0 1 .707.293L17.5 7H19a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z"
              />
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>

            {/* Title Text */}
            <span className="text-2xl font-semibold text-gray-800">
              Excel to HTML
            </span>

            {/* Description Text */}
            <p className="text-sm text-gray-500">
              Transform your Excel spreadsheets into HTML tables for easy
              integration into websites, allowing for better presentation and
              accessibility of your data.
            </p>
          </div>
        </NavLink>
        <NavLink
          to="/excel_to_word"
          className="max-w-sm mx-auto p-6 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out relative"
        >
          {/* Top-left Label */}
          <div className="absolute top-0 left-0 p-2 text-sm bg-teal-500 rounded-br-lg font-semibold text-gray-50">
            Latest
          </div>

          {/* Top-right Blinking Element */}
          <div className="absolute top-0 right-0 p-2 m-1 rounded-full  bg-yellow-400 text-white rounded-bl-lg animate-blink"></div>

          {/* Card Content: SVG Icon and Text */}
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            {/* SVG Icon */}
            <svg
              className="w-15 h-15 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 18V8a1 1 0 0 1 1-1h1.5l1.707-1.707A1 1 0 0 1 8.914 5h6.172a1 1 0 0 1 .707.293L17.5 7H19a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z"
              />
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>

            {/* Title Text */}
            <span className="text-2xl font-semibold text-gray-800">
              Excel to Word
            </span>

            {/* Description Text */}
            <p className="text-sm text-gray-500">
              Convert your Excel spreadsheets into Word documents, preserving
              the data layout, making it easier to incorporate tables and charts
              into reports or presentations.
            </p>
          </div>
        </NavLink>
        <NavLink
          to="/excel_to_pdf "
          className="max-w-sm mx-auto p-6 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out relative"
        >
          {/* Top-left Label */}
          <div className="absolute top-0 left-0 p-2 text-sm bg-teal-500 rounded-br-lg font-semibold text-gray-50">
            Latest
          </div>

          {/* Top-right Blinking Element */}
          <div className="absolute top-0 right-0 p-2 m-1 rounded-full  bg-yellow-400 text-white rounded-bl-lg animate-blink"></div>

          {/* Card Content: SVG Icon and Text */}
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            {/* SVG Icon */}
            <svg
              className="w-15 h-15 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 18V8a1 1 0 0 1 1-1h1.5l1.707-1.707A1 1 0 0 1 8.914 5h6.172a1 1 0 0 1 .707.293L17.5 7H19a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z"
              />
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>

            {/* Title Text */}
            <span className="text-2xl font-semibold text-gray-800">
              Excel to PDF
            </span>

            {/* Description Text */}
            <p className="text-sm text-gray-500">
              Convert your Excel files into professional PDF documents,
              preserving the exact formatting, structure, and data of your
              spreadsheet for easy sharing and printing.
            </p>
          </div>
        </NavLink>
        <NavLink
          to="/word_to_pdf "
          className="max-w-sm mx-auto p-6 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out relative"
        >
          {/* Top-left Label */}
          <div className="absolute top-0 left-0 p-2 text-sm bg-teal-500 rounded-br-lg font-semibold text-gray-50">
            Latest
          </div>

          {/* Top-right Blinking Element */}
          <div className="absolute top-0 right-0 p-2 m-1 rounded-full  bg-yellow-400 text-white rounded-bl-lg animate-blink"></div>

          {/* Card Content: SVG Icon and Text */}
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            {/* SVG Icon */}
            <svg
              className="w-15 h-15 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 18V8a1 1 0 0 1 1-1h1.5l1.707-1.707A1 1 0 0 1 8.914 5h6.172a1 1 0 0 1 .707.293L17.5 7H19a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z"
              />
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>

            {/* Title Text */}
            <span className="text-2xl font-semibold text-gray-800">
              Word to PDF
            </span>

            {/* Description Text */}
            <p className="text-sm text-gray-500">
              Easily convert your Word documents into PDF format, ensuring that
              your text, images, and layout remain intact for secure and
              professional sharing.
            </p>
          </div>
        </NavLink>
        <NavLink
          to="/word_to_excel"
          className="max-w-sm mx-auto p-6 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out relative"
        >
          {/* Top-left Label */}
          <div className="absolute top-0 left-0 p-2 text-sm bg-teal-500 rounded-br-lg font-semibold text-gray-50">
            Latest
          </div>

          {/* Top-right Blinking Element */}
          <div className="absolute top-0 right-0 p-2 m-1 rounded-full  bg-yellow-400 text-white rounded-bl-lg animate-blink"></div>

          {/* Card Content: SVG Icon and Text */}
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            {/* SVG Icon */}
            <svg
              className="w-15 h-15 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 18V8a1 1 0 0 1 1-1h1.5l1.707-1.707A1 1 0 0 1 8.914 5h6.172a1 1 0 0 1 .707.293L17.5 7H19a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z"
              />
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>

            {/* Title Text */}
            <span className="text-2xl font-semibold text-gray-800">
              Word to Excell
            </span>

            {/* Description Text */}
            <p className="text-sm text-gray-500">
              Convert your Word documents into Excel spreadsheets, making it
              easy to organize, analyze, and manipulate data in tabular form.
            </p>
          </div>
        </NavLink>
        <NavLink
          to="/word_to_image"
          className="max-w-sm mx-auto p-6 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out relative"
        >
          {/* Top-left Label */}
          <div className="absolute top-0 left-0 p-2 text-sm bg-teal-500 rounded-br-lg font-semibold text-gray-50">
            Latest
          </div>

          {/* Top-right Blinking Element */}
          <div className="absolute top-0 right-0 p-2 m-1 rounded-full  bg-yellow-400 text-white rounded-bl-lg animate-blink"></div>

          {/* Card Content: SVG Icon and Text */}
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            {/* SVG Icon */}
            <svg
              className="w-15 h-15 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 18V8a1 1 0 0 1 1-1h1.5l1.707-1.707A1 1 0 0 1 8.914 5h6.172a1 1 0 0 1 .707.293L17.5 7H19a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z"
              />
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>

            {/* Title Text */}
            <span className="text-2xl font-semibold text-gray-800">
              Word to Image
            </span>

            {/* Description Text */}
            <p className="text-sm text-gray-500">
              Convert your Word documents into high-quality images (JPG/PNG),
              preserving the content and layout for easy sharing or embedding in
              other media.
            </p>
          </div>
        </NavLink>
        <NavLink
          to="/background_remover"
          className="max-w-sm mx-auto p-6 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out relative"
        >
          {/* Top-left Label */}
          <div className="absolute top-0 left-0 p-2 text-sm bg-teal-500 rounded-br-lg font-semibold text-gray-50">
            Latest
          </div>

          {/* Top-right Blinking Element */}
          <div className="absolute top-0 right-0 p-2 m-1 rounded-full  bg-yellow-400 text-white rounded-bl-lg animate-blink"></div>

          {/* Card Content: SVG Icon and Text */}
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            {/* SVG Icon */}
            <svg
              className="w-15 h-15 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 18V8a1 1 0 0 1 1-1h1.5l1.707-1.707A1 1 0 0 1 8.914 5h6.172a1 1 0 0 1 .707.293L17.5 7H19a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z"
              />
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>

            {/* Title Text */}
            <span className="text-2xl font-semibold text-gray-800">
              Background_remover
            </span>

            {/* Description Text */}
            <p className="text-sm text-gray-500">
              Convert your Word documents into high-quality images (JPG/PNG),
              preserving the content and layout for easy sharing or embedding in
              other media.
            </p>
          </div>
        </NavLink>
        {/* background_remover_and_text_editor */}
        <NavLink
          to="/background_remover_and_text_editor"
          className="max-w-sm mx-auto p-6 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out relative"
        >
          {/* Top-left Label */}
          <div className="absolute top-0 left-0 p-2 text-sm bg-teal-500 rounded-br-lg font-semibold text-gray-50">
            Latest
          </div>

          {/* Top-right Blinking Element */}
          <div className="absolute top-0 right-0 p-2 m-1 rounded-full  bg-yellow-400 text-white rounded-bl-lg animate-blink"></div>

          {/* Card Content: SVG Icon and Text */}
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            {/* SVG Icon */}
            <svg
              className="w-15 h-15 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 18V8a1 1 0 0 1 1-1h1.5l1.707-1.707A1 1 0 0 1 8.914 5h6.172a1 1 0 0 1 .707.293L17.5 7H19a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z"
              />
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>

            {/* Title Text */}
            <span className="text-2xl font-semibold text-gray-800">
              Background And Text Editor
            </span>

            {/* Description Text */}
            <p className="text-sm text-gray-500">
              Convert your Word documents into high-quality images (JPG/PNG),
              preserving the content and layout for easy sharing or embedding in
              other media.
            </p>
          </div>
        </NavLink>
      </div>
      {/* https://lottie.host/embed/efe00406-7e21-4f1d-8281-8f391f051dd8/CZlzo90eYv.lottie */}
    </div>
  );
};

export default ListSectionWhichProvide;
