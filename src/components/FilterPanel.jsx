import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

const FilterPanel = ({ title, children, defaultOpen = true }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="py-6 px-8">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={togglePanel}
      >
        <h3 className="font-medium text-[20px] text-[#22262A]">{title}</h3>
        {isOpen ? (
          <ChevronUpIcon className="h-5 w-5 text-[20px] text-[#212121]" />
        ) : (
          <ChevronDownIcon className="h-5 w-5 text-[20px] text-[#22262A]" />
        )}
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-full opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default FilterPanel;

