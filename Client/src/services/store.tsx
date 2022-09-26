import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import UserSlice from "../Features/UserSlice";
import { AuthApi } from "./AuthApi";
import { UserApi } from "./UserApi";
import { videoApi } from "./VideoApi";



const persistConfig = {//configuring storage engine
    key: 'root',
    storage,
  }

  //using two or more reducers with RTK 
  const rootReducer = combineReducers({
    //Api
    [videoApi.reducerPath] : videoApi.reducer,
    [AuthApi.reducerPath] : AuthApi.reducer,
    [UserApi.reducerPath] : UserApi.reducer,
    //Slice
    [UserSlice.name] : UserSlice.reducer

},)

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
    reducer :persistedReducer,
    middleware : (getDefaultMiddleware)=> getDefaultMiddleware({
        serializableCheck: false
    }).concat(videoApi.middleware).concat(AuthApi.middleware).concat(UserApi.middleware)
})

setupListeners(store.dispatch)


export type RootState =   ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch