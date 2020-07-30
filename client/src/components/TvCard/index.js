import React from "react";
import "./style.css";
import noImage from "../../images/noImageFound.png";

function TvCard(props) {
  console.log(props);
  if (props.poster) {
    return (
      <div className="card text-white">
        <div className="card-image">
          <img
            alt={props.name}
            src={"https://image.tmdb.org/t/p/w500/" + props.poster}
            className="img-responsive card-img-top"
            width="100%"
          />
        </div>
        <div className="card-body text-white">
          <h4 id="show-title">{props.name}</h4>
        </div>
        <div>
          <button type="button" className="btn btn-outline-light">
            Average rating: {props.rating}
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="card text-white">
        <div className="card-image">
          <img
            alt={props.name}
            src={noImage}
            className="img-responsive card-img-top"
            width="100%"
          />
        </div>
        <div className="card-body text-white">
          <h4 id="show-title">{props.name}</h4>
        </div>
        <div>
          <button type="button" className="btn btn-outline-light">
            Avg. rating: {props.rating}
          </button>
        </div>
      </div>
    );
  }
}

export default TvCard;
