import React from "react";
import "./style.css";
import noImage from "../../images/noImageFound.png";

function TvCard(props) {
  console.log(props);
  if (props.poster) {
    return (
      <div className="card text-white bg-dark">
        <div className="card-image">
          <img
            alt={props.name}
            src={"https://image.tmdb.org/t/p/w500/" + props.poster}
            className="img-responsive card-img-top"
            width="100%"
          />
          <h1>{props.name}</h1>
        </div>
      </div>
    );
  } else {
    return (
      <div className="card text-white bg-dark">
        <div className="card-image">
          <img
            alt={props.name}
            src={noImage}
            className="img-responsive card-img-top"
            width="100%"
          />
          <h1>{props.name}</h1>
        </div>
      </div>
    );
  }
}

export default TvCard;
