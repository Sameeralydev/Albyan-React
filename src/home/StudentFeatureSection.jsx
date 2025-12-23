import studentImg from "../assets/student.png";
import dottedBg from "../assets/dotted-bg.png";
import handBlue from "../assets/hand-blue.png";
import brushes from "../assets/brushes.png";
// import vine from "../assets/vine.png";

export default function StudentFeatureSection() {
    return (
        <section className="relative w-full py-20 overflow-hidden bg-white">
            {/* dotted background */}
            <img
                src={dottedBg}
                alt=""
                className="absolute inset-0 w-full h-full object-cover z-0"
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-20">

                {/* LEFT IMAGE AREA */}
                <div className="relative flex-1 flex justify-center">
                    {/* <img
            src={vine}
            alt=""
            className="absolute -top-10 -left-10 w-28"
          /> */}

                    <img
                        src={studentImg}
                        alt="Student"
                        className="w-[45vw] rounded-[30px] right-[8vh] h-[60vh] max-w-none relative z-10 "
                    />

                    <img
                        src={handBlue}
                        alt=""
                        className="absolute bottom-20 left-[18vw] z-20 w-[60vw] max-w-none"
                        />


                    <img
                        src={handBlue}
                        alt=""
                        className="absolute top-60 -left-[20vh] z-20 w-[60vw] max-w-none"
                    />
                </div>

                {/* RIGHT CONTENT */}
                <div className="flex-1 flex flex-col gap-12">

                    {/* BOX 1 */}
                    <div className="relative bg-[#1b1bb3] text-white rounded-br-[50px] rounded-tl-[50px] left-[10vh] w-[60vh]  px-10 py-8">
                        {/* outline */}
                        <div className="absolute inset-[-10px] border-2 border-[#1b1bb3]/30 rounded-br-[50px] rounded-tl-[50px]" />

                        <img
                            src={brushes}
                            alt=""
                            className="absolute -left-[33vw] top-3/4 -translate-y-1/2 w-[25vw] z-30 max-w-none"
                        />

                        <h3 className="text-2xl font-semibold mb-3">
                            Creative Learning
                        </h3>
                        <p className="text-sm leading-6">
                            Encouraging creativity and imagination through hands-on
                            activities and interactive lessons.
                        </p>
                    </div>

                    {/* BOX 2 */}
                    <div className="relative bg-[#1b1bb3] text-white rounded-br-[50px] left-[10vh] rounded-tl-[50px] w-[60vh] px-10 py-8">
                        {/* outline */}
                        <div className="absolute inset-[-10px] border-2 border-[#1b1bb3]/30 rounded-br-[50px] rounded-tl-[50px]" />

                        <img
                            src={brushes}
                            alt=""
                            className="absolute -left-8 top-1/2 -translate-y-1/2 w-14"
                        />

                        <h3 className="text-2xl font-semibold mb-3">
                            Fun Environment
                        </h3>
                        <p className="text-sm leading-6">
                            A joyful and engaging atmosphere where students love to
                            learn and explore new ideas.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
