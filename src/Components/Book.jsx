import React from "react";
import Call from "../Images/bluebug.jpg";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minWidth: 345,
    margin: "15px",
  },
  container: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
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
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Hair Cuts"
            height="240"
            image={Call}
            title="Hair Cuts"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Text or Call to book an appointment
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <a style={{ fontSize: "25px" }} href="tel:9702352073">
                (970)235-2073
              </a>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
