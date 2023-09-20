"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { urlForImage } from "../../sanity/lib/image";
import { get_data } from "@/components/components_parts/getdata";
import "swiper/css";
import "swiper/css/free-mode";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "./Wrapper";
import { Data_Type } from "@/types";

const Swiper_Slide = async () => {
  const data: Promise<Data_Type[]> = get_data();
  const product_data = await data;
  return (
    <Wrapper>
      <div className=" py-28">
        <h5 className="text-center text-blue-500 py-3">Product</h5>
        <h2 className=" text-center py-3">Check What We Have</h2>
        <div className="container  py-4 px-4 justify-content-center bg-gradient-to-tr from-slate-400 to-slate-200 rounded-2xl ">
          <Swiper
            slidesPerView={4}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {product_data.map((items, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col justify-center px-5 py-10 items-center">
                  <div className="flex flex-col justify-center items-start h-[400px]  w-full hover:scale-110 ease-in duration-300 ">
                    <div className=" bg-gray-200 rounded-xl hover:scale-105 duration-300 text-center space-y-2">
                      <Link href={`products/${items.slug.current}`}>
                        <p className="text-xl text-black text-muted-foreground mt-2 self-center">
                          {items.title}
                        </p>
                        <h4 className="text-md text-gray-400 ">
                          {" "}
                          {items.name}
                        </h4>
                        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                          {`$-${items.price}`}
                        </h3>
                        <Image
                          className="max-h-[300px] object-cover object-top rounded-b-xl"
                          src={urlForImage(items.image).url()}
                          width={300}
                          height={340}
                          alt="ola"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Wrapper>
  );
};

export default Swiper_Slide;
