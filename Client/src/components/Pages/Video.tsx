import { Grid, Typography, Paper } from "@material-ui/core";
import React, { useState, useEffect, useRef, memo } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
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
  LikeIcon,
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
import {
  useGetLikesLengthQuery,
  useGetVideoByIDQuery,
  useLikeVideoMutation,
} from "../../services/VideoApi";
import { useGetUserByIDQuery, useSubscribeChannelMutation, useSubscribedChannelLengthQuery, useUnSubscribeChannelMutation } from "../../services/UserApi";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../services/store";
import { getCookie } from "../../Cookie/GetCookie";
import LogoSVG from "../SVG/Logo";
import AnimatedLoader from "../Loader/AnimatedLoader";
import { savedLikedLink } from "../../Features/UserSlice";
import { current } from "@reduxjs/toolkit";
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

  //React Routers Hook
  const navigate = useNavigate();
  const location = useLocation()
  const { id } = useParams(); // using params


//get user token from cookie
  const token = getCookie();

  //Redux states
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  const { currentUser } = useAppSelector((state) => state.User); //selecting currentUser state from the userSlice





  //RTK QUERY
  const [likevideo, { isSuccess }] = useLikeVideoMutation(); //like video RTK
  const [subscribeToChannel] = useSubscribeChannelMutation() //subscribe to channel
  const [unSubscribeChannel] = useUnSubscribeChannelMutation()//unsubscribe from a channel

  const { data: video} = useGetVideoByIDQuery(id!); //Fetching a particular video by ID to play it
  const { data: user } = useGetUserByIDQuery(video?.userId!); //Fetching the particuar owner of the channel by passing the video.userId
  const { data: likesLength } = useGetLikesLengthQuery(id!);
  const {data: subsribedLength } = useSubscribedChannelLengthQuery(user?._id!)
const  {data:FetchCurrentUser} = useGetUserByIDQuery(currentUser?._id)


//Redux Dispatch
const  dispatch = useDispatch<AppDispatch>()


  


  //usestates Hooks
  const playerRef = useRef<any>(null);
  const canvasRef = useRef<any>(null);
  const sortRef = useRef<any>(null);
  const controlRef = React.useRef<HTMLDivElement>(null);
  const playerContainerRef = useRef<any>(null);
  const [timeDisplayFormat, setTimeDisplayFormat] = useState<string>("normal");
  const [relatedVideos, setRelatedVideos] = useState<ThumbnailTypes[]>([]);
  const [bookmark, setBookmark] = useState<BookmarkProps[]>([]);
  const [showSort, setShowSort] = useState<boolean>(false);
  const [buffer, setBuffer] = useState<boolean>(true);
  const [likeAnimate, setLikeAnimate] = useState<boolean>(false);
  const [subscribe , setSubscribe] = useState<boolean>(false)
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
  };

  useEffect(() => {
    // currentUser === null ? set the like active color to #fff
    // user.id is present in the video.like array set the color to active
    const checkIfExistLikeArray = video?.likes.indexOf(currentUser?._id)!;
    console.log(checkIfExistLikeArray);
    if (checkIfExistLikeArray >= 0) {
      //console.log("yes it exists");
      setLikeAnimate(true);
    }

    //console.log(video?.likes);
  }, [video?.likes]);

  useEffect(() => {
    setBuffer(false);
  }, []);

  const likevideoHandler = async () => {
    // !currentUser navigate so user can signin

    if (!currentUser) {
      dispatch(savedLikedLink(location.pathname))
      navigate("/signin");
      //setLikeAnimate(false);
    }
    console.log({ ...currentUser, v_id: video?._id!, token });
    likevideo({ ...currentUser, v_id: video?._id!, token });
    //setLikeAnimate(true);
  };

  //console.log(likesLength?.likes.length)
  const bufferStartHandler = () => {
    setBuffer(true);
  };

  const bufferEndHandler = () => {
    setBuffer(false);
  };



useEffect(()=>{
  //check if user exist in fetchcurrentUser
const userExistCurrentUser = FetchCurrentUser?.subscribedUsers.indexOf(user?._id!)
console.log("######",userExistCurrentUser)
if (userExistCurrentUser! >= 0){
  setSubscribe(true)
}else if(userExistCurrentUser === -1){
  setSubscribe(false)
}


},[])






// <--subscribe to a channel -->
const userDetails ={
  userId : user?._id!,
  token : token
}
const subscribeChannelHandler = () =>{
console.log("userDetails",userDetails)
  if(currentUser){
    subscribeToChannel(userDetails).unwrap().then((data)=>{console.log(data)}).catch((err)=>{console.log(err)})
    setSubscribe(true)
  }else{
    setSubscribe(false)
    dispatch(savedLikedLink(location.pathname))
    navigate("/signin")
  }
}

// <-- unsubscribe from channel -->
const unSubScribeChannelHandler = () => {
  
  //unsubscribe if user is loggedin
  if(currentUser){

    unSubscribeChannel(userDetails)
    setSubscribe(false)
  }

}

console.log("subscribers length",user?.name, subsribedLength?.subscribedUsers.length, subsribedLength?.subscribers)


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
                loop={true}
                playing={playing}
                volume={volume}
                url={
                  "https://bucket-viewer.s3.us-east-1.amazonaws.com/" +
                  video?.video!
                }
                playbackRate={playbackRate}
                onProgress={progressHandler}
                onBuffer={bufferStartHandler}
                onBufferEnd={bufferEndHandler}
              />

              {buffer && <AnimatedLoader width={50} height={50} />}

              <PlayerControls
                ref={controlRef}
                onPlayPause={handlePlayPause}
                playing={playing}
                onRewind={handleRewind}
                onFoward={handleFastFoward}
                muted={muted}
                onMute={handleMute}
                volume={volume}
                buffer={buffer}
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
                videoTitle={video?.title!}
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
                      <span>{subsribedLength?.subscribers} subscribers</span>
                    </div>
                  </AvatarContainer>

                  
                    <SubscribeBtn radius={5} onClick={subscribe ? unSubScribeChannelHandler : subscribeChannelHandler}>{subscribe ? "Unsubscribe" : "Subscribe"}</SubscribeBtn>
                
                </UserAction>
                <ActionBox>
                  <IconBox active={+likeAnimate}>
                    <LikeIcon
                      onClick={likevideoHandler}
                      active={+likeAnimate}
                    />
                    <IconLabel>{likesLength?.likes.length}</IconLabel>
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

              <Description descp={video?.description!} />
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
            {relatedVideos.map((data, index) => (
              <RelatedVideo
                key={index}
                videoUrl={data.videoUrl}
                videoThumbnail={data.imgUrl}
              />
            ))}
          </InnerContainer>
        </RightContainer>
      </Container>
    </React.Fragment>
  );
};

export default VideoDetails;
