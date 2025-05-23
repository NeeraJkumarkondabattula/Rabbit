import React from "react";
import hero from "../../assets/Hero.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative">
      <img
        src={hero}
        alt="Buy 2 Get 6 Banner Image"
        className="w-full h-auto object-contain"
      />
      <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center">
        <div className="text-center text-white p-8">
          <h1 className="text-6xl md:text-7xl lg:text-9xl font-bold tracking-tight uppercase mb-2 mx-auto leading-none w-3/4">
            Buy 2 Get 6
          </h1>
          <p className="text-xs md:text-lg lg:text-2xl bg-[#D9D9D9] text-black py-1 px-2 md:px-4 uppercase font-bold w-fit mx-auto">
            Reginald Men's Birthday Sale
          </p>
          <button className="text-sm md:text-lg lg:text-2xl bg-[#00048A] text-white rounded outline-none border birder-white py-2 px-2 md:py-3 lg:py-4 w-1/2 md:w-2/4 mt-8 uppercase font-bold">
            <Link to="/shop">Buy Now!</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
