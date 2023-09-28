"use client";
import React, { useState } from "react";
import { CartsActions } from "@/Redux_Store/CartSlice/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/Redux_Store/Store";
import { Data_Type } from "@/types";
import { urlForImage } from "../../sanity/lib/image";
type Props={
  Product:Data_Type,
  userID:string,
}
//* getting product and user id from product slug page as props in this page 
export default function ProductCart(props:Props) {
  const[isLoading,setIsLoading]=useState(false)
  const CounterValue = useSelector((state: RootState) => state.Carts.value);
  const dispatch = useDispatch();
  function increment() {
    dispatch(CartsActions.Increment());
  }
  function decrement() {
    dispatch(CartsActions.Decrement());
  }
  //? sending data to vercel database if their any issue then show error
   async function SendData() {
    const res= await fetch("/api/cart",{
      method:"POST",
      body:JSON.stringify({
      
        user_id:props.userID,
        product_id:props.Product._id,
        name:props.Product.name,
        title:props.Product.title,
        description:props.Product.description,
        price:props.Product.price,
        quantity:CounterValue,
        total_price:props.Product.price*CounterValue,
        image:urlForImage(props.Product.image).url(),
      })
    });
    if(!res.ok){
      throw new Error("Failed to Send Data 😢")
    }
   };
   //* now we check the data we send if it is already send if it is 
   //*then we only update quantity and price not the product
   //? request we have send if it is equal to the props.product.id 
   //?then it means it already exist in database with same user id
   //! but before this we have to Get data from server on bases on user id
   async function Get_Data(){
    const res= await fetch(`/api/products/${props.userID}`);
    if(!res.ok){
      throw new Error("Could not Get Data from Server 🥵");
    }
    const Received_Data= await res.json();
    console.log(Received_Data)
    return Received_Data;
   }
  
   async function CheckData(){
    setIsLoading(true);
    const Data= await Get_Data();
    const Existing= Data.cart_data.find((items:any)=>(items.product_id===props.Product._id))
    if(Existing){
      const new_Quantity=Existing.quantity+CounterValue;
      const new_total_price=props.Product.price* new_Quantity;
      const res= await fetch("/api/cart",{
        method:"PUT",
        body:JSON.stringify({
          product_id:props.Product._id,
          quantity:new_Quantity,
          total_price:new_total_price
        })
      });
      if(!res.ok){
        throw new Error("fail to update data");
      }
    }else{
      await SendData();
    }
  
   }
  return (
    <>
     
        <div className="flex justify-between items-center bg-orange-400">
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
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight ">
              {`$-${props.Product.price}`}
            </h3>
            <button  onClick={CheckData} className="  hover:scale-90 duration-300  bg-slate-950 max-w-full rounded-lg p-4 mb-4 text-white">
                ADD TO CART
              </button>
      
    </>
  );
}
