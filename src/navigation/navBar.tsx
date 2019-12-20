import React from "react";
import { NavLink } from "react-router-dom";
import "./navBar.scss";

export class NavBar extends React.Component {
  public render() {
    return (
      <nav id="nav-bar">
        <ul>
          <li>
            <NavLink to="/" activeClassName="selected" exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/playground" activeClassName="selected">
              Playground
            </NavLink>
          </li>
          <li>
            <NavLink to="/resources" activeClassName="selected">
              Resources
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="selected">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="selected">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
