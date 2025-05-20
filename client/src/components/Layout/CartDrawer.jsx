import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

const CartDrawer = ({ drawerOpen, toggleDrawerOpen }) => {
  return (
    <div
      className={`w-full sm:w-1/2 md:w-1/4 shadow-lg h-full fixed top-0 right-0 transform transition-transform duration-300 bg-white z-10 ${
        drawerOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between p-4 bg-[#121239] text-white">
        <h1 className="text-lg font-semibold captilize">Your Cart</h1>
        <button onClick={toggleDrawerOpen}>
          <IoMdClose className="h-6 w-6 " />
        </button>
      </div>
    </div>
  );
};

export default CartDrawer;
