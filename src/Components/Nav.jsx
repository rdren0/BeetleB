import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import "../App.css";

import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  tabs: {
    ":&hover": { background: "#2C3E50" },
  },
  logo: {
    backgroundColor: "#f3f3f3",
    height: "20px",
    width: "30px",
    padding: "2px",
    margin: "8px 5px ",
  },
}));

export default function Nav() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Home" component={Link} to="/" />
          <Tab label="Services" component={Link} to="/Services" />
          <Tab label="Book" component={Link} to="/Book" />
          <Tab label="Contact" component={Link} to="/Contact" />
          {/* <Tab label="Portfolio" component={Link} to="/Portfolio" /> */}
        </Tabs>
      </AppBar>
    </div>
  );
}
