import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import Button from "@material-ui/core/Button";
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied";
import Hours from "./Hours";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";

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
  icons: {
    height: "200px",
  },
});

export default function Contact() {
  const classes = useStyles();

  return (
    <div>
      <div style={{ width: "100%" }}></div>
      <div className={classes.container}>
        <Card className={classes.root}>
          <CardActionArea>
            <iframe
              title="Map"
              style={{
                width: "300px",
                height: "300px",
                frameborder: "0",
                scrolling: "no",
                marginheight: "0",
                marginwidth: "0",
              }}
              src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=1461%20E%20Eisenhower%20Blvd,%20Loveland,%20CO%2080537+(Located%20at)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
            <CardContent>
              <Typography variant="body1" color="textSecondary" component="p">
                <a href="https://goo.gl/maps/tCXUsJVuJ9zb85tNA">
                  1461 E Eisenhower Blvd Suite 116 Loveland, Colorado 80537
                </a>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Hours />
      </div>
      <Button
        variant="link"
        color="default"
        className={classes.icons}
        startIcon={<FacebookIcon style={{ height: "100px", width: "100px" }} />}
        href="https://www.facebook.com/beetlebarber"
      />
      <Button
        variant="link"
        color="default"
        className={classes.icons}
        startIcon={
          <InstagramIcon style={{ height: "100px", width: "100px" }} />
        }
        href="https://www.instagram.com/beetlebarber/"
      />
      <Button
        variant="link"
        color="default"
        className={classes.icons}
        startIcon={
          <SentimentSatisfiedIcon style={{ height: "100px", width: "100px" }} />
        }
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      />
    </div>
  );
}
