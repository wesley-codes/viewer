import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { videoApi } from "./VideoApi";


export const store = configureStore({
    reducer :{
        [videoApi.reducerPath] : videoApi.reducer

    },
    middleware : (getDefaultMiddleware)=> getDefaultMiddleware().concat(videoApi.middleware)
})