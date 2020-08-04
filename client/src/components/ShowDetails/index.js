import React from "react";
import "./style.css";
import noImage from "../../images/noImageFound.png";

function ShowDetails(props) {
  if (props.poster) {
    return (
      <div className="col-sm-3">
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
            <h4>Average rating: {props.rating}</h4>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="col-sm-3">
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
            <div>
              <h4>Average rating: {props.rating}</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowDetails;
