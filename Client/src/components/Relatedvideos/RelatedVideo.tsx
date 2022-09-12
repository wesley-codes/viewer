import React, { useState } from "react";
import {
  ChannelAvatar,
  ChannelContainer,
  DotIcon,
  Duration,
  ImageWrapper,
  VideoBox,
  VideoDetail,
  VideoName,
  Image,
} from "../../styles/Video.styles";
import Player from "../videoPlayer/Player";
import CircleAvatar from "../CircleAvatar/CircleAvatar";

interface RelatedVideoProps {
  videoUrl: string;
  videoThumbnail: string;
}

const RelatedVideo = ({ videoUrl, videoThumbnail }: RelatedVideoProps) => {
  const [play, setPlay] = useState(false);

  let timer: number | NodeJS.Timeout | undefined;
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
    <VideoBox onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
      <ImageWrapper
        onMouseLeave={mouseLeaveHandler}
      >
        {play ? (
          <Player
            width="140px"
            height="100%"
            playing={true}
            url={videoUrl}
            muted={true}
            onMouseLeave={mouseLeaveHandler}
          />
        ) : (
          <Image
            src={videoThumbnail}
            onMouseLeave={mouseLeaveHandler}
          />
        )}
      </ImageWrapper>
      <VideoDetail>
        <VideoName title={+true}>Learn Adobe Illustrator | Free Course</VideoName>
        <Duration>
          {" "}
          30k views <DotIcon /> 3 days ago
        </Duration>
        <ChannelContainer>
          <CircleAvatar width={20} height={20} radius={50}>
            <ChannelAvatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-78os6Hl3Xhz6UBCxP7IV0qW7do9_gmM5_w&usqp=CAU" />
          </CircleAvatar>
          <VideoName>Scotch Benard</VideoName>
        </ChannelContainer>
      </VideoDetail>
    </VideoBox>
  );
};

export default RelatedVideo;
