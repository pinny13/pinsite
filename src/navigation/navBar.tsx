import React from "react";
import { NavLink } from "react-router-dom";
import "./navBar.scss";
import logo from "./logo.png";

function toggleTheme() {
  const htmlTag = document.getElementsByTagName("html")[0];
  const toggler = document.querySelector("#themeToggler");
  if (htmlTag.hasAttribute("data-theme")) {
    htmlTag.removeAttribute("data-theme");
    toggler!.innerHTML = "In dark";
    return;
  }

  htmlTag.setAttribute("data-theme", "dark");
  toggler!.innerHTML = "In light";
}

const NavBar = () => {
  return (
    <nav id="nav-bar">
      <ul>
      <img src={logo} className="App-logo" alt="logo" />
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

      [<span id="themeToggler" className="theme-toggle" onClick={toggleTheme}>
        In dark
      </span>]
      </ul>
    </nav>
  );
};

export default NavBar;
