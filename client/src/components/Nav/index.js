import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" id="navColor">
      <h2>
        <Link className="nav-link text-white" to={"/"}>
          ScreenStream
                </Link></h2>
      <button className="navbar-toggler ml-auto hidden-sm-up float-xs-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse flex-row-reverse" id="navbarNavAltMarkup">
        <div>
          <Link className="nav-link text-white" to={"/signup"}>
            Sign up
                </Link>
          <Link className="nav-link text-white" to={"/login"}>
            Login
                </Link>
        </div>
      </div>
    </nav >
  );
}

export default Nav;