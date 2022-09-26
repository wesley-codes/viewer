import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

type CreateUserTypes = {
  name: string;
  email: string;
  password: string;
};

type LoginUserTypes = {
  _id: string;
  name: string;
  email: string;
  img: string;
  subscribers: number;
  subscribedUsers: string[];
  token: string;
};

export const AuthApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1/auth",
  }),
  tagTypes: ["Auth"],
  endpoints: (builder) => ({
    userSignup: builder.mutation<{}, CreateUserTypes>({
      query: (user) => ({
        url: "/register",
        method: "POST",
        body: user,
      }),
    }),
    userSignin: builder.mutation<
      LoginUserTypes,
      { email: string; password: string }
    >({
      query: (user) => ({
        url: "/login",
        method: "POST",
        body: user,
      }),
    }),
  }),
});

export const { useUserSignupMutation, useUserSigninMutation } = AuthApi;
