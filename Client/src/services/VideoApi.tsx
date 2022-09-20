import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface RandomVideoTypes {
  _id: string;
  userId: string;
  title: string;
  description: string;
  videoId: string;
  thumbnail: string;
  url: string;
  views: string;
  tags: string[];
  likes: string[];
  dislikes: string[];
  createdAt: string;
}

interface GetUserID {
  _id: string;
  name: string;
  email: string;
  image: string;
  subscribers: number;
  subscribedUsers: string[];
}

interface GetVideoID {
  _id: string;
  userId: string;
  videId: string;
  title: string;
  description: string;
  thumbnail: string;
  video: string;
  views: number;
  tags: string[];
  likes: string[];
  dislikes: string[];
}

export const videoApi = createApi({
  reducerPath: "videoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1/",
  }),
  tagTypes: ["Video"],

  endpoints: (builder) => ({
    getRandomVideo: builder.query<RandomVideoTypes[], void>({
      query: () => "video/ran", // endpoint
    }),
    getUserByID: builder.query<GetUserID, string>({
      query: (id) => `user/find/${id}`,
    }),
    getVideoByID: builder.query<GetVideoID, string>({
      query: (videoId) => `video/${videoId}`,
    }),
    likeVideo: builder.mutation<GetVideoID, string>({
      query: (id) => ({
        url: `/like/${id}`,
        method: "PUT",
      }),
      transformResponse: (response: { data: GetVideoID}, meta, arg) =>
        response.data,

      invalidatesTags: ["Video"],
   
    }),
  }),
});

//auto generated hook
export const {
  useGetRandomVideoQuery,
  useGetUserByIDQuery,
  useGetVideoByIDQuery,
  useLikeVideoMutation
} = videoApi;
