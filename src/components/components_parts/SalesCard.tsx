
import * as React from "react"
import Image, { StaticImageData } from "next/image";
interface SalesCardTypes {
  src: StaticImageData;
  discount: string;
  title: string;
}
export default function SalesCard({ src, discount, title }: SalesCardTypes) {
  return (
    <div className=" bg-[#d7d7d9] flex justify-around items-center  my-2 px-1 md:my-4 md:px-4 text-left">
      <div className="flex-1">
        <h3 className="scroll-m-20  font-Sora,sans-serif font-bold text-2xl  lg:text-4xl">
          {discount}
        </h3>
        <p className="leading-7 flex self-start [&:not(:first-child)]:mt-6 text-lg md:text-xl font-Sora,sans-serif">
          {title}
        </p>
      </div>
      <Image src={src} width={300} height={400} alt="Picture" />
    </div>
  );
}
