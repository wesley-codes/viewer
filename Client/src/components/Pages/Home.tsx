import React,{useEffect} from "react";
import Title from "../SectionTitle/Title";
import VideoBox from "../Video/Video";
import { ThumbnailData } from "../../Utils/Data";
import Menu from "../Menu/Menu";
import Navbar from "../Navbar/Navbar";
import { HomeContainer, HomeWrapper } from "../../styles/GlobalStyles.styles";
import { useGetRandomVideoQuery, useGetUserByIDQuery } from "../../services/VideoApi";
import Loader from "../Loader/Loader";
const Home = () => {
  const {data:RandonVideos, error , isLoading , isSuccess, isFetching} = useGetRandomVideoQuery()





  return (
    <React.Fragment>
      <Navbar />

      <HomeWrapper>
        <Menu />

        <Title title="Home" />
        <HomeContainer>
        {isLoading && <Loader/>}
       
      {isSuccess &&  RandonVideos?.map((item, index) => (
            <VideoBox
              key={index}
              id={item.userId}
              imgUrl={item.thumbnail}
              videoUrl={item.url}
              channelName={item.title}
              videoName={item.title}
              views={item.views}
              time={item.createdAt}
            />
          ))} 
        </HomeContainer>

        {/* <Title title="For You" />

        <HomeContainer>
          {ThumbnailData.map((item) => (
            <VideoBox
              key={item.id}
              id={item.videoName}
              imgUrl={item.imgUrl}
              videoUrl={item.videoUrl}
              channelName={item.channelName}
              videoName={item.videoName}
              views={item.views}
              time={item.time}
            />
          ))}
        </HomeContainer> */}

        {/* <Title title="Trending" /> */}

        {/* <HomeContainer>
          {ThumbnailData.map((item) => (
            <VideoBox
              key={item.id}
              id={item.videoName}
              imgUrl={item.imgUrl}
              videoUrl={item.videoUrl}
              channelName={item.channelName}
              videoName={item.videoName}
              views={item.views}
              time={item.time}
            />
          ))}{" "}
        </HomeContainer> */}
      </HomeWrapper>
    </React.Fragment>
  );
};

export default Home;
