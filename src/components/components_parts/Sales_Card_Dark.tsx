import * as React from "react";
import { StaticImageData } from "next/image";

interface Sales_Card_DarkType {
  src?: StaticImageData;
  discount: string;
  title: string;
  but_title: string;
}
export default function Sales_Card_Dark({
  src,
  discount,
  title,
  but_title,
}: Sales_Card_DarkType) {
  return (
    <div className=" bg-[#212121] flex-col justify-center items-center text-center py-4 my-2">
      <h1 className="scroll-m-20 text-white font-Sora,sans-serif font-bold text-2xl  lg:text-4xl">
        {discount}
      </h1>
      <p className="leading-7 text-white [&:not(:first-child)]:mt-6 text-lg md:text-xl font-Sora,sans-serif">
        {title}
      </p>

      <button className="  hover:scale-90 duration-300 my-2 bg-[#474747] tracking-widest max-w-full rounded-lg p-4 mb-4 text-white">
        DINEWEEKENDSALE
      </button>
    </div>
  );
}
