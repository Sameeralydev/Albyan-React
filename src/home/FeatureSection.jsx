import bgSky from "../assets/features/skybg.png";
import triangles from "../assets/features/triangles.png";
import panda from "../assets/features/panda.png";
import flowerRight from "../assets/features/flowerRight.png";

// NEW DECORATIONS
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
        className="absolute top-[21vh] left-[-1vw] w-[55vw]  z-20"
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
        className="absolute top-[62vh] left-[7vw] w-[40vw]  z-30"
      />

      {/* ================= RIGHT FLOWER ================= */}
      <img
        src={flowerRight}
        alt="flower"
        className="absolute top-[30vh] left-[55vw] w-[60vw]  z-20"
      />

      {/* ================= TEXT AREA ================= */}
      <div className="relative z-40 ml-auto mr-[8vw] mt-[35vh] max-w-[420px] text-center sm:text-left">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E3A8A]">
          Our Learning Features
        </h2>

        <p className="mt-4 text-gray-700 text-base sm:text-lg">
          Creative activities, joyful classrooms, and a safe environment
          where children learn, grow, and shine.
        </p>
      </div>

    </section>
  );
}
