import React from "react";
import Call from "../Images/bluebug.jpg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {},
  image: {
    height: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${Call})`,
  },
  phone: {
    width: "80vw",
    position: "absolute",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "15vh",
    left: 0,
    right: 0,
    textAlign: "center",
  },
  a: {
    fontSize: "45px",
    ":&before": {
      content: "B0E",
      display: "block",
      marginRight: "0.5em",
    },
  },
});

export default function Book() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.phone}>
        <h1>
          Text or Call <br /> to book an appointment
        </h1>
        <br />
        <a style={{ fontSize: "25px" }} href="tel:9702352073">
          (970)235-2073
        </a>
      </div>

      <div className={classes.image} />
    </div>
  );
}
