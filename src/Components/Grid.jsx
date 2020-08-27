import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    // height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  flexImg: {
    display: "flex",
  },
}));

export default function SpacingGrid({ image }) {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          <Grid key={image}>
            <CardMedia
              component="img"
              alt="Shaves"
              maxHeight="340"
              image={image}
              title="Shaves"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
