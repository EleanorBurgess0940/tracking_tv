import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div className="wrapper">
        <div className="navbar" id="navColor">
          <div id="main-content">
            <a className="navbar-brand nav-link" href="home.html">
              <h2>
                <Link className="nav-link text-white" to={"/"}>
                  ScreenStream
                </Link>
              </h2>
            </a>
          </div>
          <div id="sidebar">
            <ul className="navbar list-group list-group-horizontal">
              <li className="nav-item active">
                <Link className="nav-link text-white" to={"/signup"}>
                  Sign up
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to={"/login"}>
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
