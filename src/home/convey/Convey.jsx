import { useState } from "react";
import "./Convey.css";
import { messages } from "../../data/messages";

import Owner_bg from "../../assets/owner_bg.png";
import Owner_ellipse from "../../assets/owner_ellipse.png";
import Message_yellow from "../../assets/message_yellow.png";

export default function Convey() {
  const [activeMessage, setActiveMessage] = useState("Chairman");

  const current = messages[activeMessage];

  return (
    <div className="convey_wrapper pt-5 font-['Poppins']">
      <p className="about_title font-['Playfair_Display'] tracking-wide">
        Message
      </p>

      <p className="about_desp font-light text-gray-600">
        Our Leadership Messages
      </p>

      {/* BUTTONS */}
      <div className="flex justify-center gap-3 mt-4 mb-5">
        {Object.keys(messages).map((key) => (
          <button
            key={key}
            className={`about_btn font-medium ${
              activeMessage === key ? "about_btn_active" : ""
            }`}
            onClick={() => setActiveMessage(key)}
          >
            {key}'s Message
          </button>
        ))}
      </div>

      {/* CONTENT */}
      <div className="about_message_div flex flex-col lg:flex-row gap-8 items-center">

        {/* LEFT */}
        <div className="lg:w-2/3 w-full">
          <p className="about_message_title font-['Playfair_Display'] text-[28px]">
            {current.title}
          </p>

          <p className="about_message_desp font-light w-[50vw] leading-relaxed mt-4">
            {current.description}
          </p>

          <p className="about_owner_name font-semibold tracking-wide mt-6">
            {current.owner}
          </p>

          <p className="about_designation font-light text-gray-600">
            {current.designation}
          </p>
        </div>

        {/* RIGHT IMAGE STACK */}
        <div className="lg:w-1/3 w-full flex justify-center relative image_wrap">

          <img src={Owner_bg} className="owner_bg_img" alt="" />
          <img src={Owner_ellipse} className="owner_ellipse_img" alt="" />

          {/* MAIN IMAGE (INDIVIDUAL SIZE & POSITION) */}
          <img
            src={current.image}
            alt=""
            className="absolute z-30 object-contain"
            style={{
              height: current.imageStyle.height,
              right: current.imageStyle.right,
              bottom: current.imageStyle.bottom,
            }}
          />

          <img src={Message_yellow} className="message_yellow_img z-30" alt="" />
        </div>
      </div>
    </div>
  );
}
