import React, { Component } from "react";
import { MenuAppBar } from "../components/Common/AppBar";
import { UserAvatar } from "../components/Common/UserAvatas";
import { Box, Grid, Typography } from "@mui/material";

class ProfilePage extends Component {
  render() {
    return (
      <>
        <MenuAppBar />
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} sx={{ padding: 12 }}>
            <Grid item xs={10}>
              <Typography variant="h1" component="h1">
                Edit Profile
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <UserAvatar sx={{ width: 120, height: 120 }} />
            </Grid>
            <Grid item xs={6}>
              Firstname
            </Grid>
            <Grid item xs={6}>
              Lastname
            </Grid>
            <Grid item xs={12}>
              Email
            </Grid>
            <Grid item xs={12}>
              BirthDate
            </Grid>
            <Grid item xs={6}>
              BTN-Update
            </Grid>
            <Grid item xs={6}>
              BTN-Cancel
            </Grid>
            <Grid item xs={12}>
              BTN-Logout
            </Grid>
          </Grid>
        </Box>
      </>
    );
  }
}
export default ProfilePage;
