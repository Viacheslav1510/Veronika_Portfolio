import React, { useState } from "react";

import { Grid, Typography, Divider, Box } from "@mui/joy";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";

//Components
import RecentWork from "./RecentWork";
import YourInvestment from "./YourInvestment";
import MyImage1 from "../assets/avatar.jpg";
import MyImage2 from "../assets/my-avatar2.jpg";

function Home() {
  return (
    <Grid container>
      <Grid
        className="d-flex flex-column align-items-center justify-content-center"
        item
        xs={6}
      >
        <Grid item>
          <Typography
            level="h3"
            sx={{
              fontFamily: "Cormorant Garamond",
              fontSize: "25px",
              fontWeight: 700,
            }}
          >
            Veronika Vernigora
          </Typography>
        </Grid>
        <Box component="div" sx={{ display: "inline" }} width="100%">
          <Divider
            sx={{
              width: "85%",
              height: "2px",
              backgroundColor: "black",
              marginTop: "3%",
              borderColor: "black",
            }}
          />
        </Box>
        <Grid item>
          <Typography
            level="h5"
            sx={{
              fontFamily: "Cormorant Garamond",
              fontSize: "20px",
              fontWeight: 700,
            }}
          >
            Video Creator
          </Typography>
        </Grid>
        <Grid item class="d-flex justify-content-beetween mt-5">
          <a
            target="_blank"
            href="mailto:v.vernigora4@gmail.com"
            className="ms-2 me-2 "
            style={{
              color: "black",
              fontSize: "0.7rem",
              textDecoration: "none",
            }}
          >
            <EmailIcon />
          </a>
          <a
            target="_blank"
            href="https://instagram.com/veronikavernigora?igshid=MzRlODBiNWFlZA=="
            className="ms-2 me-2 "
            style={{
              color: "black",
              fontSize: "0.7rem",
              textDecoration: "none",
            }}
          >
            <InstagramIcon />
          </a>
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <img src={MyImage2} alt="my-image" className="my-image" />
      </Grid>
      <Grid item xs={6}>
        <img src={MyImage1} alt="my-image" className="my-image" />
      </Grid>
      <Grid item xs={6} className="d-flex align-items-center">
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            margin: "40% 10%",
            width: "2px",
            height: "60%",
            backgroundColor: "black",
          }}
        ></Divider>
        <Grid>
          <Typography
            level="h4"
            sx={{
              fontFamily: "Cormorant Garamond",
              fontSize: "28px",
              fontWeight: 700,
            }}
          >
            About Me
          </Typography>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores,
          obcaecati iste quia quod unde consectetur
        </Grid>
      </Grid>
      <RecentWork />
      <YourInvestment />
    </Grid>
  );
}

export default Home;
