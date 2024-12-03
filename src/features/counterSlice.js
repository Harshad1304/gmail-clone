import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:'counter',
    initialState:{
        value: 0,
    },
    reducers:{

    }
});


export const { } = counterSlice.actions

export default counterSlice.reducer