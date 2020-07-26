import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    height: "100vh",
    backgroundSize: "contain",
    backgroundImage:
      'url("https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")',
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1>Shelsey</h1>
    </div>
  );
};

export default Home;
