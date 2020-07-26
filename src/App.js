import React from "react";
import { Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import Home from "./Components/Home";
import Services from "./Components/Services";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import Book from "./Components/Book";
import Nav from "./Components/Nav";

import Beetle from "./Images/BeetleBarber.svg";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import "./App.css";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#212121" },
    secondary: { main: "#F3F3F3" },
  },
});

const useStyles = makeStyles((theme) => ({
  logo: {
    height: "13vh",
    width: "35vw",
    margin: "-10px",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <a href="/">
          <img className={classes.logo} alt="Beetle Barber Logo" src={Beetle} />
        </a>
        <Nav />
        <div className="main">
          <Route exact path="/" component={Home} />
          <Route path="/Services" component={Services} />
          <Route path="/Portfolio" component={Portfolio} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Book" component={Book} />
        </div>
        {/* <footer style={{ backgroundColor: "#212121", height: "40px" }} /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
