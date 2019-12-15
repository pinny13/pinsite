import React from "react";
import { NavLink } from "react-router-dom";

export class NavBar extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <NavLink to="/" activeClassName="selected">
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
