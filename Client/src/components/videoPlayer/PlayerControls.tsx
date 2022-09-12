import React, { forwardRef } from "react";
import {
  Container,
  makeStyles,
  Grid,
  withStyles,
  Typography,
  IconButton,
  Slider,
  Tooltip,
  Button,
  Popover,
} from "@material-ui/core";

import {
  Bookmark,
  FastForward,
  FastRewind,
  Fullscreen,
  Pause,
  PlayArrow,
  SkipNext,
  VolumeMute,
  VolumeOff,
  VolumeUp,
} from "@material-ui/icons";
import HomeSVG from "../SVG/Home";
import {
  BottomContainer,
  ControlBox,
  ControlWrapper,
  HomeIcon,
  InnerControls,
  MiddleContainer,
  SliderContainer,
  TopContainer,
  VideoTitle,
} from "../../styles/Video.styles";

//====================Player Control styles==================

const useStyles = makeStyles({
  controlsWrapper: {
    position: "absolute",
    top: "0px",
    bottom: "0",
    right: "0",
    left: "0",
    border: "3px solid green",
    background: "rgba(0,0,0,0.6)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    zIndex: 1,
  },
  controlsIcons: {
    color: "#777",
    fontSize: "30px",
    transform: "scale(0.9)",

    "&:hover": {
      color: "#fff",
      transform: "scale(1)",
    },
  },

  bottomIcons: {
    color: "#999",
    padding: "12px 8px",
    // margin: "8px",
    // fontSize: "10px",

    "&:hover": {
      color: "#fff",
    },
  },

  volumeSlider: {
    width: "100px",
    color: "#9556CC",

    ["@media (max-width:600px)"]: {
      display: "none",
    },
  },
});

