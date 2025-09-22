import React from "react";

const Rating = ({ value }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span
        key={i}
        className={i <= value ? "text-[#FFC600]" : "text-[#c1c8ce]"}
      >
        ★
      </span>
    );
  }

  return (
    <div className="flex justify-center gap-4 text-[14px]">
      {stars}
    </div>
  );
};

export default Rating;