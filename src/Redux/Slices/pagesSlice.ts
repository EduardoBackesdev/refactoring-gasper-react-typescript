import { createSlice } from "@reduxjs/toolkit";

type pages =
| "more"
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
        showModal: (state)=>{
            state.page = "more";
        }


    }
})

export const {
    showModal,
} = pagesSlice.actions;
export default pagesSlice.reducer;


