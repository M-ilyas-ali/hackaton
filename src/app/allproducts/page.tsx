import { get_data } from "@/components/components_parts/getdata";
import { urlForImage } from "../../../sanity/lib/image";
import { Data_Type } from "@/types";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "@/components/Wrapper";
export default async function AllProducts() {
  const data: Promise<Data_Type[]> = get_data();
  const product_data = await data;
  return (
    <Wrapper>
      <section className="grid place-content-center gap-8 md:gap-20 sm:grid-cols-[auto,auto] xl:grid-cols-[auto,auto,auto,auto]  lg:grid-cols-[auto,auto,auto] lg:grid-rows-[auto,auto,]   ">
        {product_data.map((items, index) => (
          <div
            key={items._id}
            className=" bg-gray-200 rounded-xl hover:scale-105 duration-300 text-center space-y-2"
          >
            <Link href={`products/${items.slug.current}`}>
              <p className="text-xl text-black text-muted-foreground mt-2 self-center">
                {items.title}
              </p>
              <h4 className="text-md text-gray-400 "> {items.name}</h4>
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                {`$-${items.price}`}
              </h3>
              <Image
                className="max-h-[300px] object-cover object-top rounded-b-xl"
                src={urlForImage(items.image).url()}
                width={300}
                height={340}
                alt="ola"
              />
            </Link>
          </div>
        ))}
      </section>
    </Wrapper>
  );
}
