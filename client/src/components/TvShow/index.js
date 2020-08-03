import React from "react";
import "./style.css";
import { useLocation } from "react-router-dom";
import API from "../../utils/API";
import noImage from "../../images/noImageFound.png";

function TvShow(props) {
  const location = useLocation();
  console.log("location: ", location.state);

  API.getShow(location.state.id)
    .then((res) => {
      if (res.data.status === "error") {
        throw new Error(res.data.message);
      }
      console.log("no error ", res.data);
      if (res.data) {
        return (
          <div className="col-sm-3">
            <div className="card">
              <div className="card-image">
                <img
                  alt={res.data.name}
                  src={
                    "https://image.tmdb.org/t/p/w500" + res.data.backdrop_path
                  }
                  className="img-responsive card-img-top"
                  width="100%"
                />
              </div>
              <div className="card-body text-white">
                <h4 id="show-title">{res.data.name}</h4>
              </div>
              <div>
                <h4>Average rating: {res.data.rating}</h4>
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
                  alt={res.data.name}
                  src={noImage}
                  className="img-responsive card-img-top"
                  width="100%"
                />
              </div>
              <div className="card-body text-white">
                <h4 id="show-title">{res.data.name}</h4>
              </div>
              <div>
                <div>
                  <h4>Average rating: {res.data.rating}</h4>
                </div>
              </div>
            </div>
          </div>
        );
      }
    })
    .catch((err) => console.log("error", err));
}

export default TvShow;
