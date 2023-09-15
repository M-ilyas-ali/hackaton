import { configureStore } from "@reduxjs/toolkit";
//? import all slice from slice function in store
import Carts from './CartSlice/CartSlice'
//* in {we have function name} and after from we have file name
export const Store=configureStore({
    reducer:{Carts}
});
//! Inferred the 'RootState' and 'AppDispatch' type from the store itself
export type RootState=ReturnType<typeof Store.getState>;
//? inferred type:{posts:PostsState, comments:CommentsState,users:UsersState}
export type AppDispatch=typeof Store.dispatch;
