import React, { useState, useMemo } from "react";
import Sidebar from "../components/Sidebar";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import { products } from "../data/product.js";
import { motion } from "framer-motion";
import { Bars3Icon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { Grid3x3 } from "lucide-react";
import Navbar from "../components/Navbar";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedColors, setSelectedColors] = useState([]);
  const [sortOption, setSortOption] = useState("name-asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // --- Filtering ---
  const filteredProducts = useMemo(() => {
    let data = [...products];
    if (selectedCategory) data = data.filter((p) => p.category === selectedCategory);
    if (selectedColors.length > 0)
      data = data.filter((p) => p.colors.some((c) => selectedColors.includes(c)));
    return data;
  }, [products, selectedCategory, selectedColors]);

  // --- Sorting ---
  const sortedProducts = useMemo(() => {
    let data = [...filteredProducts];
    switch (sortOption) {
      case "name-asc":
        data.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        data.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "price-asc":
        data.sort((a, b) => a.discountPrice - b.discountPrice);
        break;
      case "price-desc":
        data.sort((a, b) => b.discountPrice - a.discountPrice);
        break;
      case "popularity":
        data.sort((a, b) => b.ratingCount - a.ratingCount);
        break;
      default:
        break;
    }
    return data;
  }, [filteredProducts, sortOption]);

  const start = (currentPage - 1) * pageSize;
  const paginatedProducts = sortedProducts.slice(start, start + pageSize);
  const totalPages = Math.ceil(sortedProducts.length / pageSize);

  const resetFilters = () => {
    setSelectedCategory(null);
    setSelectedColors([]);
    setSortOption("name-asc");
    setCurrentPage(1);
  };

  const handlePageSizeChange = (e) => {
    setPageSize(Number(e.target.value));
    setCurrentPage(1); // Reset to first page
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex flex-col flex-1 relative">
      {/* <Navbar onSidebarOpen={() => setSidebarOpen(true)} /> */}
      <Navbar onSidebarOpen={toggleSidebar} />
<div className="flex flex-1">
      <Sidebar
        isOpen={sidebarOpen}
        // onClose={() => setSidebarOpen(false)}
        onClose={toggleSidebar}
        onCategoryChange={setSelectedCategory}
        onColorChange={setSelectedColors}
        pageSize={pageSize}
        onPageSizeChange={handlePageSizeChange}
      />

      <main className="flex-1 p-4 md:p-6">
        {/* 🔵 Hero Section (Responsive) */}
        <section className="relative w-full bg-[#40bFFF] text-white h-auto md:h-[350px] mb-6 pt-16 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center p-6 md:p-8 lg:p-6 lg:pt-10">
            {/* Left Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-2 px-4 md:px-8"
            >
              <h1 className="font-medium text-2xl md:text-[30px] m-0 leading-snug">
                Adidas Men Running <br /> Sneakers <br />
              </h1>
              <p className="font-normal text-sm md:text-[14px] -mt-2 md:-mt-3.5">
                Performance and design. Taken right to the edge.
              </p>
              <button className="font-medium md:py-4 text-[14px] rounded hover:bg-gray-200 transition">
                <span className="underline">SHOP N</span>OW
              </button>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0, scaleX: -1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center ml-18 mt-4 md:mt-0"
            >
              <img
                src="/images/pro.png"
                alt="Sneakers"
                className="w-48 sm:w-60 md:w-72 lg:w-96 drop-shadow-xl"
              />
            </motion.div>
          </div>
        </section>

        {/* 🔘 Filter Controls (Responsive) */}
        <div className="flex flex-col md:flex-row items-center justify-between bg-[#f1f3f4] mb-6 rounded-md p-4 gap-6">
          {/* Left: Items + Sort + Show */}
          <div className="flex flex-nowrap md:flex-nowrap items-center gap-8 overflow-x-auto md:overflow-x-visible">
            <div className="font-[400] text-[#22262a] flex-shrink-0">{sortedProducts.length} Items</div>
            {/* Sort By */}
            <div className="flex items-center gap-2 relative flex-shrink-0">
              <span className="font-normal text-[#22262a]">Sort By</span>
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="appearance-none rounded-sm px-3 py-2 text-[#22262a] font-normal pr-8 border border-2 border-gray-200 bg-white"
              >
                <option value="name-asc">Name ↑</option>
                <option value="name-desc">Name ↓</option>
                <option value="price-asc">Price ↑</option>
                <option value="price-desc">Price ↓</option>
                <option value="popularity">Popularity</option>
              </select>
              <ChevronDownIcon className="w-4 h-4 absolute right-2 pointer-events-none text-gray-500" />
            </div>
            {/* Show */}
            <div className="flex items-center gap-2 relative flex-shrink-0">
              <span className="text-gray-600">Show</span>
              <select
                value={pageSize}
                onChange={handlePageSizeChange}
                className="appearance-none rounded-sm px-3 py-2 text-[#22262a] font-normal pr-8 
               border-2 border-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-400 bg-[#f1f3f4]"
              >
                <option value={6}>6</option>
                <option value={12}>12</option>
                <option value={24}>24</option>
              </select>
              <ChevronDownIcon className="w-4 h-4 absolute right-2 pointer-events-none text-gray-500" />
            </div>
          </div>
          {/* Right: View Toggle */}
          <div className="flex items-center gap-2">
            <button className="p-2 text-[#c1c8ce] hover:text-[#40bfff] hover:bg-gray-200 rounded">
              <Grid3x3 className="h-6 w-6" />
            </button>
            <button className="p-2 text-[#c1c8ce] hover:text-[#40bfff] hover:bg-gray-200 rounded">
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>
        </div>
        {/* 🔹 Product Grid */}
        {paginatedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {paginatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 mt-20">
            No products found.{" "}
            <button onClick={resetFilters} className="text-blue-500 underline">
              Reset filters
            </button>
          </div>
        )}
        {/* 🔹 Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </main>
      </div>
    </div>
  );
}
