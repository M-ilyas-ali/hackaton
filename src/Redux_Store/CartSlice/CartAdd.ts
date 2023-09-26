import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { urlForImage } from "../../../sanity/lib/image";
import { Data_Type } from "@/types";
interface Cart_Type {
  products_items: Array<Data_Type>;
  totalAmount: number;
  totalQuantity: number;
  isLoading: boolean;
  error: any;
}
const initialState: Cart_Type = {
  products_items: [],
  totalQuantity: 0,
  totalAmount: 0,
  isLoading: false,
  error: null,
};
export const Add_Cart = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    
    //* we are defining hear type of state is equal to type of initial state
    //?and we are getting two thing from user first is product that could be any product
    //! and second is Quantity of products
    //?
    add_in_Cart(
      state: Cart_Type,
      action: PayloadAction<{ product: Data_Type; quantity: number }>
    ) {
      //* at first we have to find if product already exist in array or not if it is then
      const New_Product = action.payload.product;
      const Existing_Product = state.products_items.find(
        (item) => item._id === New_Product._id
      );
      state.totalQuantity = state.totalQuantity + action.payload.quantity;
      state.totalAmount =state.totalAmount +action.payload.quantity * action.payload.product.price;
      if (!Existing_Product) {
        const totalPrice = New_Product.price * action.payload.quantity;
        state.products_items.push({
          ...New_Product,
          // @ts-ignore
          image: urlForImage(newItem.image).url(),
          price: action.payload.product.price,
        });
      } else {
        const totalPrice = Existing_Product.price * action.payload.quantity;
      }
    },
  },
});
