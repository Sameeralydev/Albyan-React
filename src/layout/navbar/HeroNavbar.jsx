import { Link } from "react-router-dom";
import { useState } from "react";
import navbarLinks from "../../data/navbar.jsx";

export default function HeroNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="absolute top-0 left-0 w-full z-50 px-3 sm:px-4 pt-3 sm:pt-4">

      {/* ================= TOP INFO BAR ================= */}
      <div className="bg-[#FFCA24] -mt-3 sm:-mt-4 w-full text-gray-900 text-xs sm:text-sm font-medium rounded-br-[25px] rounded-bl-[25px] py-2 sm:py-3 px-4 sm:px-8">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-3">

          <div className="flex flex-wrap items-center gap-4 justify-center md:justify-start text-center md:text-left">
            <span>albyangroupofinstitute@gmail.com</span>
            <span className="hidden md:inline">|</span>
            <span>+92 302 3893333</span>
            <span className="hidden md:inline">|</span>
            <span>3891 Ranchview Dr. Richardson, CA</span>
          </div>

          <div className="flex items-center gap-4">
            {["Facebook", "Instagram", "Twitter"].map((item) => (
              <a key={item} href="#" className="flex items-center gap-1 hover:underline">
                {item}
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </a>
            ))}
          </div>

        </div>
      </div>

      {/* ================= MAIN NAVBAR ================= */}
      <div className="relative w-full mt-3 sm:mt-4">
        <nav className="bg-[#4CB0B3] flex items-center justify-between px-5 sm:px-10 h-16 sm:h-20 rounded-tr-[25px] rounded-tl-[25px] shadow-lg">

          {/* LOGO */}
          <Link to="/" className="text-xl sm:text-2xl font-bold text-green-900">
            Al Byan
          </Link>

          {/* DESKTOP LINKS */}
          <ul className="hidden lg:flex gap-10 font-medium text-white">
            {navbarLinks.map((item, index) => (
              <li key={index} className="relative group">

                <Link to={item.link} className="flex items-center gap-1">
                  {item.label}
                  {item.children && " ▾"}
                </Link>

                {item.children && (
                  <ul
                    className="
                      absolute top-full left-0
                      mt-3
                      bg-white text-black
                      rounded-xl shadow-lg
                      min-w-[220px]
                      opacity-0 invisible
                      group-hover:opacity-100 group-hover:visible
                      transition-all duration-200
                      z-50
                    "
                  >
                    {/* hover bridge */}
                    <span className="absolute -top-3 left-0 w-full h-3"></span>

                    {item.children.map((child, i) => (
                      <li key={i}>
                        <Link
                          to={child.link}
                          className="block px-5 py-3 text-sm hover:bg-green-100 hover:text-green-800 transition"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}

              </li>
            ))}
          </ul>

          {/* DESKTOP BUTTON */}
          <Link
            to="/admission-now"
            className="hidden lg:block bg-green-900 text-white px-8 py-2 rounded-full"
          >
            Admission Now
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white text-2xl"
          >
            ☰
          </button>

        </nav>

        {/* ================= MOBILE MENU ================= */}
        {open && (
          <div className="lg:hidden bg-[#4CB0B3] mt-2 rounded-xl shadow-lg p-5 space-y-4">
            {navbarLinks.map((item, index) => (
              <div key={index}>
                <Link
                  to={item.link}
                  className="block text-white font-semibold py-2"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>

                {item.children && (
                  <div className="ml-4 mt-2 space-y-2">
                    {item.children.map((child, i) => (
                      <Link
                        key={i}
                        to={child.link}
                        className="block text-white/90 text-sm"
                        onClick={() => setOpen(false)}
                      >
                        • {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link
              to="/admission-now"
              className="block text-center bg-green-900 text-white py-2 rounded-full mt-4"
              onClick={() => setOpen(false)}
            >
              Admission Now
            </Link>
          </div>
        )}

      </div>
    </div>
  );
}
