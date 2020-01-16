import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { NavBar } from "./navigation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage } from "./home";
import { PlaygroundPage } from "./playground";
import { ResourcesPage } from "./resources";
import { AboutPage } from "./about";
import { ContactPage } from "./contact";
import {Error404} from './common';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/playground" component={PlaygroundPage} />
        <Route path="/resources" component={ResourcesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={Error404} />
      </Switch>
    </Router>
    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
*/
  );
}

export default App;
