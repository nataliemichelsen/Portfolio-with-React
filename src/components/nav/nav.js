import React from "react";
import { Link } from "react-router-dom";
import "../components.css";

// class -> className
// href -> to
// a -> Link
function Nav() {
  return (
    <nav className="navbar">
      <span id="header" className="navbar-brand mb-1 h1">
        Natalie Michelsen
      </span>
      <div className="stretch">
        <ul id="items" className="nav navbar-nav navbar-right">
          <li className="nav-item1">
            <Link className="nav-link" to="About">
              About
            </Link>
          </li>
          <li className="nav-item1">
            <Link className="nav-link" to="Portfolio">
              Portfolio
            </Link>
          </li>
          <li className="nav-item2">
            <Link className="nav-link" to="Contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;