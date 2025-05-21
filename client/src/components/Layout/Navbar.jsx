import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

import {
  HiBars3BottomRight,
  HiOutlineShoppingBag,
  HiOutlineUser,
} from "react-icons/hi2";
import CartDrawer from "./CartDrawer";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navDraweropen, setNavDrawerOpen] = useState(false);

  const toggleDrawerOpen = () => {
    setDrawerOpen(!drawerOpen);
  };

  const toggleNavDrawerOpen = () => {
    setNavDrawerOpen(!navDraweropen);
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

        <div className="flex items-center space-x-4 z-10">
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
          <button
            onClick={toggleNavDrawerOpen}
            className="md:hidden hover:text-black"
          >
            <HiBars3BottomRight className="h-6 w-6 text-white" />
          </button>
        </div>
      </nav>
      <CartDrawer drawerOpen={drawerOpen} toggleDrawerOpen={toggleDrawerOpen} />

      <div
        className={`w-full sm:w-1/2 md:w-1/4 shadow-lg h-full fixed top-0 right-0 transform transition-transform duration-300 bg-white z-10 ${
          navDraweropen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 bg-[#121239] text-white">
          <h1 className="text-lg font-semibold captilize">Navigation Menu</h1>
          <button onClick={toggleNavDrawerOpen}>
            <IoMdClose className="h-6 w-6 " />
          </button>
        </div>
        <div className="p-4">
          <nav className="flex flex-col gap-4">
            <Link to="/" className="block text-black hover:text-gray-800">
              Home
            </Link>
            <Link to="/shop" className="block text-black hover:text-gray-800">
              Shop
            </Link>
            <Link to="/track" className="block text-black hover:text-gray-800">
              Track
            </Link>

            <Link
              to="/contact"
              className="block text-black hover:text-gray-800"
            >
              Contact
            </Link>
            <Link to="/about" className="block text-black hover:text-gray-800">
              About
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
