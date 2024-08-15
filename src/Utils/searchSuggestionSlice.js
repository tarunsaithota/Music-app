import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {

    },
    reducers: {
        addSearchSuggestions: (state, action)=>{
            state = Object.assign(state,action.payload)
        }
    }
})

export const {addSearchSuggestions} = searchSlice.actions;
export default searchSlice.reducer;