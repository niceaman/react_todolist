import React from "react";
import { Avatar } from "@mui/material";
import defaultPhotos from "../../assets/user.jpg";

export const UserAvatar = (props) => {
  return (
    <Avatar
      src={props.src || defaultPhotos}
      sx={{ width: 40, heigt: 40, ...props.sx }}
    />
  );
};
