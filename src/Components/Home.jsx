import React from "react";

import Card from "@material-ui/core/Card";
import Main from "../Images/ShelsSide.jpg";

import Paper from "@material-ui/core/Paper";

import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: "95vw",
    minWidth: 345,
    margin: "15px",
  },
  container: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Paper className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Picture of Barber"
            style={{ height: "350" }}
            image={Main}
            title="Picture of Barber"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              I can’t seem to wipe the smile off my face, I have some BIG news
              for my guys out there! Okay here we go...
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              I’m excited to let you know my passion has pushed me into going
              out on my own fully!
              <br />
              <br />
              I’m opening my own luxury barbershop suite newly constructed in
              Loveland starting the first week of August! I can’t wait for you
              fellas to see and experience what I’ve dreamed of for us for a
              while! I’ll be thrilled to welcome you into my new creative space
              where I can continue to offer you the same quality cuts you desire
              and deserve and leave the shop feeling more empowered and fresh.
              <br />
              <br /> As always I will continue my strict cleaning rituals and
              provide a space that makes you feel comfortable and at ease.
              Expect also for manly vibes and decor you may not know how to
              handle. Thank you for all your support throughout these years I
              can’t believe this is happening but when your gut speaks to you,
              you listen. I’ll be sharing more information about the shop
              throughout the day and week. So stay tuned! If you have any
              questions please let me know! Be well! I’ll see you soon!
            </Typography>
          </CardContent>
        </CardActionArea>
      </Paper>
    </div>
  );
};

export default Home;
