import React from "react";
import FilterPanel from "./FilterPanel";
import { XMarkIcon } from "@heroicons/react/24/solid";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-transparent z-40 lg:hidden"
          onClick={onClose}
        ></div>
      )}

      <aside
        className={`fixed inset-y-0 left-0 w-[370px] bg-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 lg:relative lg:translate-x-0 lg:flex-shrink-0 lg:mr-6 lg:overflow-y-visible overflow-y-auto`}
      >
        <div className="h-full pr-2">
          <div className="flex justify-between items-center p-4 lg:hidden">
            <h2 className="font-medium text-xl text-[#22262A]">Categories</h2>
            <button onClick={onClose}>
              <XMarkIcon className="h-6 w-6 text-gray-500" />
            </button>
          </div>

          <div className="ml-6 my-6 pt-2 bg-[#F6F7F8] rounded-sm">
            <FilterPanel title="Hot Deals">
              <ul className="text-gray-600">
                <li className="group flex justify-between text-[#262626] items-center pt-8 py-6  font-normal cursor-pointer hover:text-[#33a0ff]">
                  <div className="text-[#262626] group-hover:text-[#33a0ff]">Nike</div>
                  <div className="text-gray-400  group-hover:text-[#33a0ff]">2</div>
                </li>
                <li className="group flex justify-between text-[#262626] items-center  py-6 font-normal cursor-pointer hover:text-[#33a0ff]">
                  <span className="text-[#262626] group-hover:text-[#33a0ff]">Airmax</span>
                  <span className="text-gray-400 group-hover:text-[#33a0ff]">48</span>
                </li>
                <li className="group flex justify-between text-[#262626] items-center  py-6 font-thin cursor-pointer hover:text-[#33a0ff]">
                  <span className="text-[#262626] group-hover:text-[#33a0ff]">Nike</span>
                  <span className="text-gray-400 group-hover:text-[#33a0ff]">14</span>
                </li>
                <li className="group flex justify-between text-[#262626] items-center  py-6 font-thin cursor-pointer hover:text-[#33a0ff]">
                  <span className="text-[#262626] group-hover:text-[#33a0ff]"> Adidas</span>
                  <span className="text-gray-400 group-hover:text-[#33a0ff]">15</span>
                </li>
                <li className="group flex justify-between text-[#262626] items-center py-6  font-normal cursor-pointer hover:text-[#33a0ff]">
                  <span className="text-[#262626] group-hover:text-[#33a0ff]">Vans</span>
                  <span className="text-gray-400 group-hover:text-[#33a0ff]">23</span>
                </li>
                <li className="group flex justify-between text-[#262626] items-center py-6 font-normal cursor-pointer hover:text-[#33a0ff]">
                  <span className="text-[#262626] group-hover:text-[#33a0ff]">All Stars</span>
                  <span className="text-gray-400 group-hover:text-[#33a0ff]">1</span>
                </li>
                <li className="group flex justify-between text-[#262626] items-center py-6 font-normal cursor-pointer hover:text-[#33a0ff]">
                  <span className="text-[#262626] group-hover:text-[#33a0ff]">Adidas</span>
                  <span className="text-gray-400 group-hover:text-[#33a0ff]">95</span>
                </li>
              </ul>
            </FilterPanel>
          </div>

          <div className="ml-6 my-4 bg-[#F6F7F8]">
            <FilterPanel title="Prices">
              <div className="flex items-center py-6 justify-between text-sm">
                <div className="gap-6 font-thin text-[18px] text-[#262626]">Ranger:</div>
                <div className="font-thin text-[18px] text-[#22262A]">$13.99 - $25.99</div>
              </div>
              <input type="range" min="13" max="25" className="w-full mt-2" />
            </FilterPanel>
          </div>

          <div className="ml-6 my-4 bg-[#F6F7F8] rounded-sm">
            <FilterPanel title="COLOR">
              <div className="flex flex-wrap gap-5 py-6 px-2 ">
                <div className="w-[26px] h-[24px] rounded-full bg-[#006cff] hover:ring-2 hover:ring-[#006cff]/50 ring-offset-4 cursor-pointer transition-all hover:scale-80"></div>
                <div className="w-[26px] h-[24px] rounded-full bg-[#FC3E39] hover:ring-2 hover:ring-[#FC3E39]/50 ring-offset-4 cursor-pointer transition-all hover:scale-80"></div>
                <div className="w-[26px] h-[24px] rounded-full bg-black hover:ring-2 hover:ring-[#000]/50 ring-offset-4 cursor-pointer transition-all hover:scale-80"></div>
                <div className="w-[26px] h-[24px] rounded-full bg-[#FFF600] hover:ring-2 hover:ring-[#FFF600]/50 ring-offset-4 cursor-pointer transition-all hover:scale-80"></div>
                <div className="w-[26px] h-[24px] rounded-full bg-[#FF00B4] hover:ring-2 hover:ring-[#ff00b4]/50 ring-offset-4 cursor-pointer transition-all hover:scale-80"></div>
                <div className="w-[26px] h-[24px] rounded-full bg-[#EFDFDf] hover:ring-2 hover:ring-[#efdfdf]/50 ring-offset-4 cursor-pointer transition-all hover:scale-80"></div>
              </div>
            </FilterPanel>
          </div>

          <div className="ml-6 my-4 bg-[#F6F7F8] rounded-sm">
            <FilterPanel title="BRAND">
              <ul className="space-y-2 text-sm pt-10">
                <li className="group flex justify-between items-center font-normal text-[#262626] text-[18px] cursor-pointer hover:text-[#33A0FF]">
                  <span className="text-[#262626] group-hover:text-[#33a0ff]">Nike</span>
                  <span className="text-gray-400 group-hover:text-[#33a0ff]">99</span>
                </li>
                <li className="group flex justify-between items-center font-normal py-3 text-[#262626] text-[18px] cursor-pointer hover:text-[#33A0FF]">
                  <span className="text-[#262626] group-hover:text-[#33a0ff]">Nike</span>
                  <span className="text-gray-400 group-hover:text-[#33a0ff]">99</span>
                </li>
                <li className="group flex justify-between items-center font-normal py-1 text-[#262626] text-[18px] cursor-pointer hover:text-[#33A0FF]">
                  <span className="text-[#262626] group-hover:text-[#33a0ff]">Adidas</span>
                  <span className="text-gray-400 group-hover:text-[#33a0ff]">99</span>
                </li>
                <li className="group flex justify-between items-center py-2 font-normal text-[#262626] text-[18px] cursor-pointer hover:text-[#33A0FF]">
                  <span className="text-[#262626] group-hover:text-[#33a0ff]">Siemens</span>
                  <span className="text-gray-400 group-hover:text-[#33a0ff]">99</span>
                </li>
              </ul>
            </FilterPanel>
          </div>

          <div className="ml-6 my-5 bg-[#F6F7F8] rounded-sm">
            <button className="w-full text-center py-3 cursor-pointer text-[#262626] text-[20px] font-medium hover:text-[#33A0FF] transition-all h-[70px]">
              MORE
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};
export default Sidebar;