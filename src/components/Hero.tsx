import  React from "react";
import Image from "next/image";
import picture from "/public/img1.webp";
import co1 from "/public/Featured1.webp";
import co2 from "/public/Featured2.webp";
import co3 from "/public/Featured3.webp";
import co4 from "/public/Featured4.webp";
import { CgShoppingCart } from "react-icons/cg";
import Wrapper from "./Wrapper";
export default function Poster() {
  return (
    <>
      <Wrapper>
        <section className="flex-row md:flex  justify-center items-center">
          {/* //left side container  */}
          <div className="  md:w-1/2">
            <div className=" w-24 h-8 rounded-lg text-center bg-blue-100 font-Sora,sans-serif  hover:bg-blue-100 text-lg text-blue-700">
              Sale 70%
            </div>
            <h1 className="scroll-m-20  mt-10">
              An Industrial Take on Strewer
            </h1>
            <p className=" mt-4 text-[#666] pr-18">
              Anyone can beat you but no one can beat your outfit as long as you
              wear Dine outfits.
            </p>
            <div className="w-[160px] rounded-lg bg-slate-900 inset-0  text-lg text-slate-300 gap-2 px-3 mt-8 h-20">
              {" "}
              <CgShoppingCart className="inset-0 mx-auto" size={40} />
              Start Shopping
            </div>
            {/* //companies logo container */}
            <div className="flex justify-between items-center my-8">
              <Image src={co1} alt="Picture" />
              <Image src={co2} alt="Picture" />
              <Image src={co3} alt="Picture" />
              <Image src={co4} alt="Picture" />
            </div>
          </div>
          {/* //right side container */}
          <div className="  md:w-1/2 flex justify-center z-20">
            <div className="relative  items-center bg-orange-100 rounded-full ">
              <Image src={picture} alt="Picture" />
            </div>
          </div>
        </section>
      </Wrapper>
    </>
  );
}
