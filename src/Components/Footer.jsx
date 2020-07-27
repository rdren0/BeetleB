import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    width: "100vw",
    display: "block",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: "1vh",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <h5>BeetleBarber LLC</h5> <h6>(970)-235-2073</h6>
      <h6> 1461 E Eisenhower Blvd #116, Loveland, CO 80537</h6>
    </div>
  );
}
