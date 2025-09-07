import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import Cut from "../Images/Cuts.png";
import Fades from "../Images/Fades.png";
import Shave from "../Images/Shave.png";
import Beards from "../Images/Beards.png";
import Designs from "../Images/Designs.png";
import Unique from "../Images/Unique.png";
import Grid from "./Grid";

const useStyles = makeStyles({
  root: {
    maxWidth: 500,

    margin: "5px",
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

  const items = [
    {
      title: "Regular Haircuts",
      imageSrc: Cut,
      description:
        "Ages 8 & up. Side lengths from #OA (or 1/2) to scissor cut on sides. Scissor cutting on top length.",
    },
    {
      title: "Skin Fades and Razor Fades",
      imageSrc: Fades,
      description:
        " Skin fade- #OOO on sides and clipper or scissor cut on top. Razor fade- Choose between electric shaver or straight razor on sides and clipper or scissor cut on top.",
    },
    {
      title: "Other Styles to Consider (Be Unique)",
      imageSrc: Unique,
      description: "Flat-tops, Mullets, Mohawks, Buzz etc.",
    },
    { title: "Designs", imageSrc: Designs, description: "Custom Designs" },
    {
      title: "Beards",
      imageSrc: Beards,
      description: "Beard trims and shaping",
    },
    {
      title: "Shaves",
      imageSrc: Shave,
      description:
        "Full Shave- Not a hair left in sight. Partial Shave- If you wish to keep a beard, goatee, or other facial hair and need the neck and cheeks shaved clean.",
    },
  ];

  const cards = items.map((item) => (
    <Card className={classes.root}>
      <Typography gutterBottom variant="h6" component="h6">
        {item.title}
      </Typography>
      <Grid image={item.imageSrc} />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {item.description}
        </Typography>
      </CardContent>
    </Card>
  ));

  return (
    <div>
      <div className={classes.container}>{cards}</div>
    </div>
  );
}
