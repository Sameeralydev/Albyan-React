import { useState } from "react";
import "./Convey.css";
import { messages } from "../../data/messages";

import Owner_bg from "../../assets/owner_bg.png";
import Owner_ellipse from "../../assets/owner_ellipse.png";
import Message_yellow from "../../assets/message_yellow.png";

export default function Convey() {
  const [activeMessage, setActiveMessage] = useState("Chairman");

  // ✅ MOCK DISPLAY NAMES (real data untouched)
  const mockOwners = {
    Chairman: {
      name: "John A. Williams",
      designation: "Chairman of the Board",
    },
    Director: {
      name: "Michael R. Stone",
      designation: "Managing Director",
    },
    Principal: {
      name: "Sarah L. Anderson",
      designation: "Principal",
    },
  };

  return (
    <div className="convey_wrapper pt-5 font-['Poppins']">
      <p className="about_title font-['Playfair_Display'] tracking-wide">
        Message
      </p>

      <p className="about_desp font-light text-gray-600">
        Our Leadership Messages
      </p>

      {/* Buttons */}
      <div className="d-flex justify-center flex gap-3 mt-4 mb-5">
        {Object.keys(messages).map((key) => (
          <button
            key={key}
            className={`about_btn font-medium ${
              activeMessage === key ? "about_btn_active" : ""
            }`}
            onClick={() => setActiveMessage(key)}
          >
            {key} Message
          </button>
        ))}
      </div>

      {/* Content Card */}
      <div className="about_message_div">
        {/* LEFT */}
        <div className="col-lg-8 w-[150vh]">
          <p className="about_message_title font-['Playfair_Display'] text-[28px]">
            {messages[activeMessage].title}
          </p>

          <p className="about_message_desp font-light leading-relaxed">
            {messages[activeMessage].description}
          </p>

          {/* ✅ MOCK NAME */}
          <p className="about_owner_name font-semibold tracking-wide">
            {mockOwners[activeMessage]?.name}
          </p>
          
          {/* ✅ MOCK DESIGNATION */}
          <p className="about_designation font-light text-gray-600">
            {mockOwners[activeMessage]?.designation}
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="col-lg-4 d-flex justify-content-center position-relative image_wrap">
          <img src={Owner_bg} className="owner_bg_img" alt="" />
          <img src={Owner_ellipse} className="owner_ellipse_img" alt="" />
          <img src={Message_yellow} className="message_yellow_img" alt="" />
        </div>
      </div>
    </div>
  );
}
