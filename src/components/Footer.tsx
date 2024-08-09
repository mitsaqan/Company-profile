"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="pb-[2rem] pt-[1rem] bg-gray-100 ">
      <div
        className="w-[80%} mx-auto items-center grid grid-cols-1 border-b-2 pb-[2rem] 
      md:grid-cols-2 lg:grid-cols-4 gap-[3rem] "
      >
        {/* First */}
        <div>
          <h1 className="mb-[1.5rem] text-black text-[20px] font-bold">
            About Us
          </h1>
          <div>
            <a
              className="block mb-[1rem] hover:text-orange-400 w-fit "
              href="/about"
            >
              {" "}
              Corporate Mission
            </a>
            <a
              className="block mb-[1rem] hover:text-orange-400 w-fit "
              href="/about"
            >
              {" "}
              Corporate Value
            </a>
            <a
              className="block mb-[1rem] hover:text-orange-400 w-fit "
              href="/about"
            >
              {" "}
              Corporate Bussines Commitement
            </a>
          </div>
        </div>
        {/* Second */}
        <div>
          <h1 className="mb-[1.5rem] text-black text-[20px] font-bold">Shop</h1>
          <div>
            <a
              className="block mb-[1rem] hover:text-orange-400 w-fit "
              href="/product"
            >
              {" "}
              Promo
            </a>
            <a
              className="block mb-[1rem] hover:text-orange-400 w-fit "
              href="/product"
            >
              {" "}
              Best product
            </a>
            <a
              className="block mb-[1rem] hover:text-orange-400 w-fit "
              href="/product"
            >
              {" "}
              Product info
            </a>
          </div>
        </div>
        {/* Third */}
        <div>
          <h1 className="mb-[1.5rem] text-black text-[20px] font-bold">
            Support
          </h1>
          <div>
            <a
              className="block mb-[1rem] hover:text-orange-400 w-fit "
              href="/team"
            >
              {" "}
              Contact Us
            </a>
            <a
              className="block mb-[1rem] hover:text-orange-400 w-fit "
              href="/team"
            >
              {" "}
              Feedback
            </a>
            <a
              className="block mb-[1rem] hover:text-orange-400 w-fit "
              href="/team"
            >
              {" "}
              Service Center
            </a>
          </div>
        </div>
        {/* Foutrh */}
        <div>
          <h1 className="mb-[1.5rem] text-black text-[20px] font-bold">
            Sustainabilty
          </h1>
          <div>
            <a
              className="block mb-[1rem] hover:text-orange-400 w-fit "
              href="/"
            >
              {" "}
              Corporate Citizenship
            </a>
            <a
              className="block mb-[1rem] hover:text-orange-400 w-fit "
              href="/"
            >
              {" "}
              Corporate Sustainability
            </a>
            <a
              className="block mb-[1rem] hover:text-orange-400 w-fit "
              href="/"
            >
              {" "}
              Aksesability
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
