import React from "react";
import "./style.css";

function showdetails(props) {
  console.log(props);
  return (
    <div>
      <div className="wrapper">
        <div className="row">
          <div className="col-sm-4">
            <img className="img-responsive" id="image-detail" alt={props.state.tvshow}
              src={"https://image.tmdb.org/t/p/w500/" + props.state.tvposter} />
          </div>
          <div className="col-sm-8">
            <div className="card" id="card-margin">
              <div className="card-header">
                <h2 id="show-name">{props.state.tvshow}
                </h2>
              </div>
              <div className="card-body">
                <h3>Overview</h3>
                <h5>{props.state.overview}</h5>
                <h3>
                  <span className="badge badge-pill badge-light">Average viewer rating: {props.state.voteAverage}</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div >
    </div >


  );
}
export default showdetails;
