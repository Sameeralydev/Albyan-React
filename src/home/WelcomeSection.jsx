import React from "react";
// Import your background image
import welcomeBg from "../assets/hero/welcombg.png"; // <-- replace with your image path
import albyanvideo from "../assets/video/albyanvideo.mp4";

export default function WelcomeSection() {
  return (
    <section className="w-full mx-4">

      {/* ================= WELCOME BANNER WITH BG IMAGE ================= */}
      <div
        className="relative w-full h-full bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${welcomeBg})` }}
      >
        {/* ✨ Soft overlay */}
        <div className="absolute inset-0 "></div>

        {/* 🌟 Content */}
        <div className="relative z-10 flex items-center justify-center text-center px-6 py-20">
          <h2 className="text-transparent text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
            Welcome to
            <span className="block text-transparent drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)] mt-2">
              AlByan Group of Institutes
            </span>
          </h2>
        </div>

        {/* 🎨 Decorative circles */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/20 rounded-full"></div>
        <div className="absolute -bottom-12 -right-12 w-52 h-52 bg-white/20 rounded-full"></div>
      </div>

      {/* ================= VIDEO SECTION ================= */}
      <div className="flex justify-center">
        <div className="w-full  overflow-hidden shadow-xl ">
          <video
            src={albyanvideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto"
            poster="/videos/thumbnail.jpg" // optional
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

    </section>
  );
}
