import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./Redux_reducer";
export const store=configureStore({
    reducer:{
        counts: counterSlice.reducer
    }
})
