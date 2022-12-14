import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Image } from "../../styles/Navbar.styles";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {
  Details,
  DotIcon,
  InfoBox,
  VideoCardContainer,
  VideoThumbnail,
  VideoWrapper,
  ViewBox,
} from "../../styles/VideoBox.styles";
import { ThumbnailData } from "../../Utils/Data";
import CircleAvatar from "../CircleAvatar/CircleAvatar";
import Player from "../videoPlayer/Player";
import "react-lazy-load-image-component/src/effects/blur.css";
import {useGetUserByIDQuery} from "../../services/UserApi"
import { useGetVideoByIDQuery } from "../../services/VideoApi";
interface VideoBoxProps {
  id: any;
  imgUrl: string;
  videoUrl: string;
  channelName: string;
  videoName: String;
  time: any;
  views: string;
  imgAlt?: string;
  
}

interface UserProps {
  _id: string;
  name: string;
  email: string;
  img: string;
  subscribers: string;
  subscribedUsers: string[];
}

const VideoBox = ({
  id,
  imgUrl,
  videoUrl,
  channelName,
  videoName,
  imgAlt,
  time,
  views,
}: VideoBoxProps) => {
  const [play, setPlay] = useState(false);

  let timer: number | NodeJS.Timeout | undefined;
  //const {data}  = useGetVideoByIDQuery(id)
   const { data:user } = useGetUserByIDQuery(channelName);

  // console.log("===",user);
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
//console.log(">>>>>>>",id)
 
  return (
    <React.Fragment>
      <VideoCardContainer>
        <Link to={`video/${id}`}>
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
              <div>
                <LazyLoadImage
                src={"https://bucket-viewer.s3.us-east-1.amazonaws.com/"+imgUrl}
                onMouseLeave={mouseLeaveHandler}
                effect="blur"
                width="100%"
                height="202px"
                style={{
                  objectFit: "cover",
                }}
              />
              </div>

            )}
          </VideoWrapper>
        </Link>

        <Details>
          <p> {videoName.substring(0, 37)}...</p>
          <ViewBox>
            {views} views <DotIcon /> {time}
          </ViewBox>
          <InfoBox>
            <CircleAvatar height={40} radius={50} width={40}>
              <Image src="https://bit.ly/3eXRRMS" />
            </CircleAvatar>
            <p>{user?.name}</p>
          </InfoBox>
        </Details>
      </VideoCardContainer>
    </React.Fragment>
  );
};

export default VideoBox;
