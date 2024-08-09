"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const mision = [
  {
    title: "Our Mission",
    desc: "Smartwatch has a straightforward corporate philosophy: dedicate its talents and technologies to create superior products and services for a better global society. Smartwatch places great emphasis on its human resources and technologies to achieve this.",
    img: "/asset/aboutimg/about1.jpg",
  },
  {
    title: "Our Values",
    desc: "Smartwatch believes that living out strong values ​​is the key to good business. That is why these core values, as well as a strict code of ethics, inspire every decision the company makes.",
    img: "/asset/aboutimg/about777.jpg",
  },
  {
    title: "Five principles of Smartwatch business",
    desc: "Smartwatch industries contribution as a global leader in corporate social responsibility. These principles form the basis of its global code of conduct that aligns with the company's legal, ethical and social obligations.",
    img: "/asset/aboutimg/about88.jpg",
  },
];
export default function Vision() {
  return (
    <div className="py-18 ">
      <div className="max-w-[1200px] mx-auto space-y-24 ">
        {mision.map((mission, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={` flex ${
              index % 2 === 1
                ? "flex-col-reverse md:flex-row-reverse gap-12"
                : "flex-col md:flex-row"
            }`}
          >
            <div className="space-y-2 max-w-[550px]">
              <h2 className="text-[32px] font-bold font-Oswald">
                {mission.title}
              </h2>
              <p>{mission.desc}</p>
            </div>
            <div className="flex justify-center items-center ">
              <Image
                src={mission.img}
                alt=""
                width={400}
                height={400}
                className="max-h-[400px] w-auto object-cover "
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
