import React from "react";
import Beetle from "../Images/BeetleBarber.svg";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    height: "100vh",
    margin: "7vw",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundImage:
      'url("https://images.unsplash.com/photo-1511407405731-fee72178ba09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80")',
  },
  logo: {
    zIndex: 3,
    position: "absolute",
    height: "130px",
    bottom: -20,
    left: -15,
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <img className={classes.logo} src={Beetle} alt="Beetle Barber Logo" />
    </div>
  );
};

export default Home;
