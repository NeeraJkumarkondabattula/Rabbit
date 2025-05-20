import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

const CartDrawer = ({ drawerOpen, toggleDrawerOpen }) => {
  return (
    <div
      className={`w-3/4 sm:w-1/2 md:w-1/4 shadow-lg h-full fixed top-0 right-0 transform transition-transform duration-300 bg-white z-10 ${
        drawerOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-end p-4">
        <button onClick={toggleDrawerOpen}>
          <IoMdClose className="h-6 w-6 text-black" />
        </button>
      </div>
    </div>
  );
};

export default CartDrawer;
