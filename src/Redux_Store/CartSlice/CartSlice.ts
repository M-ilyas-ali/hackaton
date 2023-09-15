import { createSlice ,PayloadAction} from "@reduxjs/toolkit";
export interface CartValue{
    value:number,
}
const initialState:CartValue={
    value:0,
}
export const Carts=createSlice({
    name:"counter",
    initialState,
    reducers:{
        "Increment":(state)=>{
            state.value+=1 
            },
            "Decrement":(state)=>{
                if(state.value>0){
                    state.value-=1
                }
            }
    },
})
export const CartsActions=Carts.actions;
export default Carts.reducer;