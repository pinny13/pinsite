import React from "react";
import { Route } from "react-router-dom";
import PlaygroundDefaultPage from "./playgroundDefaultPage";
import { Square } from "./toys/movingSquare/square";

const PlaygroundPage = () => {
  return (
    <>
      <Route exact path="/playground" component={PlaygroundDefaultPage} />
      <Route
        path="/playground/square"
        component={() => <Square totalWidth={100} size={4} moveBy={10} />}
      />
    </>
  );
};

export default PlaygroundPage;
