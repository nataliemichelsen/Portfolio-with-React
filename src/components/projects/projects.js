import React from "react";
import { Link } from "react-router-dom";
import "../components.css";

function Projects(props) {
  return (
    <div
      className="col-lg-4 project-details"
      data-name={props.data}
      onClick={props.handleClick}
    >
      <Link to="" onClick={(event) => event.preventDefault()}>
        <img src={props.img} alt={`Gif or Screenshot of ${props.alt}`} />
        <p>{props.name}</p>
      </Link>
    </div>
  );
}

export default Projects;