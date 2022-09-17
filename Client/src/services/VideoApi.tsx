import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface RandomVideoTypes {
  _id: string;
  userId: string;
  title: string;
  description: string;
  thumbnail: string;
  url: string;
  views: string;
  tags: string[];
  likes: string[];
  dislikes: string[];
  createdAt: string;
  placeHolder: string
}


interface GetUserID {
  _id : string 
  name : string 
  email : string 
  image : string
  subscribers: number
  subscribedUsers: string []
}

export const videoApi = createApi({
  reducerPath: "videoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1/",
  }),
  endpoints: (builder) => ({
    getRandomVideo: builder.query<RandomVideoTypes[], void>({
      query: () => "video/ran", // endpoint
    }),
    getUserByID : builder.query<GetUserID, string>({
        query : (id)=> `user/find/${id}`
    })
  }),
});

//auto generated hook
export const { useGetRandomVideoQuery , useGetUserByIDQuery} = videoApi;
