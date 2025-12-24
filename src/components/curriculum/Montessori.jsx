import MontessoriHero from "../../assets/hero/montessorihero.png";
// import LeftBg from "../../assets/montessori-left.png";
// import RightBg from "../../assets/montessori-right.png";

export default function Montessori() {
  return (
    <div className="w-full overflow-hidden font-['Poppins']">

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-[102vw] h-auto mt-[18vh] right-[2.5vw] bg-blue-300/30">
        <img
          src={MontessoriHero}
          alt="Montessori Hero"
          className="w-full h-auto object-contain"
        />

        {/* overlay */}
       
      </section>

      {/* ================= CONTENT SECTION ================= */}
      <section className="relative py-20 bg-[#FAFAFA]">

        {/* LEFT BG IMAGE */}
        <img
        //   src={LeftBg}
          alt=""
          className="hidden lg:block absolute left-0 top-20 w-[220px] opacity-40 pointer-events-none"
        />

        {/* RIGHT BG IMAGE */}
        <img
        //   src={RightBg}
          alt=""
          className="hidden lg:block absolute right-0 bottom-10 w-[260px] opacity-40 pointer-events-none"
        />

        {/* MAIN CONTENT */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-['Playfair_Display'] font-semibold text-gray-800">
            Learning Through Exploration
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Our Montessori program is designed to respect each child’s natural
            development. Through hands-on activities, guided discovery, and a
            carefully prepared environment, children build confidence, independence,
            and a lifelong love for learning.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We focus on holistic growth — cognitive, emotional, social, and spiritual —
            ensuring that every child feels valued, supported, and inspired.
          </p>
        </div>
      </section>
    </div>
  );
}
