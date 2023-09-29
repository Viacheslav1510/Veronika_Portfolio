import React from "react";

import { Grid, Typography, Divider, Box, IconButton } from "@mui/joy";

function YourInvestment() {
  return (
    <Grid container>
      <Grid item xs={12} className="mb-4 mt-2">
        <Divider
          sx={{
            width: "96%",
            height: "10px",
            marginTop: "3%",
            color: "black",
            fontWeight: "600",
            fontSize: "20px",
          }}
        >
          Your Investment
        </Divider>
      </Grid>
      <Grid item>
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
        <Typography>Hello</Typography>
      </Grid>
      <Grid item></Grid>
      <Grid item></Grid>
    </Grid>
  );
}

export default YourInvestment;
