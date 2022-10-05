import { createSlice, current } from "@reduxjs/toolkit";


type UserTypes = {
  _id: string;
  name: string;
  email: string;
  img: string;
  subscribers: number;
  subscribedUsers: string[];
  token: string;
};

const UserReducer = createSlice({
  name: "User",
  initialState: {
    currentUser: null as unknown as UserTypes,
    likedLinked: null as unknown as string,
  },
  reducers: {
    userLoggedIn: (state, { payload }) => {
      state.currentUser = payload;
      console.log(state.currentUser);
    },
    savedLikedLink: (state, { payload }) => {
      state.likedLinked = payload;
      console.log(state.likedLinked);
    },
  
    logOut: (state) => {
      state.currentUser = null as unknown as UserTypes;
      state.likedLinked = null as unknown as string;

      localStorage.clear();
    },
  },
});

export const { userLoggedIn, savedLikedLink, logOut } = UserReducer.actions;

export default UserReducer;
