import React from "react";
import { TbBrandMeta } from "react-icons/tb";
import { RiTwitterXLine } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io";

const Topbar = () => {
  return (
    <div className="bg-red-700 text-white font-Poppins">
      <div className="container mx-auto flex justify-between items-center py-3 px-8">
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="hover:text-gray-300">
            <TbBrandMeta className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <IoLogoInstagram className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <RiTwitterXLine className="h-4 w-5" />
          </a>
        </div>
        <div className="text-sm text-center flex-grow">
          <a href="#" className="hover:text-gray-300">
            <span>We ship world wide - fast and reliable.</span>
          </a>
        </div>
        <div className="hidden md:block text-sm">
          <a href="tel:8019755437" className="hover:text-gray-300">
            +91 8019755437
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
