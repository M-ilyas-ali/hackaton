import { defineType, defineField } from "sanity";
import { category } from "./category";
export const products = defineType({
  type: "document",
  title: "products title",
  name: "products",
  fields: [
    defineField({
      type: "string",
      title: "product-title",
      name: "title",
    }),
    defineField({
      name: "name",
      title: "product-name",
      type: "string",
    }),
    defineField({
      type: "number",
      title: "price tag",
      name: "price",
    }),
    defineField({
      type:"string",
      title: "product description",
      name: "description",
    }),
    defineField({
      type: "image",
      title: "product image",
      name: "image",
    }),
    defineField({
      type: "slug",
      title: "Slug",
      name: "slug",
      options:{
        source:"title"
      }
    }),
    defineField({
      type: "reference",
      title: "Product Category",
      name: "category",
      to: [
        {
          type: "category",
        }
      ]
    })
  ],
});
