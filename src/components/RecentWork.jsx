import React, { useState } from "react";
import { Grid, Divider } from "@mui/joy";
import VideoPlayer from "./VideoPlayer";

import Light1 from "../assets/light1.jpg";
import Light2 from "../assets/light2.jpg";
import Light3 from "../assets/light3.jpg";

function RecentWork() {
  const [currentPlayingVideoId, setCurrentPlayingVideoId] = useState(null);

  const handleVideoPlay = (videoId) => {
    setCurrentPlayingVideoId(videoId);
  };
  return (
    <Grid
      container
      height={250}
      xs={12}
      className="d-flex align-items-center justify-content-center mt-2 ms-3"
    >
      <Grid item xs={12} className="mb-4 mt-3">
        <Divider
          sx={{
            width: "96%",
            height: "10px",
            marginTop: "3%",
            color: "black",
            fontWeight: "600",
            fontSize: "30px",
            fontFamily: "Cormorant Garamond",
            marginBottom: "5%",
          }}
        >
          Recent Work
        </Divider>
      </Grid>
      <Grid
        item
        height={250}
        xs={4}
        className="d-flex align-items-center justify-content-center"
      >
        <VideoPlayer
          url="https://res.cloudinary.com/slava-cloud/video/upload/v1695930741/video/video1_qkrbsl.mp4"
          light={Light1}
          videoId="video1"
          isPlaying={currentPlayingVideoId === "video1"}
          onPlay={handleVideoPlay}
        />
      </Grid>
      <Grid
        item
        height={250}
        xs={4}
        className="d-flex align-items-center justify-content-center"
      >
        <VideoPlayer
          url="https://res.cloudinary.com/slava-cloud/video/upload/v1695934223/video/video_2023-09-28_21-50-03_hufxdg.mp4"
          light={Light2}
          videoId="video2"
          isPlaying={currentPlayingVideoId === "video2"}
          onPlay={handleVideoPlay}
        />
      </Grid>
      <Grid
        item
        height={250}
        xs={4}
        className="d-flex align-items-center justify-content-center"
      >
        <VideoPlayer
          url="https://res.cloudinary.com/slava-cloud/video/upload/v1695941773/video/video3_umlvnk.mp4"
          light={Light3}
          videoId="video3"
          isPlaying={currentPlayingVideoId === "video3"}
          onPlay={handleVideoPlay}
        />
      </Grid>
    </Grid>
  );
}

export default RecentWork;
