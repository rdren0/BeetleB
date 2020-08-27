import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import Cut from "../Images/standard.png";
import Fades from "../Images/Fades.png";
import Shave from "../Images/Shave.png";
import Unique from "../Images/Unique.png";
import Footer from "./Footer";
import Grid from "./Grid";

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    // minWidth: 345,
    margin: "5px",
    // height: "550px",
  },
  container: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    padding: "3vh",
  },
});

export default function Services() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.container}>
        <Card className={classes.root}>
          <CardActionArea>
            <Typography gutterBottom variant="h6" component="h6">
              Regular Haircuts
            </Typography>
            <Grid image={Cut} />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Ages 8 & up. Side lengths from #OA (or 1/2) to scissor cut on
                sides. Scissor cutting on top length.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className={classes.root}>
          <CardActionArea>
            <Typography gutterBottom variant="h6" component="h6">
              Skin Fades and Razor Fades
            </Typography>
            <Grid image={Fades} />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Skin fade- #OOO on sides and clipper or scissor cut on top.
                Razor fade- Choose between electric shaver or straight razor on
                sides and clipper or scissor cut on top.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className={classes.root}>
          <CardActionArea>
            <Typography gutterBottom variant="h6" component="h6">
              Other Styles to Consider (Be Unique)
            </Typography>
            <Grid image={Unique} />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Flat-tops, Mullets, Mohawks, Designs, Buzz etc.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className={classes.root}>
          <CardActionArea>
            <Typography gutterBottom variant="h6" component="h6">
              Shaves
            </Typography>
            <Grid image={Shave} />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Full Shave- Not a hair left in sight. Partial Shave- If you wish
                to keep a beard, goatee, or other facial hair and need the neck
                and cheeks shaved clean.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      <Footer />
    </div>
  );
}
