import React from "react";
import { HomeContainer, HomeWrapper } from "../../styles/GlobalStyles.styles";
import { ThumbnailData } from "../../Utils/Data";
import Menu from "../Menu/Menu";
import Navbar from "../Navbar/Navbar";
import Title from "../SectionTitle/Title";
import VideoBox from "../Video/Video";

const Browse = () => {
  return (
    <React.Fragment>
      <Navbar />

      <HomeWrapper>
        <Menu />
        <Title title="Browse" />
        <HomeContainer>
          {ThumbnailData.map((item, index) => (
            <VideoBox
              key={index}
              id={item.videoName}
              imgUrl={item.imgUrl}
              videoUrl={item.videoUrl}
              channelName={item.channelName}
              videoName={item.videoName}
              views={item.views}
              time={item.time}
            />
          ))}
             {ThumbnailData.map((item, index) => (
            <VideoBox
              key={index}
              id={item.videoName}
              imgUrl={item.imgUrl}
              videoUrl={item.videoUrl}
              channelName={item.channelName}
              videoName={item.videoName}
              views={item.views}
              time={item.time}
            />
          ))}
             {ThumbnailData.map((item, index) => (
            <VideoBox
              key={index}
              id={item.videoName}
              imgUrl={item.imgUrl}
              videoUrl={item.videoUrl}
              channelName={item.channelName}
              videoName={item.videoName}
              views={item.views}
              time={item.time}
            />
          ))}
             {ThumbnailData.map((item, index) => (
            <VideoBox
              key={index}
              id={item.videoName}
              imgUrl={item.imgUrl}
              videoUrl={item.videoUrl}
              channelName={item.channelName}
              videoName={item.videoName}
              views={item.views}
              time={item.time}
            />
          ))}
        </HomeContainer>
      </HomeWrapper>
    </React.Fragment>
  );
};

export default Browse;
