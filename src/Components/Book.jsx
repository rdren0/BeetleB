import React from "react";
import Call from "../Images/bookings.jpg";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";

import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import CallIcon from "@material-ui/icons/Call";
import TouchAppIcon from "@material-ui/icons/TouchApp";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";

const useStyles = makeStyles({
  root: {
    minWidth: 345,
    margin: "auto 0",
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-around",
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
      <Card>
        <CardContent>
          <Card className={classes.root}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Book Online:
              </Typography>
              <Button
                variant="link"
                color="default"
                className={classes.icons}
                startIcon={
                  <TouchAppIcon style={{ height: "100px", width: "100px" }} />
                }
                href="https://square.site/book/AEAPGYZE9KXJG/shelsey-sybrandts-loveland-co"
              />
            </CardContent>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Text:
              </Typography>
              <Button
                variant="link"
                color="default"
                className={classes.icons}
                startIcon={
                  <PhoneAndroidIcon
                    style={{ height: "100px", width: "100px" }}
                  />
                }
                href="sms:19702352073;?&body=Hello%20Shelsey%20&#1f60e;%20I%20would%20like%20to%20book%20an%20appointment%20for%20-%20"
              />
            </CardContent>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Call:
              </Typography>
              <Button
                variant="link"
                color="default"
                className={classes.icons}
                startIcon={
                  <CallIcon style={{ height: "100px", width: "100px" }} />
                }
                href="tel:+19702352073"
              />
            </CardContent>
          </Card>
          <CardMedia
            component="img"
            alt="Blue VW Beetle"
            image={Call}
            title="Blue VW Beetle"
            className={classes.image}
          />
        </CardContent>
      </Card>
    </div>
  );
}
