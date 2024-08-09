"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";

// swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Testimonial data
const historyData = [
  {
    img: "/asset/aboutimg/launch1.png",
    date: "2015",
    desc: "Smartwatch industries launches its first smartwatch, the Proto 1, featuring basic health tracking and notifications.",
  },
  {
    img: "/asset/aboutimg/launch2.jpg",
    date: "2018",
    desc: " Expanded into international markets with the Smart Pro, known for its sleek design and enhanced battery life.",
  },
  {
    img: "/asset/aboutimg/launch3.jpg",
    date: "2020",
    desc: " Launched the Smartwatch Health Platform, a comprehensive ecosystem connecting users with healthcare professionals for personalized health insights.",
  },
  {
    img: "/asset/aboutimg/launch4.jpg",
    date: "2022",
    desc: " Received industry recognition for innovation in wearable tech, solidifying Smartwatch's position as a leader in the smartwatch market.",
  },
  {
    img: "/asset/aboutimg/launch5.jpg",
    date: "2023",
    desc: "Continued expansion into wearable tech accessories, including smart clothing and augmented reality glasses.",
  },
  {
    img: "/asset/aboutimg/launch6.jpg",
    date: "2024",
    desc: "Announced plans for Smartwatch's first smartwatch model 2 with neural interface technology and the new oval design. this new technology aiming to revolutionize human-machine interaction.",
  },
];

export default function Testimoni() {
  return (
    <section className="py-12 xl:py-28">
      <div className="container mx-auto">
        <h2 className="font-Oswald font-bold text-[36px] text-center">
          History
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
            {historyData.map((history, index) => {
              return (
                <SwiperSlide className="h-full" key={index}>
                  <div className="flex flex-col justify-center items-center gap-6 text-center h-full ">
                    <Image
                      src={history.img}
                      width={150}
                      height={150}
                      alt=""
                      className="rounded-full border-2 border-black "
                    />
                    <div className="flex flex-col justify-center items-center ">
                      <p className="max-w-[380px] mb-2 ">{history.date}</p>
                      <span className="text-2xl text-black">
                        {history.desc}
                      </span>
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
