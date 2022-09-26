
import { Grid, Typography, Paper } from "@material-ui/core";
import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  LeftContainer,
  VideoContainer,
  LeftWrapper,
  RightContainer,
  Canvas,
  BookmarkImage,
  BookmarkContainer,
  InnerContainer,
  DescpSection,
  VideoDescpTitle,
  ActionContainer,
  UserAction,
  ActionBox,
  AvatarContainer,
  AvatarImg,
  SubscribeBtn,
  IconBox,
  IconLabel,
  CommentBox,
  CommentWrapper,
  SortSelect,
  SortItem,
  
} from "../../styles/Video.styles";
import screenfull from "screenfull";
import { ThumbnailTypes } from "../../Types/types";
import { ThumbnailData } from "../../Utils/Data";
import Title from "../SectionTitle/Title";
import PlayerControls from "../videoPlayer/PlayerControls";
import Player from "../videoPlayer/Player";
import RelatedVideo from "../Relatedvideos/RelatedVideo";
import Navbar from "../Navbar/Navbar";
import CircleAvatar from "../CircleAvatar/CircleAvatar";
import LikeSVG from "../SVG/Like";
import DislikeSVG from "../SVG/Dislike";
import ShareSVG from "../SVG/share";
import DownloadSVG from "../SVG/Download";
import OptionsSVG from "../SVG/Options";
import Description from "../Description/Description";
import { Sort } from "@material-ui/icons";
import Comment_LG from "../Comments/Comment_LG";
import Comment_SM from "../Comments/Comment_SM";
import {useGetVideoByIDQuery, useLikeVideoMutation} from "../../services/VideoApi"
import { useGetUserByIDQuery } from "../../services/UserApi";
interface controlStateProps {
  playing: boolean;
  muted: boolean;
  volume: number;
  playbackRate: number;
  played: number;
  seeking: boolean;
}

