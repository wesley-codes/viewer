import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

type CreateUserTypes = {
  name: string;
  email: string;
  password: string;
};

export const authapi = createApi({
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
  }),
});

export const { useUserSignupMutation } = authapi;
