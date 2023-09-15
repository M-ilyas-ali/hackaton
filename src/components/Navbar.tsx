"use client";
import Link from "next/link";
import Wrapper from "./Wrapper";
import Image from "next/image";
import logo from "../../public/Logo.jpg";
import { GoSearch } from "react-icons/go";
import { CgShoppingCart, CgMenu } from "react-icons/cg";
import { useState } from "react";
export default function Navbar() {
  let [toggle, settoggle] = useState(false);
  return (
    <>
      <Wrapper>
        <div className=" pt-8 pb-8">
          <div className=" hidden lg:flex  font-bold border-gray-500 border-[1px] rounded-lg items-center justify-around h-12">
            <Link href="#">
              <Image src={logo} alt="logo" className=" animate-bounce" />
            </Link>
            <ul className="flex w-[30%] justify-between">
              <li className="hover:scale-125 duration-300 hover:text-slate-800 ">
                <Link href="#">Female</Link>
              </li>
              <li className="hover:scale-125 duration-300 hover:text-slate-800 ">
                <Link href="#">Male</Link>
              </li>
              <li className="hover:scale-125 duration-300 hover:text-slate-800 ">
                <Link href="#">Children</Link>
              </li>
              <li className="hover:scale-125 duration-300 hover:text-slate-800 ">
                <Link href="#">All-Products</Link>
              </li>
            </ul>
            <div className="w-[30%] p-1 flex justify-start items-center border-2 rounded-md border-gray-200 gap-1">
              <GoSearch size={20} />
              <input
                type="text"
                placeholder="Search In Our Store"
                className=" w-full h-8 rounded-lg "
              />
            </div>
            <div className="w-10 h-10 flex hover:scale-125 duration-150 bg-orange-500 rounded-full items-center justify-center">
              <CgShoppingCart
                size={30}
                className=" animate-bounce duration-500"
              />
            </div>
          </div>
        </div>
        {/* //! this is second navbar */}
        <div className=" pt-8 pb-8">
          <div className=" lg:hidden  font-bold border-gray-500 border-[1px] rounded-lg h-12">
            <Link
              href="#"
              className="flex justify-between items-center mt-2 mx-4"
            >
              <Image src={logo} alt="logo" className=" animate-bounce" />
              <CgMenu size={30} onClick={() => settoggle(!toggle)} />
            </Link>

            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } justify-end items-center my-4 mr-2`}
            >
              <div className="w-10 h-10 flex gap-y-2 bg-orange-500 rounded-full items-center justify-center">
                <CgShoppingCart size={30} />
              </div>
            </div>
            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } justify-end items-center mt-2 `}
            >
              <ul className="space-y-3 flex flex-col  items-end ">
                <li className="hover:scale-125 duration-300 hover:text-amber-500 ">
                  <Link href="#">Female</Link>
                </li>
                <li className="hover:scale-125 duration-300 hover:text-amber-500 ">
                  <Link href="#">Male</Link>
                </li>
                <li className="hover:scale-125 duration-300 hover:text-amber-500 ">
                  <Link href="#">Children</Link>
                </li>
                <li className="hover:scale-125 duration-300 hover:text-amber-500 ">
                  <Link href="#">All-Products</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
