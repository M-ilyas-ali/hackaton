

import * as React from "react"
import SalesCard from "@/components/components_parts/SalesCard";
import BoyImage from "/public/imgboy2.webp";
import GirlImage from "/public/imggirl1.webp";
import Sales_Card_Dark from "@/components/components_parts/Sales_Card_Dark";
import Card from "@/components/components_parts/Card";

export default function SalesOffer() {
  return (
    <>

    <div className="flex-col justify-center items-center py-4 mt-20">
    <h3 className="scroll-m-20 text-sm text-blue-400 text-center font-Sora,sans-serif font-bold lg:text-lg">
            Promotions 
          </h3>
          <h3 className="scroll-m-20 text-2xl text-center tracking-widest font-Sora,sans-serif font-bold lg:text-4xl">
            Our Promotions Events
          </h3>
        </div>
      <section className=" grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 w-screen h-full gap-6 px-16 lg:px-36">
        <div className="flex-1 ">
          <SalesCard
            src={GirlImage}
            title="For the summer season"
            discount="GET UP TO 60%"
          />
          <Sales_Card_Dark
            title="USE PROMO CODE"
            discount="GET 30% Off"
            but_title="DINEWEEKENDSALES"
          />
        </div>
        <div className="flex-1 flex justify-around items-center gap-2">
          <Card
            src={BoyImage}
            title="Flex Sweatshirt"
            price="$ 70.24"
            className="bg-gray-400"
          />
          <Card
            src={BoyImage}
            title="Flex Sweatshirt"
            price="$ 70.24"
            className="bg-orange-300"
          />
        </div>
      </section>
    </>
  );
}
