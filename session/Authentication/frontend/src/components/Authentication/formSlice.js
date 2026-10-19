import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
    name:"form",
    initialState:{
        username:'',
        email:'',
        password:''
    },
    reducers:{
        // onchange:(e)=>{e.target.value}
        setValue : (state,action)=>{
            
            // if(action.payload.type=="username")
            // {
            //     console.log("usernaem is called");
            //     state.username=action.payload
            // }
                
            switch (action.payload.type) {
                case "username":
                     state.username=action.payload.name;
                    //  console.log(state.username)
                     break;
                
                case "email":
                     state.email=action.payload.name;
                    break;

                case "password":
                     state.password = action.payload.name;
                     break;

                default:
                    return state;
            }
            // console.log(state.username);
            
        }
    }
});

export const {setValue}=formSlice.actions;
export default formSlice.reducer;