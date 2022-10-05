import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";



type UserTypes = {
    _id: string;
    name: string;
    email: string;
    img: string;
    subscribers: number;
    subscribedUsers: string[];
    token: string;
  };

  type userDetail ={
    userId : string
    token : string

  }

export const UserApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({
      baseUrl: "http://localhost:5000/api/v1/user",
    }),
    tagTypes: ["subscribe","unsubscribe"],
    endpoints: (builder) => ({
      getUserByID: builder.query<UserTypes, string>({
        query: (id) => ({
          url: `/find/${id}`,
        }),
        providesTags: ["subscribe","unsubscribe" ]

      }),
      subscribedChannelLength: builder.query<UserTypes, string>({
        query: (id) => ({
          url: `/find/${id}`,
        }),
        providesTags: ["subscribe","unsubscribe"]
      }),
      subscribeChannel: builder.mutation<string, userDetail >({
        query:(user)=>({
          url: `/subscribe/${user.userId}`,
            method:"PUT",
            body: user
        }),
        invalidatesTags :["subscribe"]
      }),
      unSubscribeChannel: builder.mutation<string, userDetail >({
        query:(user)=>({
          url: `/unSubscribe/${user.userId}`,
            method:"PUT",
            body: user
        }),
        invalidatesTags :["unsubscribe"]
      })
    }),
  });
  
  export const {useGetUserByIDQuery , useSubscribeChannelMutation, useSubscribedChannelLengthQuery, useUnSubscribeChannelMutation} = UserApi