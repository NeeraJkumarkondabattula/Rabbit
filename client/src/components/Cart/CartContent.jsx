import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineCurrencyRupee } from "react-icons/md";

const CartContent = () => {
  const CartItems = [
    {
      id: 1,
      title: "Moisturizer",
      description: "Hydrates and nourishes the skin.",
      image: "https://images.unsplash.com/photo-1613082291900-22c9b1888e6d",
      price: 289,
      weight: "100g",
      quantity: 2,
    },
    {
      id: 2,
      title: "Sunscreen",
      description: "Protects against harmful UV rays.",
      image: "https://images.unsplash.com/photo-1600180758890-6d78e2cc9a71",
      price: 359,
      weight: "120g",
      quantity: 2,
    },
    {
      id: 3,
      title: "Facewash",
      description: "Cleanses the skin and removes dirt.",
      image: "https://images.unsplash.com/photo-1600181953605-c7d6d7f3f5d5",
      price: 179,
      weight: "150g",
      quantity: 1,
    },
    {
      id: 4,
      title: "Serum",
      description: "Targets fine lines and improves texture.",
      image: "https://images.unsplash.com/photo-1600180758890-6d78e2cc9a71",
      price: 499,
      weight: "50g",
      quantity: 3,
    },
    {
      id: 5,
      title: "Lip Balm",
      description: "Moisturizes and protects lips.",
      image: "https://images.unsplash.com/photo-1600180758890-6d78e2cc9a71",
      price: 139,
      weight: "15g",
      quantity: 1,
    },
  ];

  return (
    <div>
      {CartItems.map((item, index) => (
        <div
          className="flex items-start justify-between p-2 bg-gray-100 rounded shadow-sm mb-1"
          key={index}
        >
          <div className="flex items-center justify-between">
            <img
              src={item.image}
              alt={item.title}
              className="w-20 h-22 object-cotain mr-4 rounded"
            />
            <div>
              <h3 className="text-sm font-medium">{item.title}</h3>
              <p className="text-xs text-gray-800 flex items-center font-medium">
                Weight: {item.weight}
              </p>
              <div className="flex items-center gap-2 border mt-1 w-fit">
                <button className="text-sm  border px-3 font-medium">-</button>
                <span className="text-sm">{item.quantity}</span>
                <button className=" text-sm  border px-3 font-medium">+</button>
              </div>
            </div>
          </div>
          <div className="flex flex-col-reverse items-end gap-6">
            <button className="">
              <RiDeleteBin6Line className="w-4 h-5 text-red-600 hover:text-black" />
            </button>
            <p className="text-sm flex items-center font-semibold">
              <MdOutlineCurrencyRupee className="w-3 h-3" />
              {item.price}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContent;
