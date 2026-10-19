import { createSlice } from "@reduxjs/toolkit";

const nameSlice = createSlice({
    name:'counter',
    initialState:{
        value:0
    },
    reducers:{
        increment:state=>{state.value+=1;},
        // increment:(state)=>{
        //     state.value+=1;
        // },
        decrement:(state)=>{
            state.value-=1;
        }
    }

});
export const {increment,decrement} = nameSlice.actions;
export default nameSlice.reducer;