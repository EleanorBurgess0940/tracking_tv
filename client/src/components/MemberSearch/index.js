import React from "react";
import "./style.css";

function MemberSearch(props) {
    return (
        <div>
            <div className="jumbotron text-white">
                <h1 className="display-4">Welcome.</h1>
                <p className="lead">
                    Pick up where you left off. Find something new.</p>
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

export default MemberSearch;
