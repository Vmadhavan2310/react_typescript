import { createSlice } from "@reduxjs/toolkit"

interface initialStatetype{
    count:number
}
const initialState={
    count:0
} as initialStatetype

const counterSlice=createSlice({
    name:'count',
    initialState,
    reducers:{
        increment:(state)=>{
             state.count+=1
        },
        decrement:(state)=>{
             state.count-=1;
        },
        default:(state)=>{
            return state
        }
    }
})

export const {increment,decrement}=counterSlice.actions;
export default counterSlice