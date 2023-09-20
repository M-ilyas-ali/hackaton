import Wrapper from "@/components/Wrapper";
import { client } from "../../../sanity/lib/client";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";
import { Data_Type } from "@/types";

type Props = {
  params: {
    slug: string;
  };
};

const get_Category = async ({ params }: Props) => {
  const slug_Val = params.slug;
  const query = `*[_type == "products" && category -> name == "${slug_Val}"] {
    _id,
      price,
      title,
      image,
      title,
        name,
        slug,
        description,
      category->{
        name
      },
  }`;
  const res = await client.fetch(query);
  return res;
};

const Categories = async ({ params }: Props) => {
  const products: Data_Type[] = await get_Category({ params });
  return (
    <>
      
      <Wrapper>
      <section className="grid place-content-center gap-8 md:gap-20 sm:grid-cols-[auto,auto] xl:grid-cols-[auto,auto,auto,auto]  lg:grid-cols-[auto,auto,auto] lg:grid-rows-[auto,auto,]   ">
        {products.map((items, index) => (
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
      
     
      
    </>
  );
};

export default Categories;

// type ICategory = {
//   slug: {
//     current: string;
//   };
// };

// export async function generateStaticParams() {
//   const query = `*[_type == "category"] {
//       slug {
//       current
//       },
//   }`;
//   const res: ICategory[] = await client.fetch(query);

//   return res.map((category) => ({
//     slug: category.slug.current,
//   }));
// }
