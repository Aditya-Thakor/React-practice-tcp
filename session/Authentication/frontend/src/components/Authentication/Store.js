import { configureStore } from "@reduxjs/toolkit";
import nameReducer from "./nameSlice";
import formReducer from "./formSlice";
// {nameReducer}^
export const store = configureStore({
    reducer:{
        form:formReducer,
        counter:nameReducer,
    }
});