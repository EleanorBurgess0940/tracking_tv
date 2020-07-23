import React from "react";
import "./style.css";

function MovieCard(props) {
    console.log(props)
    return (
        <div className="card text-white bg-dark">
            <img alt={props.name} src={props.poster} className="img-responsive card-img-top" width="100%" />
            <div className="card-body">
                <h4 className="card-title">Show:{props.name}</h4>
                <div className="text-center">
                </div>
            </div>
        </div>
    );
}

export default MovieCard;