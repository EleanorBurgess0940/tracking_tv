import React from "react";
import "./style.css";

function showdetails(props) {
  console.log(props);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <h2 className="card-header">{props.state.tvshow}</h2>
              <img className="card-img-top"
                alt={props.name}
                src={"https://image.tmdb.org/t/p/w500/" + props.state.tvposter} />
              <h3>Overview</h3>
              <h5>{props.state.overview}</h5>
              <h3>
                <span className="badge badge-pill">Average viewer rating: {props.state.voteAverage}</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
export default showdetails;






{/* <div className="img-fluid" style={{ backgroundImage: 'url("https://image.tmdb.org/t/p/w500/' + props.state.tvposter + '")' }} ></div > */ }

{/* <div className="card">
                <h2>{props.state.tvshow}</h2>
                <h3>Overview</h3>
                <h5>{props.state.overview}</h5>
                <h3>
                  <span className="badge badge-pill">Average viewer rating: {props.state.voteAverage}</span>
                </h3>
              </div>
            </div> */}
