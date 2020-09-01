import React from "react";
import { Link } from "react-router-dom";
import "../components.css";
import Resume from "../docs/Natalie-Resume.pdf";

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
          <li className="nav-item1">
            <Link className="nav-link" to="Collaborations">
              Projects
            </Link>
          </li>
          <li className="nav-item2">
            <Link className="nav-link" to="Contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="dropdown">
        <Link
          className="dropdown-button btn-secondary dropdown-toggle"
          to="#"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Natalie's Links
        </Link>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <Link className="dropdown-item" to="">
            GitHub
          </Link>
          <Link className="dropdown-item" to="">
            Heroku
          </Link>
          <Link className="dropdown-item" to="">
            LinkedIn
          </Link>
          <Link className="dropdown-item" to={Resume}>
            Resume (PDF)
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;