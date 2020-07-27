import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import Cut from "../Images/cut.jpg";
import Razor from "../Images/services.jpg";
import Shampoo from "../Images/shampoo.jpg";
import Footer from "./Footer";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minWidth: 345,
    margin: "5px",
  },
  container: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    padding: "20px",
  },
});

export default function Services() {
  const classes = useStyles();

  return (
    <div>
      <h1>Services:</h1>
      <div className={classes.container}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Haircuts"
              height="240"
              image={Cut}
              title="Haircuts"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Haircuts
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Standard, buzz, skin, razor fades and designs
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Shaves"
              height="240"
              image={Razor}
              title="Shaves"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Shaves
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Full and Partial
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Shampoo"
              height="240"
              marginTop="200"
              image={Shampoo}
              title="Shampoo"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Shampoo
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                A la carte
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      <Footer />
    </div>
  );
}
