import React from "react";
import { Link } from "react-router-dom";

const Reels = () => {
  const videos = [
    {
      id: 1,
      url: "https://cdn.shopify.com/s/files/1/0637/6194/0660/files/reelUp_asjjvd0n7hu1737124386260_low.mp4?v=1737124406",
      productLink: "/sunscreen",
    },
    {
      id: 2,
      url: "https://cdn.shopify.com/s/files/1/0637/6194/0660/files/reelUp_asjjvd0n7hu1737124386260_low.mp4?v=1737124406",
      productLink: "/sunscreen",
    },
    {
      id: 3,
      url: "https://cdn.shopify.com/s/files/1/0637/6194/0660/files/reelUp_asjjvd0n7hu1737124386260_low.mp4?v=1737124406",
      productLink: "/sunscreen",
    },
    {
      id: 4,
      url: "https://cdn.shopify.com/s/files/1/0637/6194/0660/files/reelUp_asjjvd0n7hu1737124386260_low.mp4?v=1737124406",
      productLink: "/sunscreen",
    },
    {
      id: 5,
      url: "https://cdn.shopify.com/s/files/1/0637/6194/0660/files/reelUp_asjjvd0n7hu1737124386260_low.mp4?v=1737124406",
      productLink: "/sunscreen",
    },
    {
      id: 6,
      url: "https://cdn.shopify.com/s/files/1/0637/6194/0660/files/reelUp_asjjvd0n7hu1737124386260_low.mp4?v=1737124406",
      productLink: "/sunscreen",
    },
    {
      id: 7,
      url: "https://cdn.shopify.com/s/files/1/0637/6194/0660/files/reelUp_asjjvd0n7hu1737124386260_low.mp4?v=1737124406",
      productLink: "/sunscreen",
    },
  ];

  return (
    <section className="bg-[#151515]">
      <div className="container mx-auto cursor-pointer px-8 py-12">
        <div className="py-4 text-center text-white">
          <h1 className="text-4xl font-Tiro font-medium tracking-tighter">
            Real People
          </h1>
          <h1 className="text-4xl font-bold tracking-tighter">Real Results</h1>
        </div>

        <div className="flex overflow-x-auto gap-4 no-scrollbar py-2">
          {videos.map((item, index) => (
            <div
              key={index}
              className="shrink-0 w-2/3 lg:w-1/6 rounded overflow-hidden border-2"
            >
              <Link to={item.productLink}>
                <video
                  src={item.url}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-auto object-cover rounded"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind extension for hiding scrollbar */}
      <style>
        {`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
    </section>
  );
};

export default Reels;
