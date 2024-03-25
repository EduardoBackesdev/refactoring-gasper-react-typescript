import { configureStore } from "@reduxjs/toolkit";
import pagesSlice from "./Slices/pagesSlice";

export const store = configureStore({
    reducer: {
        page: pagesSlice
    }
})

export type RootState = ReturnType<typeof store.getState>