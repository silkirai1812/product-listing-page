import React from 'react'
import logo from '../public/Icon.png'
import { ShoppingCart } from 'lucide-react';

const Navbar = () => {
    return (
        <header className="hidden md:block w-full bg-white pt-4 pb-4 shadow-[0_4px_0_0_#FAFAFB]">
  <div className="flex justify-between items-center h-full px-6">
    <div className="flex items-center gap-2">
      <img src={logo} alt="E-comm Logo" className="h-[44px] w-[51px]" />
      <span className="text-[#22262A] text-[24px] font-[700]">E-Comm</span>
    </div>

    <nav className="flex gap-24 text-sm font-medium">
      <a className="font-normal text-[#22262A] text-[20px] cursor-pointer hover:text-[#33A0FF]">HOME</a>
      <a className="font-normal text-[#22262A] text-[20px] cursor-pointer hover:text-[#33A0FF]">BAG</a>
      <a className="font-normal text-[#22262A] text-[20px] cursor-pointer hover:text-[#33A0FF]">SNEAKERS</a>
      <a className="font-normal text-[#22262A] text-[20px] cursor-pointer hover:text-[#33A0FF]">BELT</a>
      <a className="font-normal text-[#22262A] text-[20px] cursor-pointer hover:text-[#33A0FF]">CONTACT</a>
    </nav>

    <div className="flex items-center gap-7">
      <ShoppingCart className="w-[23px] h-[19px]" />
      <div className="flex items-center gap-4">
        <span className="font-[100] text-[18px] text-[#262626]">Items</span>
        <span className="font-[100] text-[18px] text-gray-400">$0.00</span>
      </div>
    </div>
  </div>
</header>


    )
}

export default Navbar
