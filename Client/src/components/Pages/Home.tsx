import React, { useEffect } from "react";
import Title from "../SectionTitle/Title";
import VideoBox from "../Video/Video";
import { ThumbnailData } from "../../Utils/Data";
import Menu from "../Menu/Menu";
import Navbar from "../Navbar/Navbar";
import { HomeContainer, HomeWrapper } from "../../styles/GlobalStyles.styles";
import { useGetRandomVideoQuery } from "../../services/VideoApi";
import Loader from "../Loader/Loader";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

const Home = () => {
  dayjs.extend(relativeTime);

  const {
    data: RandonVideos,
    error,
    isLoading,
    isSuccess,
    isFetching,
  } = useGetRandomVideoQuery();

  const date = dayjs("2022-09-12T10:07:35.087Z").fromNow();

  return (
    <React.Fragment>
      <Navbar />

      <HomeWrapper>
        <Menu />

        <Title title="Home" />
        <HomeContainer>
          {isLoading && <Loader />}
          {isFetching && <Loader />}
          {isSuccess &&
            RandonVideos?.map((item, index) => (
              <VideoBox
                key={index}
                id={item.videoId}
                imgUrl={item.thumbnail}
                videoUrl={item.url}
                channelName={item.userId}
                videoName={item.title}
                views={item.views}
                imgAlt={item.title}
                time={dayjs(item.createdAt).fromNow()}
              />
            ))}
        </HomeContainer>
      </HomeWrapper>
    </React.Fragment>
  );
};

export default Home;
