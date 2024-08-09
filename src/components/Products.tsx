"use client";
import Image from "next/image";
import Link from "next/link";

import CustomButton from "./CustomButton";

const products = [
  {
    name: "Smartwatch Model 1",
    img: "/asset/product/jam2.jpg",
    description:
      "Elevate your lifestyle with the Smartwatch Model 1, a fusion of cutting-edge technology and contemporary design. Engineered to seamlessly integrate into your daily routine.",
  },
  {
    name: "Smartwatch Model 1 pro",
    img: "/asset/product/jam3.jpg",
    description:
      "Experience the pinnacle of wearable technology with the Smartwatch Model 1 Pro. Designed for those who demand the best, the Smartwatch Model 1 Pro combines top-of-the-line features, exceptional performance, and a sophisticated design to keep you connected, informed, and in control.",
  },
  {
    name: "Smartwatch Model 2 'Oval'",
    img: "/asset/product/jam222.png",
    description:
      "Discover a blend of elegance and cutting-edge technology with the Smartwatch Model 2 Oval. Designed to complement your style while keeping you connected and informed, this smartwatch offers a unique oval shape that sets it apart from the rest.",
  },
];

export default function Products() {
  return (
    <section>
      <div className="grid grids-col-1 lg:grids-col-2">
        {products.map((item, index) => {
          return (
            <div
              className="relative w-full h-[300px] lg:h-[600px] flex flex-col justify-center items-center"
              key={index}
            >
              {/* overlay */}
              <div className="bg-black/20 absolute w-full h-full top-0 z-10 "></div>
              <Image src={item.img} fill className="object-cover" alt="" />
              {/* TEXT & BUTTON */}
              <div className="z-30 max-w-[380px] text-center flex flex-col justify-center items-center gap-4">
                <h3 className="text-[32px]  text-white">{item.name}</h3>
                <p className="hidden md:flex lg:justify-center xl:justify-center text-white ">
                  {item.description}
                </p>
                <Link href="/product">
                  <CustomButton
                    text="Read more"
                    containerStyle="w-[196px] h-[62px] "
                  />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
