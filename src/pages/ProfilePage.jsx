import React, { Component } from "react";
import { MenuAppBar } from "../components/Common/AppBar";
import { UserAvatar } from "../components/Common/UserAvatas";
import { Box, Grid, Typography, Button } from "@mui/material";
import { Input } from "../components/Common/Input";
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
              <Input label="Firstname"></Input>
            </Grid>
            <Grid item xs={6}>
              <Input label="Lastname" type="password"></Input>
            </Grid>
            <Grid item xs={12}>
              <Input label="Email" type="email"></Input>
            </Grid>
            <Grid item xs={12}>
              <Input label="Birth Day" type="date"></Input>
            </Grid>
            <Grid item xs={6}>
              <Button
                fullWidth
                variant="contained"
                size="large"
                sx={{ backgroundColor: "#db4c3f", padding: 2 }}
              >
                <Typography variant="h5" component="span">
                  Update
                </Typography>
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                fullWidth
                variant="contained"
                size="large"
                sx={{ backgroundColor: "#aaa", padding: 2 }}
              >
                <Typography variant="h5" component="span">
                  Cancel
                </Typography>
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="outlined"
                size="large"
                color="warning"
                sx={{ padding: 2 }}
              >
                <Typography variant="h5" component="span">
                  Logout
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Box>
      </>
    );
  }
}
export default ProfilePage;
