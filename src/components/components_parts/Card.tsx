
import * as React from "react"
import Image, { StaticImageData } from "next/image";
interface Cart_prop_Type {
  price: string;
  title: string;
  src: StaticImageData;
  className?: string;
}
export default function Card({ className, price, title, src }: Cart_prop_Type) {
  return (
    <>
      <div>
      <p className="text-xl text-black text-muted-foreground mt-2 self-center">{title}</p>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          {price}
        </h3>
        <Image src={src} width={280} height={340}  alt="ola" className={className}/>
       
      </div>
    </>
  );
}
