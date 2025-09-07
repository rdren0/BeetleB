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
      <h5>Beetle Barber INC</h5>
      <h6> 1461 E Eisenhower Blvd Suite #111, Loveland, CO 80537</h6>
    </div>
  );
}
