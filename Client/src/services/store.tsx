import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from "redux-persist";
import UserSlice from "../Features/UserSlice";
import { AuthApi } from "./AuthApi";
import { UserApi } from "./UserApi";
import { videoApi } from "./VideoApi";

const persistConfig = {
  //configuring storage engine
  key: "root",
  storage,
};

//using two or more reducers with RTK
const rootReducer = combineReducers({
  //Api
  [videoApi.reducerPath]: videoApi.reducer,
  [AuthApi.reducerPath]: AuthApi.reducer,
  [UserApi.reducerPath]: UserApi.reducer,
  //Slice
  [UserSlice.name]: UserSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      },
    })
      .concat(videoApi.middleware)
      .concat(AuthApi.middleware)
      .concat(UserApi.middleware),
});
export const persistor = persistStore(store);

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
