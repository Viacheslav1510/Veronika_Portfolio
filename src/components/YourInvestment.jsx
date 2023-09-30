import React from "react";

import { Grid, Typography, Divider, Box, IconButton } from "@mui/joy";

function YourInvestment() {
  return (
    <Grid container xs={12}>
      <Grid item xs={12} className="mb-5 mt-5">
        <Divider
          sx={{
            width: "96%",
            height: "10px",
            marginTop: "3%",
            marginLeft: "2%",
            color: "black",
            fontWeight: "600",
            fontSize: "30px",
            fontFamily: "Cormorant Garamond",
          }}
        >
          Your Investment
        </Divider>
      </Grid>

      <Grid
        item
        xs={4}
        className="d-flex flex-column align-items-center justify-content-center"
        sx={{ borderRight: "solid 1px grey" }}
      >
        <Typography
          level="h4"
          className="mb-auto text-gold"
          sx={{ color: "#A75D5D", fontFamily: "Lustria" }}
        >
          BASIC
        </Typography>
        <Typography
          level="p"
          className="text-center mb-auto"
          sx={{ fontFamily: "Lustria" }}
        >
          video editing using clients' source data (photos, videos) with
          trending music
        </Typography>
        <Typography level="h3" sx={{ color: "#A75D5D", fontFamily: "Lustria" }}>
          €20
        </Typography>
      </Grid>

      <Grid
        item
        xs={4}
        className="d-flex flex-column align-items-center justify-content-center"
        sx={{ borderRight: "solid 1px grey" }}
      >
        <Typography level="h4" sx={{ color: "#A75D5D", fontFamily: "Lustria" }}>
          STANDARD
        </Typography>
        <Typography
          level="p"
          className="text-center mt-3"
          sx={{ fontFamily: "Lustria" }}
        >
          commercial filming/UGC (bussiness and brand products) with trendig
          music and 5 photos
        </Typography>
        <Typography
          level="h3"
          className="mt-auto"
          sx={{ color: "#A75D5D", fontFamily: "Lustria" }}
        >
          €50
        </Typography>
      </Grid>

      <Grid
        item
        xs={4}
        className="d-flex flex-column align-items-center justify-content-center"
      >
        <Typography level="h4" className="mb-auto" sx={{ color: "#A75D5D" }}>
          PREMIUM
        </Typography>
        <Typography
          level="p"
          className="text-center mt-3"
          sx={{ fontFamily: "Lustria" }}
        >
          filming of the models, business processes, locations of the client's
          business (cafes, restaurants etc) and 10 photos
        </Typography>
        <Typography level="h3" sx={{ color: "#A75D5D", fontFamily: "Lustria" }}>
          €70
        </Typography>
      </Grid>
    </Grid>
  );
}

export default YourInvestment;
