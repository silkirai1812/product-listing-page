import React from "react";

const Badge = ({ text }) => {
  return (
    <div className="absolute top-0 left-0 bg-[#FF4858] text-white text-[14px] font-normal px-5 py-3 rounded-md">
      {text}
    </div>
  );
};

export default Badge;
