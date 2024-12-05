import React from "react";
import Header from "./navigationbar/Header";
import HeroSection from "./HeroSection";
import AudioPreviewAndDownload from "./OurCovertSection/Audio";
import AboutTextura from "./possible_list/AboutTextura";
import Footer from "./possible_list/Footer";

const MainHome = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <HeroSection />
      </div>
      <div>
     
      </div>
      <div>{/* <AudioPreviewAndDownload /> */}</div>
    </div>
  );
};

export default MainHome;
