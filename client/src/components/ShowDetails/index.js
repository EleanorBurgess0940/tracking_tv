import React from "react";
import "./style.css";

function showdetails(props) {
  console.log(props);
  return (
    <div>
      <div>
        <img
          className="img-fluid"
          alt={props.state.tvshow}
          src={"https://image.tmdb.org/t/p/w500/" + props.state.tvposter}
        />
      </div>
      <div className="card" id="show-details">
        <h3 className="card-header">{props.state.tvshow}</h3>
        <h3>Overview</h3>
        <h5>{props.state.overview}</h5>
        <h3>
          <span className="badge badge-pill">
            Average viewer rating: {props.state.voteAverage}
          </span>
        </h3>
      </div>
    </div>
  );
}
export default showdetails;
