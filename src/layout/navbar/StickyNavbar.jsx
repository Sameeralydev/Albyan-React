import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import navbarLinks from "./navbar";
import logo from "../../assets/logo.png";

export default function StickyNavbar() {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 450);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full
        bg-white shadow-md z-50
        transition-all duration-300
        ${show ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
      `}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 sm:px-8 h-16">

        {/* LOGO */}
        <Link to="/" className="text-xl font-bold text-green-900">
          <img src={logo} alt="Al Byan Logo" className=" max-w-[4vw] relative " />
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex gap-8 text-gray-700 font-medium">
          {navbarLinks.map((item, i) => (
            <li key={i} className="relative group">

              <Link
                to={item.link}
                className="hover:text-[#08347b] flex items-center gap-1"
              >
                {item.label}
                {item.children && " ▾"}
              </Link>

              {/* DROPDOWN */}
              {item.children && (
                <ul
                  className="
                    absolute top-full left-0 mt-3
                    bg-white text-gray-800
                    rounded-xl shadow-lg
                    min-w-[200px]
                    opacity-0 invisible
                    group-hover:opacity-100 group-hover:visible
                    transition-all duration-200
                    z-50
                  "
                >
                  {/* hover bridge */}
                  <span className="absolute -top-3 left-0 w-full h-3"></span>

                  {item.children.map((child, index) => (
                    <li key={index}>
                      <Link
                        to={child.link}
                        className="block px-5 py-3 text-sm hover:bg-[#08347B]/10 hover:text-[#08347b]"
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
          className="hidden lg:block bg-[#08347b] font-semibold text-white px-6 py-2 rounded-full"
        >
          Admission Now
        </Link>

        {/* MOBILE BUTTON */}
        <button
          className="lg:hidden text-2xl text-green-900"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden bg-white shadow-lg px-6 py-4 space-y-4">
          {navbarLinks.map((item, i) => (
            <div key={i}>
              <Link
                to={item.link}
                className="block text-gray-800 font-semibold py-1"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>

              {item.children && (
                <div className="ml-4 mt-2 space-y-2">
                  {item.children.map((child, j) => (
                    <Link
                      key={j}
                      to={child.link}
                      className="block text-sm text-gray-600"
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
    </nav>
  );
}
