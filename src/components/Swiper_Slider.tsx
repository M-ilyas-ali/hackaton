"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import Image from "next/image";
import Link from "next/link";
import { FreeMode } from "swiper/modules";
import Wrapper from "./Wrapper";

const Swiper_Slide = () => {
  return (
    <Wrapper>
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
        <SwiperSlide>
          <div className="flex flex-col justify-center px-5 py-10 items-center">
            <div className="flex flex-col justify-center items-start h-[400px]  w-full hover:scale-110 ease-in duration-300 ">
              <Link href={"#"}>
                <Image 
                  src="/product_images/boy.png"
                  alt={"product"}
                  width={300}
                  height={300}
                />
                <p className="text-base font-bold text-center my-3">
                  product name
                </p>
                <p className="text-base font-bold text-center">price</p>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-center px-5 py-10 items-center">
            <div className="flex flex-col justify-center items-start h-[400px] mx-10 w-full hover:scale-110 ease-in duration-300 gap-3">
              <Link href={"#"}>
                <Image
                  src="/product_images/boy 1.png"
                  alt={"product"}
                  width={300}
                  height={300}
                />
                <p className="text-base font-bold text-center my-3">
                  product name
                </p>
                <p className="text-base font-bold text-center">price</p>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-center px-5 py-10 items-center">
            <div className="flex flex-col justify-center items-start h-[400px] mx-10 w-full hover:scale-110 ease-in duration-300 gap-3">
              <Link href={"#"}>
                <Image 
                  src="/product_images/boy2.png"
                  alt={"product"}
                  width={300}
                  height={300}
                />
                <p className="text-base font-bold text-center my-3">
                  product name
                </p>
                <p className="text-base font-bold text-center">price</p>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-center px-5 py-10 items-center">
            <div className="flex flex-col justify-center items-start h-[400px] mx-10 w-full hover:scale-110 ease-in duration-300 gap-3">
              <Link href={"#"}>
                <Image 
                  src="/product_images/boy3.png"
                  alt={"product"}
                  width={300}
                  height={300}
                />
                <p className="text-base font-bold text-center my-3">
                  product name
                </p>
                <p className="text-base font-bold text-center">price</p>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-center px-5 py-10 items-center">
            <div className="flex flex-col justify-center items-start h-[400px] mx-10 w-full hover:scale-110 ease-in duration-300 gap-3">
              <Link href={"#"}>
                <Image 
                  src="/product_images/boy 1.png"
                  alt={"product"}
                  width={300}
                  height={300}
                />
                <p className="text-base font-bold text-center my-3">
                  product name
                </p>
                <p className="text-base font-bold text-center">price</p>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    </Wrapper>
  );
};

export default Swiper_Slide;
