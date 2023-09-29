import React, { useState } from "react";
import ReactPlayer from "react-player";
import { Grid, IconButton } from "@mui/joy";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

import Iphone from "../assets/iphone.png";

const VideoPlayer = ({ url, videoId, isPlaying, onPlay }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlay = () => {
    setIsVideoPlaying(!isVideoPlaying);
    onPlay(isVideoPlaying ? null : videoId);
  };

  return (
    <Grid>
      <Grid>
        <ReactPlayer width={106} height={191} playing={isPlaying} url={url} />
      </Grid>
      <Grid
        sx={{
          position: "relative",
          bottom: "8.5rem",
          left: "0.9rem",
          zIndex: 555,
          background: "none",
          width: "10%",
        }}
      >
        {isPlaying ? (
          <IconButton
            className="controlButton"
            onClick={handlePlay}
            sx={{ opacity: "0.1" }}
          >
            <PauseIcon
              sx={{
                color: "white",
                fontSize: "4rem",
                opacity: "0",
              }}
            />
          </IconButton>
        ) : (
          <IconButton
            className="controlButton"
            onClick={handlePlay}
            sx={{ opacity: "0.5" }}
          >
            <PlayArrowIcon
              sx={{
                color: "white",
                fontSize: "4rem",
              }}
            />
          </IconButton>
        )}
      </Grid>
      <Grid sx={{ position: "relative", bottom: "16.6rem", right: "0.47rem" }}>
        <img src={Iphone} alt="iphone" className="iphone-image" />
      </Grid>
    </Grid>
  );
};

export default VideoPlayer;
