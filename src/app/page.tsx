import Image from "next/image";

import Hero from "@/components/Hero";
import Abouts from "@/components/Abouts";
import Products from "@/components/Products";
import Leader from "@/components/Leader";
import Testimoni from "@/components/Testimoni";

export default function Home() {
  return (
    <main>
      <Hero />
      <Abouts />
      <Products />
      <Leader />
      <Testimoni />
    </main>
  );
}
