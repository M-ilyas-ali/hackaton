
import { client } from "../../../sanity/lib/client";
export const get_data = async () => {
    const data = await client.fetch(`*[_type=="products"]{
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
      }
  }`);
    return data;
  };