"use client";

import { IoIosPricetag } from "react-icons/io";
import { FaUser } from "react-icons/fa";

const featured = [
  {
    icon: <FaUser />,
    title: "Tech innovation award",
    subTitle:
      "We are thrilled to announce that our flagship smartwatch, the Smartwatch model 1, has been honored with the prestigious 2024 Tech Innovation Award for Best Wearable Technology.",
  },
  {
    icon: <IoIosPricetag />,
    title: "Best seller award",
    subTitle:
      "We are proud to announce that the Smartwatch Model 1 has been awarded the  Best-Selling Smartwatch of the Year at the 2024 Tech Innovators Awards. This prestigious recognition celebrates our dedication to delivering a product that resonates with users worldwide, combining top-tier technology with outstanding design and functionality.",
  },
];

export default function Abouts() {
  return (
    <section className="pt-8 pb-14 lg:pb-28 ">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-2 mb-8">
          <h2 className="text-[36px] font-Oswald font-bold text-center">
            Customer Is Our Priority
          </h2>
          <p className="max-w-[600px] mx-auto text-center ">
            Welcome to Smartwatch Industries, where innovation meets style and
            functionality. As a pioneering leader in the wearable technology
            industry, we are dedicated to creating smartwatches that enhance
            your life, keeping you connected, active, and informed.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-4 mb-16">
          {featured.map((feature, index) => {
            return (
              <div
                className="flex flex-col justify-center items-center gap-4 border p-10 "
                key={index}
              >
                <div className="text-4xl bg-black text-white w-[77px] h-[77px] rounded-full flex justify-center items-center">
                  {feature.icon}
                </div>
                <div className="flex flex-col justify-center items-center gap-2 text-center">
                  <h4 className="font-Oswald font-bold text-[26px]">
                    {feature.title}
                  </h4>
                  <p> {feature.subTitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
