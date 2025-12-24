import bgSky from "../assets/features/skybg.png";
import triangles from "../assets/features/triangles.png";
import panda from "../assets/features/panda.png";
import flowerRight from "../assets/features/flowerRight.png";
import pencilleft from "../assets/features/pencilleft.png";
import pencilright from "../assets/features/pencilright.png";
import crayonFlower from "../assets/features/crayonFlower.png";

export default function FeaturesSection() {
  return (
    <section className="relative w-100 h-[100vh] mx-4  overflow-hidden">

      {/* ================= BACKGROUND SKY ================= */}
      <img
        src={bgSky}
        alt="sky background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* ================= TOP LEFT PENCILS ================= */}
      <img
        src={pencilleft}
        alt="pencils left"
        className="absolute bottom-[47vh] right-[56vw] w-[60vw] h-[70vh] z-30"
      />

      {/* ================= TOP RIGHT PENCILS ================= */}
      <img
        src={pencilright}
        alt="pencils right"
        className="absolute bottom-[47vh] left-[56vw] w-[60vw] h-[70vh] z-30"
      />

      {/* ================= TRIANGLES COLLAGE ================= */}
      <img
        src={triangles}
        alt="features collage"
        className="absolute top-[21vh] left-[-1vw] w-[45vw]  z-20"
      />

      {/* ================= CRAYON FLOWER (CENTER SMALL) ================= */}
      <img
        src={crayonFlower}
        alt="crayon flower"
        className="absolute top-[38vh] left-[18vw] w-[70px]  z-40"
      />

      {/* ================= PANDA ICON ================= */}
      <img
        src={panda}
        alt="panda"
        className="absolute top-[62vh] left-[4vw] w-[35vw]  z-30"
      />

      {/* ================= RIGHT FLOWER ================= */}
      <img
        src={flowerRight}
        alt="flower"
        className="absolute top-[30vh] left-[55vw] w-[60vw]  z-20"
      />

      {/* ================= TEXT AREA ================= */}
      <div className="relative z-40 ml-auto -top-[6vh] mr-[8vw] mt-[35vh] max-w-[420px] text-center sm:text-left">
        <h2 className="text-3xl sm:text-4xl right-[2.5vw] relative font-extrabold text-[#1E3A8A]">
          About Us
        </h2>
        <p className="relative right-[22vw] mt-4 w-[50vw] text-shadow-lg font-serif text-center sm:text-lg" style={{ textShadow: "0px 2px 10px rgba(0,0,0,0.15)" }}>
          At Al-Byan, education is more than academics — it’s a journey that awakens the mind, nurtures the heart, and strengthens faith. With over 50 years of legacy, we continue to empower generations through an education that beautifully blends Islamic values with modern innovation and 21st-century skills.
          Here, faith and future meet. Our learners explore through STEAM-based learning, digital innovation, and our Modern Quranic Lab — connecting technology with spirituality, creativity with compassion, and excellence with purpose.
          We place our students at the heart of everything we do. Their well-being, growth, and happiness matter most. From emotional support and personalized learning to vibrant co-curricular experiences, we ensure every child feels valued, confident, and inspired to thrive.
          Behind this success stands a team of dedicated Mentors — highly qualified, professionally trained, and passionate about guiding young minds. With modern pedagogical strategies, continuous professional development, and a deep sense of care, our teachers make learning meaningful and transformative.
          At Al-Byan, we’re not just shaping achievers — we’re nurturing thinkers, believers, and compassionate leaders ready to make a difference in the world. Every learner is on a journey from knowledge to wisdom, from purpose to prosperity, and from learning to lifelong success — in this world and the Hereafter.
        </p>
      </div>
    </section>
  );
}
