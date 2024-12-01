import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r  from-teal-100 via-white m-4 rounded-lg to-gray-50 shadow-lg text-white py-16 relative overflow-hidden">
      {/* Animated SVG Background */}

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Company Info */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-teal-800">About Us</h2>
            <p className="text-sm text-teal-600 mb-4">
              We are committed to providing the best services to our customers,
              focusing on innovation and excellence. Join us as we explore new
              possibilities and enhance user experiences globally.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-white hover:text-teal-400 transform transition-all duration-300"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="#"
                className="text-white hover:text-teal-400 transform transition-all duration-300"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="#"
                className="text-white hover:text-teal-400 transform transition-all duration-300"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="#"
                className="text-white hover:text-teal-400 transform transition-all duration-300"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Column 2: Links */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-teal-800">
              Quick Links
            </h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-teal-600 hover:text-teal-800 transform transition-all duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-teal-600 hover:text-teal-800 transform transition-all duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-teal-600 hover:text-teal-800 transform transition-all duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-teal-600 hover:text-teal-800 transform transition-all duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-teal-800">
              Contact Info
            </h2>
            <p className="text-sm text-teal-600 mb-4">
              <strong>Email:</strong> support@textura.com
            </p>
            <p className="text-sm text-teal-600 mb-4">
              <strong>Phone:</strong> +1 (123) 456-7890
            </p>
            <p className="text-sm text-teal-600 mb-4">
              <strong>Address:</strong> 123 Textura St, Suite 456, City, Country
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-teal-800 pt-6">
          <p className="text-center text-sm text-teal-900">
            &copy; 2024 Textura. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
