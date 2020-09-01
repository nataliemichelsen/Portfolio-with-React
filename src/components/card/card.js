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
}

export default Card;