import { defineType, defineField } from "sanity";
export const Gallery = defineType({
  name: "gallery",
  type: "document",
  title: "Gallery",
  fields: [
    defineField({
      name: "images",
      type: "array",
      title: "Images",
      of: [
        defineField({
          name: "image",
          type: "image",
          title: "Image",
        }),
        
      ],
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
