import React from 'react'
import { Facebook, Twitter } from "lucide-react";
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-[#BCDDFE] w-full px-8 py-10 md:px-16 md:py-20 lg:px-36 lg:py-22'>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-16 mb-10 items-start">
        <div>
          <Link to="/">
            <div className="flex items-center gap-2 mb-3">
              <img src="../public/Icon.png" alt="E-comm Logo" className="h-[36px] w-[39px]" />
              <span className="text-[#22262A] text-[18px] font-[700]">E-Comm</span>
            </div>
          </Link>
          <p className="text-[12px] font-[400] text-[#22262A] leading-relaxed">
            Lorem Ipsum is simply dummy text of the<br />printing and typesetting
            industry. Lorem <br />Ipsum has been the industry's standard<br /> dummy text ever.
            Since the 1500s, when<br /> an unknown printer.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <p className="text-[12px] font-[400] text-[#22262A] leading-relaxed max-w-xs">
            Since the 1500s, when an unknown<br /> printer took a galley of type and<br /> scrambled.
          </p>
          <div className="flex gap-4 mt-3">
            <a href="#" aria-label="Facebook" className="text-[#1877F2] hover:opacity-80">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Twitter" className="text-[#1DA1F2] hover:opacity-80">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="text-[12px] font-[400] text-[#22262A] leading-relaxed">
            E-Comm , 4578 <br />
            Marmora Road, <br />
            Glasgow D04 89GR
          </p>
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-8 lg:pb-10 md:gap-x-16 md:gap-y-12'>
        {/* info */}
        <div className='mb-6 md:mb-0'>
          <h3 className='text-xl font-semibold'>Information</h3>
          <ul className='mt-2 text-[12px] font-[400] space-y-2'>
            <li>About Us</li>
            <li>Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        {/* customer service link */}
        <div className='mb-6 md:mb-0'>
          <h3 className='text-xl font-semibold'>Service</h3>
          <ul className='mt-2 text-[12px] font-[400] space-y-2'>
            <li>About Us</li>
            <li>Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        {/* social media links */}
        <div className='mb-6 md:mb-0'>
          <h3 className='text-xl font-semibold'>My Account</h3>
          <ul className='mt-2 text-[12px] font-[400] space-y-2'>
            <li>About Us</li>
            <li>Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        {/* newsletter subscription */}
        <div>
          <h3 className='text-xl font-semibold'>Our Offers</h3>
          <ul className='mt-2 text-[12px] font-[400] space-y-2'>
            <li>About Us</li>
            <li>Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 border-t border-white pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-700">
        <p>&copy; {new Date().getFullYear()} E-Comm. All rights reserved</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <img src="../public/western-union.png" alt="Western Union" className="h-6" />
          <img src="../public/mastercard.png" alt="Mastercard" className="h-6" />
          <img src="../public/paypal.png" alt="PayPal" className="h-6" />
          <img src="../public/visa.png" alt="Visa" className="h-6" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
