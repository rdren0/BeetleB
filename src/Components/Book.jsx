import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";

import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import TouchAppIcon from "@material-ui/icons/TouchApp";
import Footer from "./Footer";

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
    margin: "30px 30px 30px 30px",
    padding: "15px",
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
  covid: {
    fontSize: "20px",
    margin: "15px",
  },
});

export default function Book() {
  const classes = useStyles();

  return (
    <div>
      <h5 className={classes.covid}>
        Due to COVID-19 guidelines, visits are by appointment only at this time.
      </h5>

      <div className={classes.container}>
        <Card className={classes.root}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Book Online:
            </Typography>
            <Button
              color="default"
              className={classes.icons}
              startIcon={
                <TouchAppIcon style={{ height: "100px", width: "100px" }} />
              }
              href="https://square.site/book/AEAPGYZE9KXJG/shelsey-sybrandts-loveland-co"
            />
          </CardContent>
        </Card>
        <Footer />
      </div>
    </div>
  );
}
