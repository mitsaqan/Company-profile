"use client";

import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";

const leaderData = [
  {
    image: "/asset/leader/sukses11.jpg",
    name: "Andre William",
    role: "Founder Smartwatch Industry",
    description:
      "Andre William is the founder of Smartwatch Industry, a company focused on wearable technology innovation. With a strong background in electrical engineering and business, Andre has led the company since its inception in 2015.",
  },
  {
    image: "/asset/leader/cewesukses2.jpg",
    name: "Rosita Susanto",
    role: "Co-Founder Smartwatch Industry",
    description:
      "Rosita Susanto is the co-founder and Chief Technology Officer (CTO) of Smartwatch Industry, a leading company in wearable technology innovation. With extensive experience in information technology and electronics, Rosita plays a key role in the product development and technology strategy.",
  },
  {
    image: "/asset/leader/sukses2.jpg",
    name: "Benny Tanjung",
    role: "CEO Smartwatch Industry",
    description:
      "Benny Tanjung is the CEO of Smartwatch Industry, a company renowned for its innovation in wearable technology. Benny brings over 15 years of experience in business management and strategy, leading the company to tremendous growth and success.",
  },
];

export default function Leader() {
  return (
    <section className="py-12 xl:h-[110vh]">
      <div className="container mx-auto h-full flex flex-col items-center justify-center">
        <h2 className="text-[36px] text-center mb-6 font-Oswald font-bold">
          Meet Our Leaders
        </h2>
        {/* leaders grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 mb-12 ">
          {leaderData.map((leader, index) => {
            return (
              <div
                className="flex flex-col items-center text-center"
                key={index}
              >
                {/* image */}
                <div className="relative w-[320px] h-[360px] mx-auto mb-4">
                  <Image src={leader.image} fill alt="" />
                </div>
                <h4 className="font-bold font-Oswald text-[22px] mb-2 ">
                  {leader.name}{" "}
                </h4>
                {/* role */}
                <p className=" font-bold text-sm tracking-[3px] mb-2">
                  {leader.role}{" "}
                </p>
                {/* description */}
                <p className="mb-6">{leader.description}</p>
              </div>
              // Button
            );
          })}
        </div>
        {/* Button */}
        <div>
          <Link href="/team">
            <CustomButton
              containerStyle="w-[196px] h-[62px]"
              text="See All Teams"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
