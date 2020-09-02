import React from "react";

function Card(props) {
  if (props) {
    return (
      <div>
        <div className="card-body">
          <h2 className="cardTitle" id={props.id + "Title"}>
            {props.title}
          </h2>
          <hr className="line"></hr>
          {props.children}
        </div>
      </div>
    );
  } else {
    return (
      <div className="card" id={props.id ? props.id : "card"}>
        <div className="card-body">{props.children}</div>
      </div>
    );
  }
} return (
  <div className="col-md-5 m-3 card">
      <img src={props.image} className="card-img-top" alt={props.title} />
      <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{props.info}</h6>
          <a href={props.site} className="card-link" target="_blank" rel="noopener noreferrer">Website</a>
          <a href={props.github} className="card-link" target="_blank" rel="noopener noreferrer">Github repo</a>
      </div>
  </div>
);

export default Card;