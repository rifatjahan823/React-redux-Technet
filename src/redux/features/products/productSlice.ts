import {  createSlice } from "@reduxjs/toolkit";
import type{ PayloadAction} from "@reduxjs/toolkit";

interface IProductFilter{
    status:boolean;
    priceRange:number
}
const initialState:IProductFilter={
    status:false,
    priceRange:150
}


const productSlice=createSlice({
    name:'ProductFilter',
    initialState,
    reducers:{
        toggleState:(state)=>{
            state.status=!state.status
        },
        setPriceRange:(state,action:PayloadAction<number>)=>{
            state.priceRange=action.payload;
        }
    }
})


export default productSlice.reducer
export const {toggleState,setPriceRange}=productSlice.actions