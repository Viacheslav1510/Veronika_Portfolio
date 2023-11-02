import React, { useState } from "react";
import { Grid, Divider } from "@mui/joy";
import VideoPlayer from "./VideoPlayer";

import Light1 from "../assets/light1.jpg";
import Light2 from "../assets/light2.jpg";
import Light3 from "../assets/light3.jpg";
import Light4 from "../assets/light4.jpg";
import Light5 from "../assets/light5.jpg";
import Light6 from "../assets/light6.jpg";
import Light7 from "../assets/light7.jpg";

function RecentWork() {
  const [currentPlayingVideoId, setCurrentPlayingVideoId] = useState(null);

  console.log(currentPlayingVideoId);
  const handleVideoPlay = (videoId) => {
    setCurrentPlayingVideoId(videoId);
  };
  return (
    <Grid
      container
      height="50vh"
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
        container
        className="d-flex align-items-center justify-content-center mt-2"
      >
        <Grid item xs={4}>
          <VideoPlayer
            url="https://res.cloudinary.com/slava-cloud/video/upload/v1695930741/video/video1_qkrbsl.mp4"
            light={Light1}
            videoId="video1"
            isPlaying={currentPlayingVideoId === "video1"}
            onPlay={handleVideoPlay}
          />
        </Grid>
        <Grid item xs={4}>
          <VideoPlayer
            url="https://res.cloudinary.com/slava-cloud/video/upload/v1695934223/video/video_2023-09-28_21-50-03_hufxdg.mp4"
            light={Light2}
            videoId="video2"
            isPlaying={currentPlayingVideoId === "video2"}
            onPlay={handleVideoPlay}
          />
        </Grid>
        {/* <Grid item xs={4}>
          <VideoPlayer
            url="https://res.cloudinary.com/slava-cloud/video/upload/v1695941773/video/video3_umlvnk.mp4"
            light={Light3}
            videoId="video3"
            isPlaying={currentPlayingVideoId === "video3"}
            onPlay={handleVideoPlay}
          />
        </Grid> */}
        <Grid item xs={4}>
          <VideoPlayer
            url="https://res.cloudinary.com/slava-cloud/video/upload/v1698939019/video/ashley_r6hfxw.mov"
            videoId="video4"
            light={Light4}
            isPlaying={currentPlayingVideoId === "video4"}
            onPlay={handleVideoPlay}
          />
        </Grid>
        <Grid item xs={4}>
          <VideoPlayer
            url="https://res.cloudinary.com/slava-cloud/video/upload/v1698941731/video/IMG_0213_2_lqs8y4.mp4"
            videoId="video5"
            light={Light5}
            isPlaying={currentPlayingVideoId === "video5"}
            onPlay={handleVideoPlay}
          />
        </Grid>
        <Grid item xs={4}>
          <VideoPlayer
            url="https://res.cloudinary.com/slava-cloud/video/upload/v1698942201/video/IMG_0225_jlg8d0.mp4"
            videoId="video6"
            light={Light6}
            isPlaying={currentPlayingVideoId === "video6"}
            onPlay={handleVideoPlay}
          />
        </Grid>
        <Grid item xs={4}>
          <VideoPlayer
            url="https://res.cloudinary.com/slava-cloud/video/upload/v1698943281/video/IMG_0436_enl7fj.mp4"
            videoId="video7"
            light={Light7}
            isPlaying={currentPlayingVideoId === "video7"}
            onPlay={handleVideoPlay}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default RecentWork;
