import React from "react";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Promotions from "@/components/Promotion";
import Swiper_Slider from "@/components/Swiper_Slider";

export default function Home() {
  return (
    <>
      <Hero />
      <Promotions />
      <Swiper_Slider />
      <Intro />
    </>
  );
}
