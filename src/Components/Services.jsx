import React from "react";
import Shave from "../Images/services.jpg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    height: "100vh",
    backgroundSize: "cover",
    backgroundImage: `url(${Shave})`,
  },
});

export default function Services() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1>Services:</h1>
    </div>
  );
}
