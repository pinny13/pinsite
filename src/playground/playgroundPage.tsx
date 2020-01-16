import React from "react";
import { Route } from "react-router-dom";
import { PlaygroundDefaultPage } from "./playgroundDefaultPage";
import { Square } from "./movingSquare/square";

export class PlaygroundPage extends React.Component {
  render() {
    return (
      <>
        <Route exact path="/playground" component={PlaygroundDefaultPage} />
        <Route path="/playground/square" component={()=><Square totalWidth={100} size={4} moveBy={10}/>} />
      </>
    );
  }
}
