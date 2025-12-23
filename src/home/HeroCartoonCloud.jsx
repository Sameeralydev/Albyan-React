import React from "react";

// 👉 IMPORT YOUR IMAGES
import bgImage from "../assets/hero/bg.png";
import cloudImage from "../assets/hero/cloud.png";
import cartoonImage from "../assets/hero/cartoon.png";
import pencilImage from "../assets/hero/pencil.png";

const HeroCartoonCloud = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">

      {/* Background */}
      <img
        src={bgImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Cartoon Kids (Left Side) */}
      <img
        src={cartoonImage}
        alt="Cartoon Kids"
        className="absolute left-0 bottom-10 z-10 w-[80vw] max-w-none"
      />

      {/* Pencil Character */}
      <img
        src={pencilImage}
        alt="Pencil"
        className="absolute left-[220px] md:-left-[150px] bottom-[140px] z-20 w-[55vw] max-w-none"
      />

      {/* Cloud (Right Side Content Area) */}
      <img
        src={cloudImage}
        alt="Cloud"
        className="absolute right-[0%] top-1/2 -translate-y-1/2 z-10 w-[320px] md:w-[75vw] max-w-none"
      />

    </div>
  );
};

export default HeroCartoonCloud;
