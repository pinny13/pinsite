import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { NavBar } from "./navigation";
import { Loader} from "./common";

const HomePage = lazy(() => import("./home"));
const PlaygroundPage = lazy(() => import("./playground"));
const ResourcesPage = lazy(() => import("./resources"));
const AboutPage = lazy(() => import("./about"));
const ContactPage = lazy(() => import("./contact"));
const Error404 = lazy(() => import("./common"));

function App() {
  return (
    <Router>
      <NavBar />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/playground" component={PlaygroundPage} />
          <Route path="/resources" component={ResourcesPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route component={Error404} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
