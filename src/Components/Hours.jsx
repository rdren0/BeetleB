import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: "relative",
    maxHeight: 350,
  },
  listSection: {
    backgroundColor: "inherit",
  },
  ul: {
    backgroundColor: "inherit",
    padding: 0,
  },
}));

export default function PinnedSubheaderList() {
  const classes = useStyles();
  const hours = [
    "Sunday: Closed",
    "Monday: Closed",
    "Tuesday: 12pm-8pm",
    "Wednesday: 9am-5pm",
    "Thursday: 9am-5pm",
    "Friday: 9am-5pm",
    "Saturday: 9am-2pm",
  ];

  return (
    <List className={classes.root} subheader={<li />}>
      <li className={classes.listSection}>
        <ul className={classes.ul}>
          <ListSubheader>Hours of Operation:</ListSubheader>
          {hours.map((item) => (
            <ListItem>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </ul>
      </li>
    </List>
  );
}
