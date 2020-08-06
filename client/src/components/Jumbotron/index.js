//This component will create the jumbotorn that includes our search bar/ button

import React from "react";
import "./style.css";

function Jumbotron(props) {
  return (
    <div>
      <div className="jumbotron text-white">
        <h1 className="display-4">Your shows. Your schedule.</h1>
        <p className="lead">
          Find something to watch now. Save shows for later. You're in control.
        </p>
        <form className="form-inline d-flex justify-content-center md-form form-sm">
          <input
            value={props.search}
            onChange={props.handleInputChange}
            type="text"
            className="form-control"
            placeholder="Search a TV Show"
            id="show"
          />
          <button
            type="submit"
            onClick={props.handleFormSubmit}
            className="btn text-white"
          >
            {" "}
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default Jumbotron;
