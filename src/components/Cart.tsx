import Image from "next/image";
import Wrapper from "./Wrapper";
import { AiFillDelete } from "react-icons/ai";
export default function Cart() {
  const Content = (
    <Wrapper>
      <section className="grid lg:grid-cols-3 grid-cols-1 ">
        {/* right side container */}
        <div className="md:flex col-span-2 bg-slate-200 justify-around items-center ">
          <div className="flex  gap-2 justify-center items-center">
            <Image
              src="/product_images/girl.png"
              width={240}
              height={240}
              alt="Picture"
              className=" rounded-xl"
            />

            <div className="space-y-2">
              <h3 className=" text-slate-600 font-thin tracking-tight">Flex Sweatshirt</h3>
              <h4 className="text-slate-600 font-thin ">Dress</h4>
              <h5 className=" font-semibold">Delivery Estimation</h5>
              <h5 className=" text-amber-500">5 Working Days</h5>
              <h4>$-600</h4>
            </div>
          </div>
          <div className="space-y-8 mt-2 md:space-y-20 flex flex-col justify-center items-center">
            <div className="hover:scale-125 duration-300">
              <AiFillDelete color={"red"} size={40} />
            </div>

            <div className="space-y-2">
              <h4>Quantity</h4>
              <h4>Price</h4>
            </div>
          </div>
        </div>

        {/* left side container */}
        <div className="col-span-1  ">
          <div className=" rounded-lg bg-slate-200 text-center inset-0 my-5 mx-5 space-y-2">
            <h3 className=" uppercase p-4 font-serif text-amber-600 bg-slate-300">
              Products Detail
            </h3>
            <div className=" flex justify-between rounded-lg items-center mx-4 ">
              <h5>total Quantity</h5>
              <h5>4</h5>
            </div>
            <div className="  flex justify-between rounded-lg items-center mx-4 ">
              <h5>Product Price</h5>
              <h5>400</h5>
            </div>
            <div className=" flex justify-between rounded-lg items-center mx-4 ">
              <h5>Total price</h5>
              <h5>1600</h5>
            </div>
            <div className=" flex justify-center items-center w-full">
              <button className="  hover:scale-90 duration-300  bg-slate-950 max-w-full rounded-lg p-4 mb-4 text-white">
                ADD TO CART{" "}
              </button>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
  return Content;
}
