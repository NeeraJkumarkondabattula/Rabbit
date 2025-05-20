import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiBars3BottomRight,
  HiOutlineShoppingBag,
  HiOutlineUser,
} from "react-icons/hi2";
import CartDrawer from "./CartDrawer";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawerOpen = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div className="bg-[#121239] text-white">
      <nav className="relative container mx-auto flex items-center justify-between py-2 md:py-3 px-6 ">
        <div className="z-10 w-[100px]">
          <Link
            to="/"
            className="font-medium text-lg leading-none uppercase font-Tiro"
          >
            Reginald Men
          </Link>
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex space-x-6 uppercase">
          <Link
            to="/"
            className="group relative text-white text-sm font-medium"
          >
            <span className="border-0 pb-1">Home</span>
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </Link>
          <Link
            to="/shop"
            className="group relative text-white text-sm font-medium"
          >
            <span className="border-0 pb-1">Shop</span>
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </Link>
          <Link
            to="/track"
            className="group relative text-white text-sm font-medium"
          >
            <span className="border-0 pb-1">Track</span>
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </Link>

          <Link
            to="/contact"
            className="group relative text-white text-sm font-medium"
          >
            <span className="border-0 pb-1">Contact</span>
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </Link>
          <Link
            to="/about"
            className="group relative text-white text-sm font-medium"
          >
            <span className="border-0 pb-1">About</span>
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </Link>
        </div>

        <div className="flex items-center space-x-2 z-10">
          <Link to="/profile" className="hover:text-black">
            <HiOutlineUser className="h-6 w-6 text-white" />
          </Link>
          <button
            onClick={toggleDrawerOpen}
            className="relative hover:text-black"
          >
            <HiOutlineShoppingBag className="h-5 w-6 text-white" />
            <span className="absolute -top-1 bg-white text-[#121239] rounded-full text-xs px-1 font-medium">
              5
            </span>
          </button>
          <button className="md:hidden hover:text-black">
            <HiBars3BottomRight className="h-6 w-6 text-white" />
          </button>
        </div>
      </nav>
      <CartDrawer drawerOpen={drawerOpen} toggleDrawerOpen={toggleDrawerOpen} />
    </div>
  );
};

export default Navbar;
