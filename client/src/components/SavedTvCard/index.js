//functionality of the saved shows card.
//this includes the delete button on the members page

import React from "react";
import "./style.css";
import noImage from "../../images/noImageFound.png";
import API from "../../utils/API";

function SavedTvCard(props) {
  const handleDelete = () => {
    console.log(props);
    //API call that will delete shows from the members saved shows page
    API.deleteShow({
      TheMovieDBAPIshowID: props.id,
      email: window.sessionStorage.getItem("email"),
      name: props.name,
      poster: props.poster,
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
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
              onClick={() => handleDelete()}
            >
              Delete
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
              onClick={() => handleDelete()}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SavedTvCard;
