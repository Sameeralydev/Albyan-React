import React from "react";

// 👉 IMPORT YOUR IMAGES
import bgImage from "../assets/bgImage.png";
import mainImage from "../assets/mainImage.png";
import arrow from "../assets/arrow.png";
import iconTopLeft from "../assets/iconTopLeft.png";
import iconTopRight from "../assets/iconTopRight.png";
import iconBottomRight from "../assets/iconBottomRight.png";

const EducationLayout = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      
      {/* Background */}
      <img
        src={bgImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Main Image */}
      <div className="relative z-10">
        <img
          src={mainImage}
          alt="Main"
          className="max-w-none w-[70vw] rounded-3xl"
        />
      </div>

      {/* Top Left */}
      <div className="absolute -top-[22%] -left-[10%] z-20 flex items-center gap-3">
        <img src={iconTopLeft} alt="Icon" className="w-[70vw]" />
        <img src={arrow} alt="Arrow" className="w-[50vw] relative right-[53vw] top-8" />
      </div>

      {/* Top Right */}
      <div className="absolute top-[10%] right-[6%] z-20 flex items-center gap-3">
        <img src={arrow} alt="Arrow" className="w-[50vw] rotate-180 relative -top-[28vh] left-[40vw]" />
        <img src={iconTopRight} alt="Icon" className="w-[70vw] relative -top-[33vh] right-[20vh] " />
      </div>

      {/* Bottom Left */}
      <div className="absolute -bottom-[17%] -left-[12%] z-20 flex items-center gap-3">
        <img src={iconBottomRight} alt="Icon" className="w-[70vw]" />
        <img src={arrow} alt="Arrow" className="w-[50vw] relative right-[50vw] top-8" />
      </div>

      {/* Bottom Right */}
      <div className="absolute bottom-[10%] right-[6%] z-20 flex items-center gap-3">
        <img src={arrow} alt="Arrow" className="w-[50vw] rotate-180 relative left-[40vw] top-[31vh]" />
        <img src={iconBottomRight} alt="Icon" className="w-[70vw] relative right-[10vw] top-[27.5vh]" />
      </div>

    </div>
  );
};

export default EducationLayout;
