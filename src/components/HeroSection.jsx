// import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React, { useState } from "react";
import CardComponent from "./CArd";
import { Button } from "antd";
import Editor1 from "./Editor";
import Comment from "./Comment";
import ListSectionWhichProvide from "./possible_list/ListSectionWhichProvide";
import { NavLink } from "react-router-dom";
import OurServices from "./OurServices.jsx/OurServices";
import YouTubeAudioPlayer from "./possible_list/ListSectionWhichProvide";
import PdfToWordConverter from "./OurCovertSection/PDFToJPGConverter";
import AboutTextura from "./possible_list/AboutTextura";
import SelectBox from "./possible_list/SelectBox";
import Testimonial from "./draganddrop/Testimonial";
import Draggable from "react-draggable";

const HeroSection = () => {
  const [position, setPosition] = useState({ x: 49, y: 49 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setPosition({ x, y });
  };

  return (
    <div className="mt-[80px]">
      <div className="h-full w-full pt-5 bg-gray-50 relative">
        {" "}
        <div className="absolute rounded-xl w-12 ml-[20px] md:ml-[40px]">
          <div>
            <div></div>
          </div>
          <img className="rounded-lg" src="/logos/fabicon2.png" alt="" />
        </div>
        <div className="absolute z-1 flex   w-full  justify-end    transform   overflow-hidden  transition-all ease-in-out duration-500     ">
          <img
            style={{ transform: "rotateY(20deg)" }}
            className="  rounded-xl shadow-lg hover:shadow-2xl opacity-30  transition-all ease-in-out duration-500  transform   overflow-hidden    "
            // src="/herosection image/herosectionImage.png"
            src="/herosection image/Wave@1x-10.0s-1366px-641px.png"
            alt=""
          />
        </div>
        <div className="pt-[170px] text-center">
          <div className="flex justify-center">
            <CardComponent />
          </div>
          <div className="z-2">
            <Comment />
          </div>
          <div className="mt-10">
            <Button
              type="dashed"
              className="hover:text-teal-600 text-teal-500 bg-teal-50"
            >
              <NavLink to="/jpg_to_text">
                <div className="flex gap-3">
                  <div>
                    <svg
                      className="w-6 h-6 text-teal-500 dark:teal-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M14 4.182A4.136 4.136 0 0 1 16.9 3c1.087 0 2.13.425 2.899 1.182A4.01 4.01 0 0 1 21 7.037c0 1.068-.43 2.092-1.194 2.849L18.5 11.214l-5.8-5.71 1.287-1.31.012-.012Zm-2.717 2.763L6.186 12.13l2.175 2.141 5.063-5.218-2.141-2.108Zm-6.25 6.886-1.98 5.849a.992.992 0 0 0 .245 1.026 1.03 1.03 0 0 0 1.043.242L10.282 19l-5.25-5.168Zm6.954 4.01 5.096-5.186-2.218-2.183-5.063 5.218 2.185 2.15Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>Start Extracting</div>
                </div>
              </NavLink>
            </Button>
          </div>
        </div>
        <div className="pt-20">
          <OurServices />
        </div>
        <div>
          <ListSectionWhichProvide />
        </div>
        <div>
          <AboutTextura />
        </div>
        {/* text editor */}
        {/* <YouTubeAudioPlayer /> */}
      </div>

      {/* <PdfToWordConverter /> */}
    </div>
  );
};

export default HeroSection;