type BookmarkProps = {
  time: number;
  display: string;
  image: string;
};
let count = 0;
const VideoDetails = () => {
  const { id:videoID } = useParams();
  const [likevideo , {isSuccess}] = useLikeVideoMutation()
  const {data:video, error, isLoading , isFetching} = useGetVideoByIDQuery(videoID!)
const {data:user} = useGetUserByIDQuery(video?.userId!)
  console.log(user)


  const playerRef = useRef<any>(null);
  const canvasRef = useRef<any>(null);
  const sortRef = useRef<any>(null);
  const controlRef = React.useRef<HTMLDivElement>(null);
  const playerContainerRef = useRef<any>(null);
  const [timeDisplayFormat, setTimeDisplayFormat] = useState<string>("normal");
  const [relatedVideos, setRelatedVideos] = useState<ThumbnailTypes[]>([]);
  const [bookmark, setBookmark] = useState<BookmarkProps[]>([]);
  const [showSort, setShowSort] = useState<boolean>(false);
  const [showComment, setShowComment] = useState<boolean>(false);
  const [controlState, setControlState] = useState<controlStateProps>({
    playing: true,
    muted: false,
    volume: 0.5,
    playbackRate: 1.0,
    played: 0,
    seeking: false,
  });
  const { playing, muted, volume, playbackRate, played, seeking } =
    controlState; //destructuring the controlStrate

  useEffect(() => {
    setRelatedVideos(ThumbnailData.splice(0, 6));
  }, []);

  const screenSize_Mobile = window.matchMedia("(max-width: 600px)")
  const screensize_Tablet = window.matchMedia("(max-width: 820px)")
  useEffect(()=>{
   //if 
    if(showComment && screenSize_Mobile.matches){
      document.body.style.overflow = "hidden"
    
    }else if (!showComment || screensize_Tablet.matches){
      console.log("=====you gotta work tablet")
      document.body.style.overflow = "auto"
    }
    

  },[showComment, screenSize_Mobile, screensize_Tablet])

  const formatPlayerDuration = (seconds: number) => {
    //formarting duration of video
    if (isNaN(seconds)) {
      return "00:00";
    }

    const date = new Date(seconds * 1000);
    const hh = date.getUTCHours();
    const mm = date.getUTCMinutes();
    const ss = date.getUTCSeconds().toString().padStart(2, "0");
    if (hh) {
      //if video have hours
      return `${hh}:${mm.toString().padStart(2, "0")} `;
    } else return `${mm}:${ss}`;
  };

  const handlePlayPause = () => {
    //plays and pause the video (toggling)
    setControlState({ ...controlState, playing: !controlState.playing });
  };

  const handleRewind = () => {
    //Rewinds the video player reducing 10
    playerRef.current.seekTo(playerRef.current.getCurrentTime() - 10);
  };

  const handleFastFoward = () => {
    //FastFowards the video player by adding 10
    playerRef.current.seekTo(playerRef.current.getCurrentTime() + 10);
  };

  const handleMute = () => {
    //Mutes the video player
    setControlState({ ...controlState, muted: !controlState.muted });
  };

  const handleVolumeChange = (event: React.ChangeEvent<{}>, value: any) => {
    const newVolume = parseFloat(value) / 100;

    setControlState({
      ...controlState,
      volume: newVolume,
      muted: Number(newVolume) === 0 ? true : false, // volume === 0 then muted
    });
  };
  const handleVolumeSeekUp = (event: React.ChangeEvent<{}>, value: any) => {
    const newVolume = parseFloat(value) / 100;

    setControlState({
      ...controlState,
      volume: newVolume,
      muted: newVolume === 0 ? true : false,
    });
  };

  const playbackHandler = (rate: number) => {
    setControlState({ ...controlState, playbackRate: rate }); //what pace the video should play at
  };

  const toggleFullScreenHandler = () => {
    screenfull.toggle(playerContainerRef.current);
  };

  const progressHandler = (currentDuration: any) => {
    //console.log(currentDuration);
    if (count > 3) {
      controlRef!.current!.style.visibility! = "hidden"; // toggling player control container
    } else if (controlRef!.current!.style.visibility! === "visible") {
      count += 1;
    }
    if (!seeking) {
      setControlState({ ...controlState, ...currentDuration });
    }
  };

  const onSeekHandler = (event: React.ChangeEvent<{}>, value: any) => {
    setControlState({ ...controlState, played: parseFloat(value) / 100 });
  };
  const onSeekMouseDownHandler = (event: React.ChangeEvent<{}>) => {
    setControlState({ ...controlState, seeking: true });
  };
  const onSeekMouseUpHandler = (
    event: React.ChangeEvent<{}>,
    value: number
  ) => {
    setControlState({ ...controlState, seeking: false });
    playerRef.current.seekTo(value / 100);
  };

  const changeDisplayFormatHandler = () => {
    setTimeDisplayFormat(
      timeDisplayFormat === "normal" ? "remaining" : "normal"
    );
  };

  const currentTime: number = playerRef.current
    ? playerRef.current.getCurrentTime()
    : "00:00";
  const duration: number = playerRef.current
    ? playerRef.current.getDuration()
    : "00:00";
  const ellapsedTime =
    timeDisplayFormat === "normal"
      ? formatPlayerDuration(currentTime)
      : `-${formatPlayerDuration(duration - currentTime)}`;
  const totalDuration = formatPlayerDuration(duration);

  const addBookmarkHandler = () => {
    const canvas = canvasRef.current;
    canvas.width = 100;
    canvas.height = 120;

    const canvasCtx = canvas.getContext("2d");
    canvasCtx.drawImage(
      playerRef.current.getInternalPlayer(),
      0,
      0,
      canvas.width,
      canvas.height
    );
    const imageURL = canvas.toDataURL();
    canvas.width = 0;
    canvas.height = 0;
    setBookmark([
      ...bookmark,
      { time: currentTime, display: ellapsedTime, image: imageURL },
    ]);
  };

  const mouseMoveHandler = () => {
    controlRef!.current!.style.visibility! = "visible";
    count = 0;
  };

  useEffect(() => {
    const handleClickOut = (event: any) => {
      if (sortRef.current && !sortRef.current.contains(event.target)) {
        setShowSort(false);
      }
    };
    document.addEventListener("click", handleClickOut, true);
    return () => {
      document.removeEventListener("click", handleClickOut, true);
    };
  }, []);

  const openCommentModal = () => {
    setShowComment(true);

    //if modal is true && 
  };


const likevideoHandler = async()=> {
  await likevideo(video?._id!).unwrap()
}



  return (
    <React.Fragment>
      <Navbar sm={true} />

      <Container>
        <LeftWrapper>
          <LeftContainer>
            <VideoContainer
              ref={playerContainerRef}
              onMouseMove={mouseMoveHandler}
            >
            
              <Player
                ref={playerRef}
                width="100%"
                height="100%"
                muted={muted}
                // controls
                playing={playing}
                volume={volume}
                url={video?.video!}
                playbackRate={playbackRate}
                onProgress={progressHandler}
              />

              <PlayerControls
                ref={controlRef}
                onPlayPause={handlePlayPause}
                playing={playing}
                onRewind={handleRewind}
                onFoward={handleFastFoward}
                muted={muted}
                onMute={handleMute}
                volume={volume}
                onVolumeChange={handleVolumeChange}
                onVolumeSeekUp={handleVolumeSeekUp}
                playbackRate={playbackRate}
                onPlaybackRateChange={playbackHandler}
                onToggleFullScreen={toggleFullScreenHandler}
                played={played}
                onSeek={onSeekHandler}
                onSeekMouseDown={onSeekMouseDownHandler}
                onSeekMouseUp={onSeekMouseUpHandler}
                ellapsedTime={ellapsedTime}
                duration={totalDuration}
                onChangeDisplayFormat={changeDisplayFormatHandler}
                onAddBookmark={addBookmarkHandler}
                videoTitle = {video?.title!}
              />
            </VideoContainer>

            {/* */}

            <BookmarkContainer>
              <Grid container spacing={3}>
                {bookmark.map((bookmark, index) => (
                  <Grid item key={index}>
                    <Paper
                      onClick={() => playerRef.current.seekTo(bookmark.time)}
                    >
                      <BookmarkImage
                        crossOrigin="anonymous"
                        src={bookmark.image}
                      />
                      <Typography>Bookmark at {bookmark.display}</Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>

              {/* <Canvas ref={canvasRef} /> */}
            </BookmarkContainer>
            <DescpSection>
              <VideoDescpTitle> {video?.title}.</VideoDescpTitle>
              <ActionContainer>
                <UserAction>
                  <AvatarContainer>
                    <CircleAvatar width={50} height={50} radius={50}>
                      <AvatarImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-78os6Hl3Xhz6UBCxP7IV0qW7do9_gmM5_w&usqp=CAU" />
                    </CircleAvatar>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginLeft: "10px",
                      }}
                    >
                      <span style={{ fontWeight: "700" }}>{user?.name}</span>
                      <span>{user?.subscribers} subscribers</span>
                    </div>
                  </AvatarContainer>
                  <SubscribeBtn radius={5}>SUBSCRIBE</SubscribeBtn>
                </UserAction>
                <ActionBox>
                  <IconBox>
                    <LikeSVG
                      width={20}
                      height={20}
                      stroke="#9556cc"
                      fill="#9556cc"
                      onClick={likevideoHandler}
                    />
                    <IconLabel>{video?.likes.length}</IconLabel>
                  </IconBox>

                  <IconBox>
                    <DislikeSVG
                      width={20}
                      height={20}
                      stroke="#9556cc"
                      fill="#9556cc"
                    />
                    <IconLabel>Dislike</IconLabel>
                  </IconBox>

                  <IconBox>
                    <ShareSVG
                      width={20}
                      height={20}
                      stroke="#9556cc"
                      fill="#9556cc"
                    />
                    <IconLabel>Share</IconLabel>
                  </IconBox>

                  <IconBox>
                    <DownloadSVG
                      width={20}
                      height={20}
                      stroke="#9556cc"
                      fill="#9556cc"
                    />
                    <IconLabel>Download</IconLabel>
                  </IconBox>

                  <IconBox>
                    <OptionsSVG
                      width={20}
                      height={20}
                      stroke="#9556cc"
                      fill="#9556cc"
                    />
                    <IconLabel>Like</IconLabel>
                  </IconBox>
                </ActionBox>
              </ActionContainer>

              <Description
                descp={video?.description!}
              />
              <CommentWrapper>
              
                <CommentBox onClick={openCommentModal}>
                  {" "}
                  161 comments
                </CommentBox>

                {showComment && <Comment_SM onClose={setShowComment} />}

                <div
                  style={{
                    alignItems: "center",
                    display: "flex",
                    marginLeft: "20px",
                    cursor: "pointer",
                    position: "relative",
                  }}
                  onClick={() => setShowSort(!showSort)}
                  ref={sortRef}
                >
                  <Sort />
                  <span style={{ marginLeft: "5px" }}> SORT BY</span>
                </div>
                {showSort && (
                  <SortSelect>
                    <SortItem>Oldest Comments</SortItem>
                    <SortItem>Newest Comments</SortItem>
                  </SortSelect>
                )}
              </CommentWrapper>
            </DescpSection>

            <Comment_LG />
          </LeftContainer>
        </LeftWrapper>

        <RightContainer>
          <Title title="Related Videos" margin="none" />
          <InnerContainer>
            {relatedVideos.map((data) => (
              <RelatedVideo
                key={data.id}
                videoUrl={data.videoUrl}
                videoThumbnail={data.imgUrl}
              />
            ))}

            {/* {relatedVideos.map((data) => (
              <RelatedVideo
                key={data.id}
                videoUrl={data.videoUrl}
                videoThumbnail={data.imgUrl}
              />
            ))} */}
          </InnerContainer>
        </RightContainer>
      </Container>
    </React.Fragment>
  );
};

export default VideoDetails;
