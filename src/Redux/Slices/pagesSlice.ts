import { createSlice } from "@reduxjs/toolkit";

type pages =
| "main";

interface pagesInter{
    page: pages,
}

// Criação do slice
const initialState: pagesInter = {
page: "main",
}

const pagesSlice = createSlice({
    name: "page",
    initialState,
    reducers: {
        


    }
})

export const {
    
} = pagesSlice.actions;
export default pagesSlice.reducer;


