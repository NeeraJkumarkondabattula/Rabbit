import { useEffect, useState } from "react";
import { TbBrandMeta } from "react-icons/tb";
import { RiTwitterXLine } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io";
import { Link } from "react-router-dom";

const Topbar = () => {
  const items = [
    { text: "We ship world wide - fast and reliable.", link: "/shipping" },
    { text: "Get your loved products with good offers!", link: "/offers" },
    { text: "Summer sale is ending soon.", link: "/summer-sale" },
  ];

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("in");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDirection("out");
    }, 3500);

    const interval = setInterval(() => {
      setDirection("in");
      setIndex((prev) => (prev + 1) % items.length); // ✅ Wrap around
    }, 4000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [index, items.length]);

  return (
    <div className="bg-[#121212] text-white">
      <div className="container mx-auto flex justify-between items-center py-3 px-8">
        {/* Left social icons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="https://www.facebook.com/" className="hover:text-gray-300">
            <TbBrandMeta className="h-5 w-5" />
          </Link>
          <Link to="https://www.instagram.com/" className="hover:text-gray-300">
            <IoLogoInstagram className="h-5 w-5" />
          </Link>
          <Link to="https://x.com/login" className="hover:text-gray-300">
            <RiTwitterXLine className="h-4 w-5" />
          </Link>
        </div>

        {/* Center sliding message */}
        <div className="relative overflow-hidden h-6 text-sm text-center flex-grow">
          <div className="absolute inset-0 flex items-center justify-center w-full">
            <Link
              to={items[index].link}
              className={`
                transition-all duration-700 ease-in-out
                inline-block whitespace-nowrap
                ${
                  direction === "in"
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-8 opacity-0"
                }
              `}
              onAnimationEnd={() => setDirection("in")}
            >
              <span>{items[index].text}</span>
            </Link>
          </div>
        </div>

        {/* Right contact */}
        <div className="hidden md:block text-sm">
          <Link to="tel:8019755437" className="hover:text-gray-300">
            +91 8019755437
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
