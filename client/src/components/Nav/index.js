import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div class="wrapper">
        <div class="navbar navbar-light bg-light">
          <div id="main-content">
            <a class="navbar-brand nav-link" href="home.html">
              <h2>
                <Link className="nav-link" to={"/"}>
                  Track Vision
                </Link>
              </h2>
            </a>
          </div>
          <div id="sidebar">
            <ul class="navbar list-group list-group-horizontal">
              <li class="nav-item active">
                <Link className="nav-link" to={"/signup"}>
                  Sign up
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to={"/login"}>
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
