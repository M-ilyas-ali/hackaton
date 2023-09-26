import React from "react";
import { Image as IImage } from "sanity";
import Image from "next/image";
import { get_data } from "@/components/components_parts/getdata";
import Product_Description from "@/components/components_parts/Product_Description";
import { urlForImage } from "../../../../sanity/lib/image";
import Wrapper from "@/components/Wrapper";
import { Data_Type } from "@/types";
import ProductCard from "@/components/ProductCard";

type Props = {
  params: {
    product: string;
  };
};
export default async function Product({ params }: Props) {
  const Data = get_data();
  //   const Data:Data_Type[]= get_data();
  //! agar main Data_Type likhu hu to Data_of_Product (undefine ata hy )???
  // const Data_of_Product= Pro_Data.find((items:any)=>items.slug.current===params.product)
  const Pro_Data = await Data;
  const Data_of_Product = Pro_Data.find(
    (items: any) => items.slug.current === params.product
  );
  return (
    <>
      <Wrapper>
        <div className=" grid grid-cols-1 md:grid-cols-3 ">
          {/* //? this is container of three flex container 2 with images and 1 with text */}
          <div className="flex gap-4 col-span-2 ">
            <div className="hidden md:flex -me-1">
              <Image
                className=" max-h-[300px] rounded-2xl object-cover mt-4 object-top"
                src={urlForImage(Data_of_Product.image).url()}
                width={300}
                height={500}
                alt="ola"
              />
            </div>
            <div>
              <Image
                className="max-h-[625px] mt-4 rounded-2xl object-cover object-top"
                src={urlForImage(Data_of_Product.image).url()}
                width={582.93}
                height={625.73}
                alt="ola"
              />
            </div>
          </div>
          <div className=" col-span-1 flex flex-col justify-center mt-4 space-y-8 pl-4">
            <h2 className=" tracking-wider font-mono text-slate-700">
              {Data_of_Product.title}
            </h2>
            <h4 className="text-gray-400  tracking-wide  ">
              {"Shirt "}
              {Data_of_Product.name}
            </h4>
            <p className="font-bold ">SELECT SIZE</p>
            <ul className="flex text-md text-gray-600  font-bold justify-around">
              <li className=" flex rounded-full w-[40px] h-[40px]  justify-center items-center shadow-slate-800 shadow-lg hover:shadow-red-800 hover:shadow-xl">
                XS
              </li>
              <li className=" flex rounded-full w-[40px] h-[40px]  justify-center items-center shadow-slate-800 shadow-lg hover:shadow-red-800 hover:shadow-xl">
                S
              </li>
              <li className=" flex rounded-full w-[40px] h-[40px]  justify-center items-center shadow-slate-800 shadow-lg hover:shadow-red-800 hover:shadow-xl">
                M
              </li>
              <li className=" flex rounded-full w-[40px] h-[40px]  justify-center items-center shadow-slate-800 shadow-lg hover:shadow-red-800 hover:shadow-xl">
                L
              </li>
              <li className=" flex rounded-full w-[40px] h-[40px]  justify-center items-center shadow-slate-800 shadow-lg hover:shadow-red-800 hover:shadow-xl">
                XL
              </li>
            </ul>
            <p className="font-bold ">QUANTITY</p>
            <ProductCard/>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              {`$-${Data_of_Product.price}`}
            </h3>
          </div>
        </div>
     
        <Product_Description />
      </Wrapper>
    </>
  );
}
//todo this function will make static pages 
export async function generateStaticParams() {
  const data: Promise<Data_Type[]> = get_data();
  const allproducts_data= await data
  return allproducts_data.map((items) => ({
    //? i want to replace [product] name with which ever is the slug name cause we are 
    //? make pages on the bases of slug 
    product:items.slug.current
  }));
}