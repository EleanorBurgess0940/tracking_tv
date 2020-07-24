import React from "react";
import "./style.css";

function Jumbotron() {
    return (
        <div>
            <div className="jumbotron bg-dark text-white">
                <h1 className="display-4">Your shows. Your schedule.</h1>
                <p className="lead">Find something to watch now. Save shows for later. You're in control.</p>
                <form class="form-inline d-flex justify-content-center md-form form-sm">
                    <input class="form-control form-control-sm mr-3 w-75" type="text" placeholder="Start searching shows"
                        aria-label="Search"></input>
                    <i class="fas fa-search" aria-hidden="true"></i>
                </form>
            </div>
        </div>
    );
}

export default Jumbotron;
