import React from "react";
import Badge from "./Badge";
import Rating from "./Rating";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-[#F6F7F8] rounded-md relative">
      {product.isHot && <Badge text="HOT" />}

      <div className="w-full h-[280px] flex items-center justify-center">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="rounded-md w-full h-full object-cover object-center"
        />
      </div>


      <div className="bg-white m-0.5 py-3 rounded-b-md">
        <h2 className="text-center font-bold text-[18px] text-[#223263] mb-2">
          {product.name}
        </h2>

         <Rating value={product.ratingValue} />

        <div className="flex flex-col md:flex-row justify-center items-center gap-2 text-sm mt-2 mb-3">
          <span className="text-[#40bfff] font-bold text-[18px]">${product.discountPrice}</span>
          <span className="line-through text-[#9098B1] font-normal text-[14px]">${product.price}</span>
          <span className="text-[#fb7181] font-bold text-[14px]">24% Off</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
