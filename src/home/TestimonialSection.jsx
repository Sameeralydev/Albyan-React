import FallingBlocks from "../components/fallingtext/FallingBlocks";

export default function Home() {
  return (
    <div
      className="
        relative w-full bg-[#87CEE6]
        h-[380px] sm:h-[420px] md:h-[460px] lg:h-[500px]
        overflow-hidden
      "
    >
      {/* MOBILE SCALE WRAPPER */}
      <div className="w-full h-full scale-[0.85] sm:scale-100 origin-top">
        <FallingBlocks
          items={["", "", "", "", "", "", "", "", "", "", ""]}
          items2={["Branches"]}
          items2Figures={["5+"]}
          items4={["Staff"]}
          items4Figures={["30+"]}
          items5={["Enroll Students"]}
          items5Figures={["200+"]}
          items3={["", "", "", "", "", "", "", "", "", "", ""]}
          trigger="auto"
          gravity={0.25}
          particlesCount={15}
        />
      </div>
    </div>
  );
}
