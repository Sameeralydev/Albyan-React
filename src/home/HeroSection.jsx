import { useEffect, useRef, useState } from "react";

import herobg from "../assets/hero/herobg.png";
import herotopright from "../assets/hero/herotopright.webp";
import herogirl from "../assets/hero/herogirl.webp";
import heroabc from "../assets/hero/heroabc.png";
import hero2cloud from "../assets/hero/hero2cloud.png";
import sittingGirl from "../assets/hero/sitting-girl.webp";
import kite from "../assets/hero/kite.png";

/* ================= TEXT CARD SLIDER ================= */
function SchoolCardSlider() {
  const cards = [
    {
      title: "Interactive Learning",
      desc: "Fun activities that help kids learn faster and better.",
    },
    {
      title: "Creative Classes",
      desc: "Art, music and imagination based learning sessions.",
    },
    {
      title: "Qualified Teachers",
      desc: "Experienced and friendly teachers for every child.",
    },
    {
      title: "Safe Environment",
      desc: "A secure and caring space for growing minds.",

    },
    {
      title: "Fun Adventures",
      desc: "Outdoor games and exciting learning experiences.",

    },
    {
      title: "Qualified Teachers",
      desc: "Experienced and friendly teachers for every child.",
    },
    {
      title: "Safe Environment",
      desc: "A secure and caring space for growing minds.",

    },
    {
      title: "Fun Adventures",
      desc: "Outdoor games and exciting learning experiences.",

    },
  ];

  const containerRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  const cardWidth = 240; // same as your translate logic

  const loopCards = [...cards, ...cards];
  useEffect(() => {
    const calculateVisible = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.offsetWidth;
      setVisibleCount(Math.floor(width / cardWidth));
    };

    calculateVisible();
    window.addEventListener("resize", calculateVisible);

    return () => window.removeEventListener("resize", calculateVisible);
  }, []);
  
  useEffect(() => {
  const interval = setInterval(() => {
    setIndex(prev => prev + 1);
  }, 2500);

  return () => clearInterval(interval);
}, []);

useEffect(() => {
  if (index >= cards.length) {
    const timeout = setTimeout(() => {
      setIndex(0);
    }, 500);

    return () => clearTimeout(timeout);
  }
}, [index, cards.length]);

  return (
    <div className="relative w-[720px] max-w-full">
      <div ref={containerRef} className="relative w-[99vw] right-[45vw] ">
        <div className="overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${index * cardWidth}px)`,
            }}
          >
            {loopCards.map((card, i) => (
              <div
                key={i}
                className={`relative min-w-[220px] rounded-3xl shadow-xl text-center z-50 border border-white ${card.color}`}
              >
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================= HERO SECTION ================= */
export default function HeroSection() {
  return (
    <section className="relative w-[97vw] min-h-[170vh] z-0 mt-[18vh] mx-4 overflow-hidden font-sans">

      {/* BACKGROUND */}
      <img
        src={herobg}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* TOP HERO */}
      <div className="relative h-[100vh] z-10">
        <img
          src={heroabc}
          alt="pattern"
          className="absolute left-0 top-0 w-[75vw] h-[85vh] object-contain z-10 opacity-90"
        />

        <div className="absolute top-0 right-6 sm:right-16 z-40 w-[265px] h-[330px] flex bg-white/35 border-b-4 border-dashed border-white rounded-br-[100%] rounded-bl-[100%] items-center justify-center">
          <img src={herotopright} alt="cartoon" className="max-w-[70%]" />
        </div>

        <div className="absolute top-[18vh] left-[65%] -translate-x-1/2 z-30">
          <img
            src={herogirl}
            alt="student"
            className="w-[320px] md:w-[350px] drop-shadow-2xl"
          />
        </div>
      </div>

      {/* BOTTOM HERO */}
      <div className="relative h-[90vh] z-10 mt-[-30vh]">

        <img
          src={hero2cloud}
          alt="cloud"
          className="absolute -left-[10vw] top-[-5vh] w-[45vw] opacity-60 z-10"
        />

        <div className="absolute top-[15%] left-[18%] z-0">
          <img
            src={kite}
            alt="kite"
            className="w-[110px] md:w-[940px] rotate-[-15deg]"
          />
        </div>

        <svg
          className="absolute top-[34%] left-[33%] rotate-80 w-[77%] h-[200px] z-10"
          viewBox="0 0 500 100"
          fill="none"
        >
          <path
            d="M0,20 Q250,160 500,20"
            stroke="#000000"
            strokeWidth="3"
          />
        </svg>



        <div className="absolute top-[40%] left-[5%] z-30">
          <img
            src={sittingGirl}
            alt="sitting student"
            className="w-[35vw] min-w-[320px] drop-shadow-2xl"
          />
        </div>

        {/* TEXT CARD SLIDER */}
        <div className="absolute top-[18%] right-[5%] z-40">
          <SchoolCardSlider />
        </div>
      </div>
    </section>
  );
}
