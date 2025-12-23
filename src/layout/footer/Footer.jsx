import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaArrowUp,
} from "react-icons/fa";

// 👉 IMPORT YOUR FOOTER BG IMAGE HERE
import footerBg from "../../assets/footerbg.png";

export default function Footer() {
  return (
    <footer className="relative z-20 text-white overflow-hidden">

      {/* ===== Curved Top Mask ===== */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none -translate-y-full">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-[90px] md:h-[130px]"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113.64,10.15,1200,19.44V0Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      {/* ===== Background Image ===== */}
      <div className="absolute inset-0 z-0">
        <img
          src={footerBg}
          alt="Footer Background"
          className="w-[99vw] h-[64vh] object-fit"
        />
        {/* Soft Overlay for Readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* ===== Footer Content ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-8">

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">

          {/* Logo */}
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-bold tracking-wide">AL BYAN</h2>
          </div>

          {/* Links */}
          <div className="lg:col-span-5">
            <h3 className="text-xl font-bold mb-4">Companies</h3>

            <div className="grid grid-cols-2 gap-8 text-sm text-gray-300">
              <ul className="space-y-3">
                <li className="hover:text-[#ffca24] cursor-pointer">About Us</li>
                <li className="hover:text-[#ffca24] cursor-pointer">Our Services</li>
                <li className="hover:text-[#ffca24] cursor-pointer">News & Blog</li>
                <li className="hover:text-[#ffca24] cursor-pointer">Our Shop</li>
              </ul>
              <ul className="space-y-3">
                <li className="hover:text-[#ffca24] cursor-pointer">Our Team</li>
                <li className="hover:text-[#ffca24] cursor-pointer">Testimonials</li>
                <li className="hover:text-[#ffca24] cursor-pointer">FAQs</li>
                <li className="hover:text-[#ffca24] cursor-pointer">Contact Us</li>
                <li className="hover:text-[#ffca24] cursor-pointer">For Pre School</li>
                <li className="hover:text-[#ffca24] cursor-pointer">For Kindergarten</li>
                <li className="hover:text-[#ffca24] cursor-pointer">For School</li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-4">
            <h3 className="text-3xl font-semibold mb-4">
              Subscribe Our <br /> Newsletter
            </h3>

            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border border-white/20 p-3 rounded placeholder-gray-300 focus:outline-none focus:border-[#ffca24]"
              />
              <button className="bg-[#ffca24] text-black font-bold py-3 rounded hover:bg-yellow-400 transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mb-6"></div>

        {/* Bottom Bar */}
        <div className="flex w-[80vw] p-2 flex-col md:flex-row justify-between items-center gap-6 text-sm bg-[#0d357b] text-gray-300">

          <p>
            <span className="text-white font-medium">AlByan</span> All Rights Reserved.
          </p>

          <div className="flex items-center gap-5">
            <FaFacebookF className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaTwitter className="hover:text-white cursor-pointer" />
            <FaLinkedinIn className="hover:text-white cursor-pointer" />

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="ml-3 w-9 h-9 rounded-full border border-[#ffca24] text-[#ffca24] hover:bg-[#ffca24] hover:text-black flex items-center justify-center transition"
            >
              <FaArrowUp />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
