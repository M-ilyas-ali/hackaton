import { defineType, defineField } from "sanity";
export const category = defineType({
  type: "document",
  title: "Category",
  name: "category",
  fields: [
    defineField({
      type: "string",
      title: "Category Name",
      name: "name",
    }),
  ],
});
