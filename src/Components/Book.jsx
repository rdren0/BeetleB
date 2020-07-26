import React from "react";
import Call from "../Images/bookings.jpg";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";

import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
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
  button: {
    backgroundColor: "#212121",
    color: "white",
    height: "40px",
    width: "250px",
    lineHeight: "38px",
    padding: "3px",
    borderRadius: "3px",
    cursor: "pointer",
    display: "inline-block",
    textDecoration: "none",
    ":&hover": { background: "#2C3E50" },
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
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Make an Appointment Online:
            </Typography>

            <Button variant="link" color="default">
              <a
                className={classes.button}
                target="_top"
                href="https://square.site/book/AEAPGYZE9KXJG/shelsey-sybrandts-loveland-co"
              >
                Book Now
              </a>
            </Button>
            <Typography gutterBottom variant="h5" component="h2">
              Text or Call:
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <a style={{ fontSize: "25px" }} href="tel:9702352073">
                (970)235-2073
              </a>
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            alt="Hair Cuts"
            image={Call}
            title="Hair Cuts"
            className={classes.image}
          />
        </CardActionArea>
      </Card>
    </div>
  );
}
