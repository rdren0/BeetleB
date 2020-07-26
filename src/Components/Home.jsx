import React from "react";
import Beetle from "../Images/BeetleBarber.svg";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    height: "100vh",
    backgroundSize: "cover",
    backgroundImage:
      'url("https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")',
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
