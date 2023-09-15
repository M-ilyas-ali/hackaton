import Image from "next/image";
import Wrapper from "./Wrapper";
export default function Intro() {
  return (
    <Wrapper>
      <div className="grid lg:grid-cols-2">
        <div className=" flex relative  col md:flex justify-center items-center  ">
          <div className=" basis-1/2  Sora,sans-serif z-20 md:mx-4 space-y-4">
            <h3 className=" tracking-tight">Using Good Quality Material</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <h3>Modern Fashion Design</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <div className=" basis-1/2 Sora,sans-serif z-20 md:mx-4 space-y-4">
            <h3>100% Handsome Products</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <h3>Discount for Bulk Orders</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className=" flex  absolute justify-center lg:col-span-2  text-center text-[4rem] sm:text-7xl  md:text-8xl xl:text-9xl font-bold Sora,sans-serif  text-slate-100  divide-y-4">
            Different From Others
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center space-y-3">
            <div className="text-center font-sans text-slate-400 ">
              <h1>Unique and Authentic Vintage Designer Cloth</h1>
            </div>
            <div className=" flex ">
              <div className=" flex basis-1/2  justify-center items-center ">
                <Image
                className=" object-fill"
                  src="/product_images/boy 1.png"
                  alt={"product"}
                  width={300}
                  height={300}
                />
              </div>
              <div className="  basis-1/2 flex flex-col justify-center items-center "> <p>This place is ethically crafted in our small family owned workshop in pakistan with unmatched attention to detail and care.The Natural color is the actual Natural color of the fiber undyed and 100% traceable</p>
              <button className=" mt-4 hover:scale-90 duration-300  bg-slate-950 max-w-full rounded-lg p-4 mb-4 text-white">
                See All-Products
              </button>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
