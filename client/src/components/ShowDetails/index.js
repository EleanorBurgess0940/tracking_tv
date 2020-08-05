import React from "react";
import "./style.css";

function showdetails(props) {
  console.log(props);
  return (
    <div>
      <div className="wrapper">
        <div className="row">
          <div className="col-sm-3">
          </div>
          <div className="col-sm-6">
            <div className="card">
              <h2 className="card-header">{props.state.tvshow}</h2>
              <img className="card-img-top"
                alt={props.name}
                src={"https://image.tmdb.org/t/p/w500/" + props.state.tvposter} />
              <h3 className="card-header">Overview</h3>
              <br></br>
              <h6>{props.state.overview}</h6>
              <h3>
                <span className="badge badge-pill">Average viewer rating: {props.state.voteAverage}</span>
              </h3>
              <br></br>
              <h4 className="card-header">More details</h4>
              <br></br>
              <p>No. of seasons: {props.state.numberOfSeasons} </p>
              <p>No. of episodes: {props.state.numberOfEpisodes} </p>
              <p>Homepage: {props.state.homepage} </p>
              <p>Status: {props.state.status}  </p>
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


{/* <div className="col-sm-6">
            <div className="card">
              <h2 className="card-header">{props.state.tvshow}</h2>
              <img className="card-img-top"
                alt={props.name}
                src={"https://image.tmdb.org/t/p/w500/" + props.state.tvposter} />
              <h3>
                <span className="badge badge-pill">Average viewer rating: {props.state.voteAverage}</span>
              </h3>
            </div>
          </div> */}