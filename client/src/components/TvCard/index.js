import React from "react";
import "./style.css";
import noImage from "../../images/noImageFound.png";
import { useHistory } from "react-router-dom";

function TvCard(props) {
  const history = useHistory();
  const handleRedirect = () => {
    localStorage.setItem("showid", props.id);
    history.push("/tvshow");
  };

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
            <button
              type="button"
              className="btn btn-outline-light"
              onClick={() => handleRedirect()}
            >
              Info
            </button>
            <button
              onClick={() => this.handleShowSave(props.id)}
              className="btn btn-outline-light"
            >
              Save
            </button>
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
            <button
              type="button"
              className="btn btn-outline-light"
              onClick={() => handleRedirect()}
            >
              Avg. rating: {props.rating}
            </button>
            <button
              onClick={() => this.handleShowSave(props.id)}
              className="btn btn-outline-light"
            >
              Save Show
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default TvCard;
