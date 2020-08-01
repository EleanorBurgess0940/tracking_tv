import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function MemberNav() {
  return (
    <nav className="navbar navbar-expand-lg" id="navColor">
      <h1>
        <Link className="nav-link text-white app-name bg-sgv" to={"/"}><img src="./assets/tvlogo.svg" alt="TV Logo" id="logo"></img>Track</Link></h1>
      <button className="navbar-toggler ml-auto hidden-sm-up float-xs-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse flex-row-reverse" id="navbarNavAltMarkup">
        <div>
          <Link className="nav-link text-white app-name" to={"/"}>
            Sign Out
                </Link>
        </div>
      </div>
    </nav >
  );
}

export default MemberNav;