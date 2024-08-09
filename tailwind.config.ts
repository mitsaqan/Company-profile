import { Oswald, Roboto } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      Oswald: "var(--font-oswald)",
      Roboto: "var(--font-roboto)",
    },
    backgroundImage: {
      hero: "url(/asset/hero/jamm1.png )",
      about: "url(/asset/aboutimg/about55.jpg)",
    },
    extend: {},
  },

  plugins: [],
};
export default config;
