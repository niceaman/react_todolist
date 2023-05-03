import React from "react";
import { TextField } from "@mui/material";

export const Input = (props) => {
  return (
    <TextField
      fullWidth
      label={props.label}
      placeholder={props.placeholder}
      color="primary"
      error={true}
      type={props.type || "text"}
      variant="outlined"
    />
  );
};
