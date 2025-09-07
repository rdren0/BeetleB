import React from "react";
import { Route } from "react-router-dom";
import MinimalHeader from "./Components/MinimalHeader";
import MinimalHome from "./Components/MinimalHome";
import MinimalServices from "./Components/MinimalServices";
import MinimalContact from "./Components/MinimalContact";
import MinimalFooter from "./Components/MinimalFooter";
import "./styles/minimal.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <MinimalHeader />
      <main className="main">
        <Route exact path="/" component={MinimalHome} />
        <Route path="/services" component={MinimalServices} />
        <Route path="/contact" component={MinimalContact} />
      </main>
      <MinimalFooter />
    </div>
  );
}

export default App;
