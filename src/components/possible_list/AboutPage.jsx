import React, { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const AboutPage = () => {
  const [position, setPosition] = useState({ x: 49, y: 49 });
  const [showBlur, setShowBlur] = useState(true); // State to toggle background blur
  const logos = [
    "https://media.istockphoto.com/id/1466153678/photo/shield-concept-3d-rendering-shield-with-check-mark.webp?b=1&s=612x612&w=0&k=20&c=LU7ATzqwLpSoZ-gOcUZuvtlY7uXwaUkmNizAb60i6OU=", // LinkedIn
    "https://cdn.pixabay.com/photo/2023/03/06/13/58/logo-7833520_640.png", // Amazon
    "https://cdn.pixabay.com/photo/2023/03/06/13/58/logo-7833521_640.png", // Google
    "https://cdn.pixabay.com/photo/2015/05/22/19/01/business-779542_640.jpg", // Apple
    "https://img.freepik.com/free-vector/indonesian-halal-logo-new-branding-2022_17005-1495.jpg?semt=ais_hybrid", // Netflix
    "https://img.freepik.com/free-vector/gradient-quill-pen-logo-with-tagline-template_23-2149813051.jpg?ga=GA1.1.531472918.1726312312&semt=ais_hybrid", // Discord
    "https://img.freepik.com/free-vector/pink-blue-abstract-logo_1222-54.jpg?ga=GA1.1.531472918.1726312312&semt=ais_hybrid", // Adobe Illustrator
    "https://img.freepik.com/free-vector/abstract-logo-flame-shape_1043-44.jpg?ga=GA1.1.531472918.1726312312&semt=ais_hybrid", // Twitter
    "https://img.freepik.com/free-vector/quill-pen-logo-template_23-2149852432.jpg?ga=GA1.1.531472918.1726312312&semt=ais_hybrid", // Spotify
    "https://img.freepik.com/premium-vector/initials-law-firm-logo-with-letter-cb_678577-91.jpg?ga=GA1.1.531472918.1726312312&semt=ais_hybrid", // Facebook
  ];
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ rotateX: 0, rotateY: 0 });
  };
  return (
    <div className="bg-gradient-to-r from-slate-50 via-slate to-slate-50 text-gray-800 p-8 md:p-16">
      {/* Section Header */}
      <div
        // onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        style={{
          transform: `perspective(1000px) rotateX(${
            (position.y - 50) / 2
          }deg) rotateY(${(position.x - 50) / 2}deg)  `,
        }}
        className="relative min-h-screen   flex items-center justify-center bg-teal-50  rounded-2xl mt-[50px] "
      >
        {/* Blurred Background Elements */}
        <div
          className="absolute top-10 left-20 md:w-96 md:h-96 w-46 h-46 bg-blue-300 rounded-full blur-3xl opacity-100"
          style={{ zIndex: -1 }}
        ></div>
        <div
          className="absolute bottom-20 right-40 w-72 h-72 bg-teal-400 rounded-full blur-2xl opacity-100"
          style={{ zIndex: -1 }}
        ></div>
        <div
          className="absolute top-1/3 left-1/3 w-36 h-36 bg-purple-300 rounded-full blur-2xl opacity-100"
          style={{ zIndex: -1 }}
        ></div>

        {/* Tilted Content Section */}
        <motion.div className="relative bg-white/80 backdrop-blur-lg p-10 rounded-xl shadow-2xl max-w-4xl text-center transition-transform duration-300">
          <h1 className="text-5xl font-bold text-gradient bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-6">
            Welcome to Textura
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700 leading-relaxed">
            Textura is your ultimate tool for extracting text from images and
            scanned documents. Experience seamless text recognition and
            efficient document management powered by cutting-edge OCR
            technology.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Upload & Extract",
                desc: "Upload images or documents and extract text instantly.",
              },
              {
                title: "Edit & Search",
                desc: "Refine extracted text and search for specific terms.",
              },
              {
                title: "Save & Download",
                desc: "Save results in various formats and download instantly.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-4 bg-gradient-to-b from-gray-100 to-gray-50 rounded-lg shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.1 }}
              >
                <h2 className="text-2xl font-semibold text-teal-600">
                  {item.title}
                </h2>
                <p className="mt-2 text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      {/* Content Section */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center items-center text-center md:text-left"
        >
          <h2 className="text-3xl font-semibold">Our Mission</h2>
          <p className="text-lg md:text-xl mb-8 text-gray-700 leading-relaxed">
            We strive to craft impactful solutions that transform ideas into
            reality by blending innovation, design, and technology.
          </p>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <img
            src="/herosection image/Wave@1x-10.0s-1366px-641px.png"
            alt="Team"
            className="rounded-lg shadow-lg w-full"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.2,
              delay: 0.4,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute inset-0 bg-teal-100 opacity-20 rounded-lg"
          >
            {/* <iframe
              width="600"
              height="260"
              src="https://lottie.host/embed/276d79a3-a631-4ef6-89b9-fb098f058190/T6Jk6alWSu.lottie"
            ></iframe> */}
          </motion.div>
        </motion.div>
      </div>

      {/* Additional Details */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-16 text-center"
      >
        <h2 className="text-5xl font-bold text-gradient bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-6">
          What Makes Us Unique
        </h2>
        <p className="text-lg md:text-xl mb-8 text-gray-700 leading-relaxed">
          Discover the core values that set us apart from the competition.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              title: "Customer First",
              description: "We prioritize our customers above all else.",
              icon: "https://img.icons8.com/ios/452/customer-support.png",
            },
            {
              title: "Global Reach",
              description: "Solutions designed to cater to a global audience.",
              icon: "https://img.icons8.com/ios/452/globe.png",
            },
            {
              title: "Sustainability",
              description: "We are committed to eco-friendly practices.",
              icon: "https://img.icons8.com/ios/452/leaf.png",
            },
            {
              title: "Innovation",
              description:
                "Constantly evolving and integrating the latest technologies.",
              icon: "https://img.icons8.com/ios/452/innovation.png",
            },
            {
              title: "Integrity",
              description:
                "We uphold the highest standards of transparency and trust.",
              icon: "https://img.icons8.com/ios/452/handshake.png",
            },
            {
              title: "Excellence",
              description:
                "We deliver excellence in every aspect of our business.",
              icon: "https://img.icons8.com/ios/452/star.png",
            },
            {
              title: "Collaboration",
              description:
                "We foster strong partnerships to achieve greater success.",
              icon: "https://img.icons8.com/ios/452/teamwork.png",
            },
            {
              title: "Adaptability",
              description:
                "We stay flexible, responding quickly to market and customer needs.",
              icon: "https://img.icons8.com/ios/452/gear.png",
            },
            {
              title: "Quality",
              description:
                "We ensure the highest quality in our products and services.",
              icon: "https://img.icons8.com/ios/452/hand.png",
            },
            {
              title: "Customer Support",
              description:
                "Our dedicated support team is here to assist you 24/7.",
              icon: "https://img.icons8.com/ios/452/headset.png",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="relative bg-teal-100 text-teal-700 shadow-xl rounded-lg p-8 hover:scale-105 transform transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="absolute inset-0 bg-black opacity-10 blur-lg rounded-lg"></div>
              <div className="absolute inset-0 backdrop-blur-sm bg-slate-50 opacity-80 rounded-lg"></div>
              <div className="absolute rounded-full blur-xl bg-purple-500 bg-opacity-30 w-[100px] h-[100px] backdrop-blur-md"></div>

              <div className="relative z-10 flex items-center justify-center mb-4">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-16  h-16 object-contain hover:text-teal-600 transition-all duration-300"
                />
              </div>
              <div className="absolute rounded-full blur-2xl ml-[200px] bg-yellow-500 bg-opacity-30 w-[100px] h-[100px] backdrop-blur-md"></div>
              <h3 className="relative z-10 text-2xl font-semibold text-teal-600">
                {feature.title}
              </h3>
              <p className="relative z-10 mt-2 text-lg font-semibold text-slate-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Values Section */}

      {/* Testimonials Section */}
      <div className="relative overflow-hidden py-8">
        {/* Title */}
        <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">
          Our Trusted Partners
        </h2>

        {/* Logo Carousel */}
        <motion.div
          className="flex gap-10"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 30, // Duration of one full loop
            ease: "linear",
          }}
        >
          {/* Duplicating the logos to ensure infinite scroll */}
          <div className="flex">
            {logos.map((logo, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-24 m-10 h-24 flex items-center justify-center transition-transform duration-300"
                whileHover={{ scale: 1.1 }} // Adds slight zoom effect on hover
              >
                <img
                  src={logo}
                  alt={`logo-${index}`}
                  className="w-full h-full object-contain transition-all duration-300 filter grayscale hover:filter-none"
                />
              </motion.div>
            ))}
          </div>

          {/* Duplicating the logos again for seamless scroll */}
          <div className="flex">
            {logos.map((logo, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-24 m-10 h-24 flex items-center justify-center transition-transform duration-300"
                whileHover={{ scale: 1.1 }} // Adds slight zoom effect on hover
              >
                <img
                  src={logo}
                  alt={`logo-${index}`}
                  className="w-full h-full object-contain transition-all duration-300 filter grayscale hover:filter-none"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-16 text-center"
      >
        <h2 className="text-3xl font-semibold">
          Join us on this incredible journey!
        </h2>
        <NavLink to="/contact">
          <button className="mt-6 px-6 py-3 bg-gradient-to-r from-teal-400 to-blue-500 text-white font-semibold rounded-full shadow-md hover:shadow-xl transition-all">
            Contact Us
          </button>
        </NavLink>
      </motion.div>
    </div>
  );
};

export default AboutPage;
