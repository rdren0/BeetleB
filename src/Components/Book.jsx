import React from "react";
import Call from "../Images/bluebug.jpg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {},
  image: {
    height: "100vh",
    width: "60%",
    margin: "0 auto",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${Call})`,
  },
  phone: {
    width: "80vw",
    fontSize: "1em",
    marginLeft: "10vw",
    marginTop: "2vh",
    textAlign: "center",
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
      <br />
      <br />

      <div className={classes.image} />
    </div>
  );
}
