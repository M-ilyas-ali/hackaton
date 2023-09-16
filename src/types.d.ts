import { Image as IImage } from "sanity";
export interface Data_Type {
    _id: string;
    price: number;
    name:string;
    title: string;
    image: IImage;
    className?: string;
    description: string;
    category: {
      name: string;
    };
    slug: {
      current: string;
    };
  }