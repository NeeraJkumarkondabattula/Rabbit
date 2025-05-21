import React from "react";
import { Link } from "react-router-dom";
import { TbBrandMeta } from "react-icons/tb";
import { RiTwitterXLine } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className=" py-12 bg-[#121212] text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-5 px-8">
        <div className="col-span-4">
          <h3 className="text-2xl text-white mb-4 font-semibold">Newsletter</h3>
          <p className="text-gray-500 mb-6 text-sm">
            Be the first to hear about new products, exclusive events, and
            online offers.
          </p>
          <p className="text-sm font-medium">
            Sign up and get 10% off your first order.
          </p>
          <form className="flex mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full text-sm border-t border-l border-b rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-800 transition-all required px-3 py-2"
            />
            <button className="bg-black text-white text-sm rounded-r-md hover:bg-gray-800 px-4 py-2">
              Subscribe
            </button>
          </form>
        </div>
        <div className="col-span-2">
          <h3 className="text-2xl text-white mb-4 font-semibold">Shop</h3>
          <ul className="space-y-2 text-gray-500 text-sm">
            <li>
              <Link
                to="/sunscreen"
                className="hover:text-white transition-colors"
              >
                Sunscreen
              </Link>
            </li>
            <li>
              <Link to="/serum" className="hover:text-white transition-colors">
                Serum
              </Link>
            </li>
            <li>
              <Link
                to="/facewash"
                className="hover:text-white transition-colors"
              >
                Facewash
              </Link>
            </li>
            <li>
              <Link
                to="/moisturizer"
                className="hover:text-white transition-colors"
              >
                Moisturizer
              </Link>
            </li>
            <li>
              <Link
                to="/lipbalm"
                className="hover:text-white transition-colors"
              >
                Lipbalm
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-3">
          <h3 className="text-2xl text-white mb-4 font-semibold">Support</h3>
          <ul className="space-y-2 text-gray-500 text-sm">
            <li>
              <Link
                to="/product-disclaimer"
                className="hover:text-white transition-colors"
              >
                Product Disclaimer
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-white transition-colors"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/terms-and-services"
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                to="/retun-policy"
                className="hover:text-white transition-colors"
              >
                Retun & Shipping Policy
              </Link>
            </li>
            <li>
              <Link
                to="/privacy-policy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-3">
          <h3 className="text-2xl text-white mb-4 font-semibold">Follow Us</h3>
          <ul className="space-x-2 text-gray-500 flex text-sm">
            <li>
              <Link
                to="https://www.facebook.com/"
                className="hover:text-gray-300"
              >
                <TbBrandMeta className="h-5 w-5" />
              </Link>
            </li>
            <li>
              <Link
                to="https://www.instagram.com/"
                className="hover:text-gray-300"
              >
                <IoLogoInstagram className="h-5 w-5" />
              </Link>
            </li>
            <li>
              <Link to="https://x.com/login" className="hover:text-gray-300">
                <RiTwitterXLine className="h-4 w-5" />
              </Link>
            </li>
          </ul>
          <div className=" items-center text-gray-500 mt-6">
            <h3 className="text-2xl text-white mb-4 font-semibold">
              Contact Us
            </h3>
            <Link to="mailto:info@reginaldmen.com" className="block">
              <MdOutlineMail className="w-6 h-5 inline-block text-sm" />{" "}
              info@reginaldmen.com
            </Link>
            <Link to="tel:+918019755437" className="block">
              <IoCallOutline className="w-6 h-5 inline-block text-sm" /> +91
              8019755437
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto pt-12 px-4 py-2">
        <p className="tracking-tighter text-sm text-gray-300 text-center">
          © 2025 Reginald Men, All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
