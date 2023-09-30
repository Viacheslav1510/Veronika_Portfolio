import React, { useState } from "react";
import ReactPlayer from "react-player";
import { Grid, IconButton } from "@mui/joy";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

import Iphone from "../assets/iphone.png";

const VideoPlayer = ({ url, videoId, isPlaying, onPlay, light }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlay = () => {
    setIsVideoPlaying(!isVideoPlaying);
    onPlay(isVideoPlaying ? null : videoId);
  };

  return (
    <Grid>
      <Grid sx={{ position: "relative", top: "4.5rem", marginTop: "20%" }}>
        <ReactPlayer
          width={105}
          height={191}
          playing={isPlaying}
          url={url}
          light={light}
          playIcon={
            <IconButton onClick={handlePlay} sx={{ opacity: "1", zIndex: 110 }}>
              <PlayArrowIcon
                sx={{
                  color: "white",
                  fontSize: "3rem",
                }}
              />
            </IconButton>
          }
        />
      </Grid>
      <Grid
        sx={{
          position: "relative",
          bottom: "3rem",
          left: "2.1rem",
          background: "none",
          width: "10%",
        }}
      >
        {isPlaying ? (
          <IconButton
            className="controlButton"
            onClick={handlePlay}
            sx={{ opacity: "0.1", zIndex: 99 }}
          >
            <PauseIcon
              sx={{
                color: "white",
                fontSize: "1rem",
                opacity: "0.1",
              }}
            />
          </IconButton>
        ) : (
          <IconButton
            className="controlButton"
            onClick={handlePlay}
            sx={{ opacity: "0.5", zIndex: 99 }}
          >
            <PlayArrowIcon
              sx={{
                color: "white",
                fontSize: "1rem",
              }}
            />
          </IconButton>
        )}
      </Grid>
      <Grid sx={{ position: "relative", bottom: "10rem", right: "0.47rem" }}>
        <img src={Iphone} alt="iphone" className="iphone-image" />
      </Grid>
    </Grid>
  );
};

export default VideoPlayer;
