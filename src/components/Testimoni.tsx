"use client";

import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa6";

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";

// swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Testimonial data
const testimonialData = [
  {
    img: "/asset/testimoni/cewetes6.jpg",
    message:
      "Since using Smartwatch, my life has become more organized. Notifications directly on my wrist are very helpful, especially during meetings or on the road.",
    name: "Anggita Adriani",
  },
  {
    img: "/asset/testimoni/tes1.jpg",
    message:
      "As a runner, Smartwatch is my best partner. Accurate GPS and physical activity tracker really help me track my training progress.",
    name: "Hussein Albama",
  },
  {
    img: "/asset/testimoni/tes2.jpg",
    message:
      "I am very impressed with the health features of the Smartwatch. I feel more secure and informed about my health condition.",
    name: "Jaka Winata",
  },
  {
    img: "/asset/testimoni/tes3.jpg",
    message:
      "This Smartwatch is truly revolutionary! With the Smartwatch, I can receive calls and messages without having to take my phone out of my pocket.",
    name: "Pradipta Subarjo",
  },
  {
    img: "/asset/testimoni/tes4.jpg",
    message:
      "The oval design of the Smartwatch Model 2 Oval is very unique and elegant. I get a lot of compliments when wearing it.",
    name: "Kevin Arya",
  },
  {
    img: "/asset/testimoni/cewetes5.jpg",
    message:
      "Smartwatch helps me achieve my fitness goals. The battery lasts long too.",
    name: "Anindita",
  },
];

export default function Testimoni() {
  return (
    <section className="py-12 xl:py-28">
      <div className="container mx-auto">
        <h2 className="font-Oswald font-bold text-[36px] text-center">
          Testimonials
        </h2>
        <div>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="h-[320px]"
          >
            {testimonialData.map((person, index) => {
              return (
                <SwiperSlide className="h-full" key={index}>
                  <div className="flex flex-col justify-center items-center gap-6 text-center h-full ">
                    <Image
                      src={person.img}
                      width={90}
                      height={90}
                      alt=""
                      className="rounded-full border-2 border-black "
                    />
                    <div className="flex flex-col justify-center items-center ">
                      <FaQuoteLeft className="text-2xl text-gray-300 " />
                      <p className="max-w-[380px] mb-2 ">{person.message}</p>
                      <span className="text-2xl text-black">{person.name}</span>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
