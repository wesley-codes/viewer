import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { AuthSlice } from "../Features/Auth";
import { videoApi } from "./VideoApi";


export const store = configureStore({
    reducer :{
        [videoApi.reducerPath] : videoApi.reducer,
        auth : AuthSlice.reducer

    },
    middleware : (getDefaultMiddleware)=> getDefaultMiddleware().concat(videoApi.middleware)
})