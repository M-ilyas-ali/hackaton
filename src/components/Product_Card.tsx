import React from "react";
// import { getStatictData } from "@/lib/getStaticData";
// import { Image as IImage } from "sanity";
import Image from "next/image";
import Product_Description from "./components_parts/Product_Description";
import Wrapper from "./Wrapper";
// import { urlForImage } from "../../../../sanity/lib/image";
// import { useParams } from "next/navigation";
// import Description from "@/components/Description";
// import Counts from "@/components/Count";
// import { Button } from "@/components/ui/button";
// interface Cart_prop_Type {
//   _id: string;
//   price: string;
//   title: string;
//   image: IImage;
//   className?: string;
//   description: string;
//   category: {
//     name: string;
//   };
// }

//! when deploying on vercel dynamic path is not working don't know why
//? find out the reason of dynamic path error
// export default async function ProductID({
//   params,
// }: {
//   params: { ID: string };
// }) {
  // const dynamic_param = useParams();
//   const Static_Data: Promise<Cart_prop_Type[]> = getStatictData();
//   const data = await Static_Data;
  // const { ID } = dynamic_param;
  // console.warn(ID);
  export default function Product_Slug(){
  return (
    <>
    {/* //! this is main section tag in with  */}
    <Wrapper>
      
        {/* {data.map((items) =>
          items._id == `${params.ID}` ? ( */}
            {/* //todo this div tags contained two div one with images and second with size etc text */}
            {/* key={items._id} */}
            <div className=" grid grid-cols-1 md:grid-cols-3 " >
              {/* //? this is container of three flex container 2 with images and 1 with text */}
              <div className="flex gap-4 col-span-2 ">
                <div className="hidden md:flex -me-1">
                  <Image
                    className=" max-h-[300px] rounded-2xl object-cover mt-4 object-top"
                    src={"/product_images/girl3.png"}
                    // src={urlForImage(items.image).url()}
                    width={300}
                    height={500}
                    alt="ola"
                  />
                </div>
                <div>
                  <Image
                    className="max-h-[625px] mt-4 rounded-2xl object-cover object-top"
                    src={"/product_images/girl3.png"}
                    // src={urlForImage(items.image).url()}
                    width={582.93}
                    height={625.73}
                    alt="ola"
                  />
                </div>
              </div>
              <div className=" col-span-1 flex flex-col justify-center mt-4 space-y-8 pl-4">
                <h2 className=" tracking-wider font-mono text-slate-700">
                  {/* {items.title} */"Shirt"}
                </h2>
                <h4 className="text-gray-400  tracking-wide  ">
                  {"Shirt "}
                  {/* {items.description} */}
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
                {/* <Counts/> */}
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  {/* {items.price} */900}
                </h3>
              </div>
             
              
            </div>
          {/* ) :""
        )} */}
       <Product_Description/>
        
      
      </Wrapper>
    </>
  );
}
