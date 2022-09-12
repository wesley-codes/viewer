import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import { isTemplateExpression } from "typescript";
import { useGetUserByIDQuery } from "../../services/VideoApi";
import { Image } from "../../styles/Navbar.styles";
import {
  ChannelImg,
  Details,
  DotIcon,
  InfoBox,
  VideoCard,
  VideoCardContainer,
  VideoThumbnail,
  VideoWrapper,
  ViewBox,
} from "../../styles/VideoBox.styles";
import { ThumbnailData } from "../../Utils/Data";
import CircleAvatar from "../CircleAvatar/CircleAvatar";
import Player from "../videoPlayer/Player";
interface VideoBoxProps {
  id: any;
  imgUrl: string;
  videoUrl: string;
  channelName: string;
  videoName: String;
  time: string;
  views: string;
}



interface UserProps {
  _id : string
  name : string 
  email : string 
  img: string
  subscribers : string 
  subscribedUsers : string []
  
}

const VideoBox = ({
  id,
  imgUrl,
  videoUrl,
  channelName,
  videoName,
  time,
  views,
}: VideoBoxProps) => {
  const [play, setPlay] = useState(false);
  let timer: number | NodeJS.Timeout | undefined;
  const {data} = useGetUserByIDQuery(id)

console.log(data)
  //http://localhost:5000/api/v1/user/find





  const mouseEnterHandler = () => {
    timer = setTimeout(() => {
      setPlay(true);
    }, 3000);
  };

  const mouseLeaveHandler = () => {
    clearTimeout(timer);

    setPlay(false);
  };

  return (
    <React.Fragment>
      <VideoCardContainer>
        <Link to={`video/:${id}`}>
          <VideoWrapper
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
          >
            {play ? (
              <Player
                width="200"
                height="200"
                playing={true}
                muted
                url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
              ></Player>
            ) : (
              <VideoThumbnail src={imgUrl} onMouseLeave={mouseLeaveHandler} />
            )}
          </VideoWrapper>
        </Link>

        <Details>
          <p> {videoName.substring(0, 37)}...</p>
          <ViewBox>
            {views} views <DotIcon /> {time}days ago
          </ViewBox>
          <InfoBox>
            <CircleAvatar height={40} radius={50} width={40}>
              <Image src={data?.image} />
            </CircleAvatar>
            <p>{data?.name}</p>
          </InfoBox>
        </Details>
      </VideoCardContainer>
    </React.Fragment>
  );
};

export default VideoBox;
