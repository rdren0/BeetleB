import React from "react";
import { Route } from "react-router-dom";

import Home from "./Components/Home";
import Services from "./Components/Services";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import Book from "./Components/Book";
import Nav from "./Components/Nav";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import "./App.css";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#212121" },
    secondary: { main: "#F3F3F3" },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Nav />
        <div className="main">
          <Route exact path="/" component={Home} />
          <Route exact path="/Services" component={Services} />
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/Book" component={Book} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
