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

export const UserApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({
      baseUrl: "http://localhost:5000/api/v1/user",
    }),
    tagTypes: ["user"],
    endpoints: (builder) => ({
      getUserByID: builder.query<UserTypes, string>({
        query: (id) => ({
          url: `/find/${id}`,
        }),
      }),
    }),
  });
  
  export const {useGetUserByIDQuery} = UserApi