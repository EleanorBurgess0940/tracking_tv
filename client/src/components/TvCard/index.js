import React from "react";
import "./style.css";
import noImage from "../../images/noImageFound.png";
import CardWrapper from "../CardWrapper";

function TvCard(props) {
  console.log(props);
  if (props.poster) {
    return (
      <CardWrapper>
        <div className="card text-white bg-dark">
          <div className="card-image">
            <img
              alt={props.name}
              src={"https://image.tmdb.org/t/p/w500/" + props.poster}
              className="img-responsive card-img-top"
              width="100%"
            />
            <h3>{props.name}</h3>
          </div>
        </div>
      </CardWrapper>
    );
  } else {
    return (
      <CardWrapper>
        <div className="card text-white bg-dark">
          <div className="card-image">
            <img
              alt={props.name}
              src={noImage}
              className="img-responsive card-img-top"
              width="100%"
            />
            <h3>{props.name}</h3>
          </div>
        </div>
      </CardWrapper>

    );
  }
}

export default TvCard;
