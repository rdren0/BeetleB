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
              a barber who cruises around in a 69’ VW bug gratefully on her way
              to meet your expectations!
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              I’ve been working with a male-only clientele for over 5 years
              honing and sharpening (pun intended) my skills overtime. I want to
              welcome you into the man cave suite I call my workspace with a
              little something for every guy out there!
              <br />
              <br />
              Specializing in men’s haircutting and shaving my desire is to
              deliver detailed and consistent work time after time. It all
              starts with a thorough consultation, followed by a meticulously
              efficient cutting process paired with a few jokes and barbershop
              banter. Then to top it off, a lather neck shave and shoulder
              massage resulting in what I think you’ll find a valuable and
              intentional service.
              <br />
              <br /> I want you to enter my barbershop with confidence that I
              can help provide whatever look you’re going for. From razor fades
              to fuller cuts, I’m your gal and I’ve got you covered. Desire some
              man-pampering? How about a shampoo with scalp massage after or
              before your cut? Or a hot towel and lather straight razor shave.
              Maybe a beard trim? I want to provide you timeless traditional
              services with my own unique and modern touch. But, no there won’t
              be any dentistry or bloodletting in my suite, not that kind of
              traditional! All jokes aside, I want you to go on with your day
              feeling both refreshed and handsome!
              <br />
              <br />
              Let me know what it is you’re needing! Looking forward to meeting
              you!
            </Typography>
          </CardContent>
        </CardActionArea>
      </Paper>
      <Footer />
    </div>
  );
};

export default Home;
