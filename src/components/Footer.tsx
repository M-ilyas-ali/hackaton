
import React from "react";
import Image from "next/image";
import { Facebook } from "lucide-react";
import { Twitter } from "lucide-react";
import { Linkedin } from "lucide-react";
import Right from "./components_parts/Footer_Right_Side";
import Button2 from "./Button2";
import Wrapper from "./Wrapper";
export default function Footer() {
  const Foot = (
    <>
      {/* //* Main Section of Footer */}
      <Wrapper>
      <section className="flex flex-col  bg-white m">
        {/* //? Footer top section */}
        <div className="flex flex-col md:flex-row  text-slate-600  bg-white py-16 justify-evenly h-full">
          <div className=" md:basis-1/4  col-span-2 flex-col">
            <Image
              className="py-2 animate-bounce"
              src={"/logo.jpg"}
              alt={"logo"}
              width={200}
              height={20}
            ></Image>

            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Small, artist label that offer a thoughtfully curated collection
              of high quantity everyday essentials made
            </p>

            <div className="flex">
            <Button2><Facebook className="mx-auto hover:scale-150 duration-300"/></Button2>
              <Button2><Twitter className="mx-auto hover:scale-150 duration-300"/></Button2>
              <Button2><Linkedin className="mx-auto hover:scale-150 duration-300"/></Button2>

            </div>
          </div>
          <div className="md:basis-1/5 flex-col ">
            <h4 className="scroll-m-20 text-xl font-bold tracking-tight py-4">
              Company
            </h4>
            <ul className="space-y-4 mx-auto md:mx-0 ">
              <li>About</li>
              <li>team of Use</li>
              <li>Private Policy</li>
              <li>How it Work</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className=" md:basis-1/5">
            <h4 className="scroll-m-20 text-xl font-bold tracking-tight py-4">
              Support
            </h4>
            <ul className=" space-y-4">
              <li>Support Carrier</li>
              <li>24h Service</li>
              <li>Quick Chat</li>
            </ul>
          </div>
          <div className=" md:basis-1/5">
            <h4 className="scroll-m-20 text-xl font-bold tracking-tight py-4">
              Contact
            </h4>
            <ul className=" space-y-4">
              <li>Whatsapp</li>
              <li>Support 24h</li>
            </ul>
          </div>
        </div>
        {/* //! copy Bottom section */}
       
      </section>
      </Wrapper>
      <Right />
    </>
  );
  return Foot;
}