function ValueLabelComponent(props: any) {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

const PrettoSlider = withStyles({
  root: {
    height: 0,
    color: "#9556CC",
    padding: 5,
  },
  thumb: {
    height: 20,
    width: 20,
    backgroundColor: "#9556CC",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 5,
    borderRadius: 4,
    width: "100%",
  },
  rail: {
    height: 5,
    borderRadius: 4,
  },
})(Slider);

interface PlayerControlProps {
  ref: React.RefObject<HTMLDivElement>

  muted: boolean;
  volume: number;
  playing: boolean;
  played: number;
  ellapsedTime: string;
  duration: string;
  playbackRate: number;
  onRewind: () => void;
  onPlayPause: () => void;
  onFoward: () => void;
  onMute: () => void;
  onAddBookmark: () => void;
  onChangeDisplayFormat: () => void;
  onToggleFullScreen: () => void;
  onVolumeChange: (event: React.ChangeEvent<{}>, value: any) => void;
  onVolumeSeekUp: (event: React.ChangeEvent<{}>, value: any) => void;
  onPlaybackRateChange: (rate: number) => void;
  onSeek: (event: React.ChangeEvent<{}>, value: any) => void;
  onSeekMouseDown: (event: React.ChangeEvent<{}>) => void;
  onSeekMouseUp: (event: React.ChangeEvent<{}>, value: any) => void;
}
const PlayerControls = forwardRef(
  (
    {
      onPlayPause,
      playing,
      onRewind,
      onFoward,
      muted,
      onMute,
      onVolumeChange,
      onVolumeSeekUp,
      volume,
      playbackRate,
      onPlaybackRateChange,
      onToggleFullScreen,
      played,
      onSeek,
      onSeekMouseDown,
      onSeekMouseUp,
      ellapsedTime,
      duration,
      onChangeDisplayFormat,
      onAddBookmark,
    }: PlayerControlProps, ref ) => {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
      null
    );

    const handlePopover = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "playbackrate-popover" : undefined;

    return (
      <ControlWrapper ref={ref as React.RefObject<HTMLDivElement>}>
        <TopContainer>
          <VideoTitle>Video Title</VideoTitle>
          <IconButton
            onClick={onAddBookmark}
            className={`${classes.bottomIcons}`}
          >
            <Bookmark fontSize="medium" />
          </IconButton>
        </TopContainer>

        <MiddleContainer>
          <IconButton
            onDoubleClick={onRewind}
            className={`${classes.bottomIcons}`}
          >
            {" "}
            <FastRewind fontSize="medium" />
          </IconButton>

          <IconButton
            className={`${classes.bottomIcons}`}
            onClick={onPlayPause}
          >
            {" "}
            {playing ? (
              <Pause fontSize="medium" />
            ) : (
              <PlayArrow fontSize="medium" />
            )}
          </IconButton>

          <IconButton
            onDoubleClick={onFoward}
            className={`${classes.bottomIcons}`}
          >
            {" "}
            <FastForward fontSize="medium" />
          </IconButton>
        </MiddleContainer>

        <BottomContainer>
          <SliderContainer>
            <PrettoSlider
              min={0}
              max={100}
              value={played * 100}
              ValueLabelComponent={(props) => (
                <ValueLabelComponent {...props} value={ellapsedTime} />
              )}
              onChange={onSeek}
              onMouseDown={onSeekMouseDown}
              onChangeCommitted={onSeekMouseUp}
            />
          </SliderContainer>
          <ControlBox>
            <InnerControls>
              <IconButton
                className={`${classes.bottomIcons}`}
                onClick={onPlayPause}
              >
                {" "}
                {playing ? (
                  <Pause fontSize="medium" />
                ) : (
                  <PlayArrow fontSize="medium" />
                )}
              </IconButton>
              <IconButton className={`${classes.bottomIcons}`}>
                {" "}
                <SkipNext fontSize="medium" />
              </IconButton>

              <IconButton onClick={onMute} className={`${classes.bottomIcons}`}>
                {" "}
                {muted ? (
                  <VolumeOff fontSize="medium" />
                ) : (
                  <VolumeUp fontSize="medium" />
                )}
              </IconButton>
              <Slider
                className={`${classes.volumeSlider}`}
                min={0}
                max={100}
                aria-label="Volume"
                value={volume * 100}
                onChange={onVolumeChange} //onChange changes while you move up the slider track
                onChangeCommitted={onVolumeSeekUp} // onchaneCommitted changes while you move down the slider track
              />

              <Button onClick={onChangeDisplayFormat}>
                <Typography
                  style={{
                    color: "#9556cc",
                    fontSize: "0.8rem",
                    marginLeft: "10px",
                  }}
                >
                  {ellapsedTime}/{duration}
                </Typography>
              </Button>
            </InnerControls>

            <div style={{ display: "flex", alignItems: "center" }}>
              <Button
                onClick={handlePopover}
                variant="text"
                className={`${classes.bottomIcons}`}
              >
                <Typography style={{ color: "#9556cc", fontSize: "0.8rem" }}>
                  {" "}
                  {playbackRate}x
                </Typography>
              </Button>

              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
              >
                <Grid container direction="column-reverse">
                  {[0.5, 1, 1.5, 2].map((rate) => (
                    <Button
                      onClick={() => onPlaybackRateChange(rate)}
                      variant="text"
                    >
                      <Typography
                        key={rate}
                        style={{
                          color: `${
                            rate === playbackRate ? "#9556cc" : "#000"
                          }`,
                          fontSize: "0.8rem",
                        }}
                      >
                        {" "}
                        {rate}x
                      </Typography>
                    </Button>
                  ))}
                </Grid>
              </Popover>

              <IconButton
                onClick={onToggleFullScreen}
                className={`${classes.bottomIcons}`}
              >
                {" "}
                <Fullscreen fontSize="medium" />
              </IconButton>
            </div>
          </ControlBox>
        </BottomContainer>
      </ControlWrapper>
    );
  }
);

export default PlayerControls;
