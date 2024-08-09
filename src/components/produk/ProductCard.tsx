"use client";
import Image from "next/image";

interface props {
  image: string;
  name: string;
  desc: string;
  price: string;
}

const ProductCard = ({ name, desc, image, price }: props) => {
  return (
    <div className="cursor-pointer bg-white rounded-md overflow-hidden">
      <div className="relative overflow-hidden w-[100%] h-[20rem]">
        <Image
          src={`${image}`}
          alt={name}
          className="transform object-cover transition-all duration-700 scale-700 hover:scale-125"
          fill
        />
      </div>
      <div className="p-[1.4rem]">
        <div>
          <h1 className="mt-[0.4rem] text-[20px] font-bold">{name}</h1>
          <p className="text-[15px] opacity-70 mt-[0.4rem]">{desc}</p>
          <div className="w-[100%] opacity-60 h-[0.8px] mt-[1rem] mb-[1rem] bg-gray-800"></div>
          <div className="flex mt-[0.5rem] items-center space-x-3">
            <h1 className="border-[2px] rounded-md border-opacity-50 text-orange-600 font-bold px-3 py-1 border-orange-400">
              {price}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
