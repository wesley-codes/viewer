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
  token: string;
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

type LikeVideoTypes = {
  v_id: string;
  token: string;
};

export const videoApi = createApi({
  reducerPath: "videoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1/video",
  }),
  tagTypes: ["Likes"],

  endpoints: (builder) => ({
    getRandomVideo: builder.query<RandomVideoTypes[], void>({
      query: () => "/ran", // endpoint
      // providesTags:["Video"]
    }),

    getVideoByID: builder.query<GetVideoID, string>({
      query: (videoId) => `/${videoId}`,
      providesTags: ["Likes"],
    }),
    //length of likes
    getLikesLength: builder.query<GetVideoID, string>({
      query: (videoId) => `/${videoId}`,
      providesTags: ["Likes"],
    }),
    //like a video
    likeVideo: builder.mutation<GetVideoID, LikeVideoTypes>({
      query: (video) => ({
        url: `/like/${video.v_id}`,
        method: "POST",
        body: video,
      }),

      invalidatesTags: ["Likes"],
    }),
    
  }),
});

//auto generated hook
export const {
  useGetRandomVideoQuery,
  useGetVideoByIDQuery,
  useGetLikesLengthQuery,
  useLikeVideoMutation,
} = videoApi;
