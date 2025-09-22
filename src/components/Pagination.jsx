import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
   <div className="flex justify-center mt-6 h-[69px] bg-[#F7f7f9] rounded-sm">
  {pages.map((num) => (
    <button
      key={num}
      onClick={() => onPageChange(num)}
      className={`
        px-4 py-2 
        ${currentPage === num 
          ? 'bg-[#40BFFF] text-white ml-2' 
          : 'hover:bg-gray-100 text-[#262626]'}
          width-[70px] px-8
      `}
    >
      {num}
    </button>
  ))}
</div>
  );
};

export default Pagination;
