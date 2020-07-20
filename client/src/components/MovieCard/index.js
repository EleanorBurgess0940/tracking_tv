import React from "react";
import "./style.css";

function MovieCard(props) {
    console.log(props)
    return (
        <div className="card text-white bg-dark border-success">
            <img alt={props.title} src={props.image} className="img-responsive" width="100%" />
            <div className="card-body">
                <h5 className="card-title">Show title</h5>
                <p className="card-text">About show</p>
                <div className="text-center">
                </div>
            </div>
        </div>
    );
}

export default MovieCard;