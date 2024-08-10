import React from "react";

import Main from "../Images/ShelsSide.jpg";

import Paper from "@material-ui/core/Paper";

import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "40vw",
    minWidth: 345,
    margin: "15px",
  },
  container: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    flex: "1 0 auto",
    margin: theme.spacing(1),
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Paper className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Picture of Barber"
            image={Main}
            title="Picture of Barber"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              My name is Shelsey
              <span style={{ fontWeight: "400", fontSize: "18px" }}>
                {" "}
                (shell-sea){" "}
              </span>
              a barber who cruises around in a 69’ VW bug gratefully on her way to meet Loveland’s  grooming expectations for nearly a decade.
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              My husband and co-owner  Ken and I want to welcome you into The Sweetest Barber Suite in the Sweetheart City! 
              <br /> 
              Offering a service fit for every white collar, blue collar to tie dyed collar! Specializing in men’s haircutting and shaving Beetle Barber’s desire is to deliver detailed and consistent work time after time. 
              <br />
              It all starts with a thorough consultation, followed by a meticulously efficient cutting process paired with a few jokes and barbershop banter. Resulting in what we think you’ll find a valuable and intentional service. 
              <br />
              Loveland, we are grateful to have you and your loved ones in our chair. 
            </Typography>
          </CardContent>
        </CardActionArea>
      </Paper>
      <Footer />
    </div>
  );
};

export default Home;
