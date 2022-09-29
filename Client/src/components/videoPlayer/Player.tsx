import React, { forwardRef, memo , useEffect} from "react";
import ReactPlayer from "react-player";

interface PlayerProps {
  ref?: React.MutableRefObject<any>;
  width: string;
  height: string;
  muted?: boolean;
  playing?: boolean;
  volume?: number;
  url: string;
  loop?: boolean;
  playbackRate?: number;
  onMouseLeave?: () => void
  onBuffer?:()=>void
  onBufferEnd?: ()=>void
  onProgress?: (currentDuration: any) => void;
}

const Player = forwardRef(
  (
    {
      width,
      height,
      muted,
      playing,
      volume,
      url,
      playbackRate,
      onProgress,
      onMouseLeave,
      loop,
      onBuffer,
      onBufferEnd
    }: PlayerProps,
    ref
  ) => {

    
    return (
      <ReactPlayer
      
        ref={ref as React.MutableRefObject<any>}
        onMouseLeave ={onMouseLeave}
        width={width}
        height={height}
        muted={muted}
       playing={playing}
        volume={volume}
        url={url}
        playbackRate={playbackRate}
        onProgress={onProgress}
        loop={loop}
        onBuffer={onBuffer}
        onBufferEnd ={onBufferEnd}
        style={{
objectFit:"cover"
        }}
        // config={{
        //   file: {
        //     attributes: {
        //       crossOrigin: "anonymous",
        //     },
        //   },
        // }}
      />
    );
  }
);

export default memo(Player);
