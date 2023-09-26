"use client";
import React from "react";
import { CartsActions } from "@/Redux_Store/CartSlice/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/Redux_Store/Store";
import Image from "next/image";
import Wrapper from "./Wrapper";
export default function ProductCart() {
  const CounterValue = useSelector((state: RootState) => state.Carts.value);
  const dispatch = useDispatch();
  function increment() {
    dispatch(CartsActions.Increment());
  }
  function decrement() {
    dispatch(CartsActions.Decrement());
  }

  return (
    <>
      <Wrapper>
        <div className="flex justify-between items-center">
          <span
            onClick={increment}
            className=" flex justify-center text-3xl font-bold  items-center shadow-lg bg-yellow-400 border-slate-600 w-8 h-8 md:w-12 md:h-12 rounded-lg mx-2 mt-4"
          >
            +
          </span>
          <h3>{CounterValue}</h3>
          <span
            onClick={decrement}
            className=" flex justify-center text-3xl font-bold  items-center shadow-lg bg-yellow-400 border-slate-600 w-8 h-8 md:w-12 md:h-12 rounded-lg mx-2 mt-4"
          >
            -
          </span>
        </div>
      </Wrapper>
    </>
  );
}
