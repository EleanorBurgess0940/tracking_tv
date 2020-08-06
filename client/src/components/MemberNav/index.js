import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import axios from "axios";

import { NotificationManager } from "react-notifications";

class MemberNav extends Component {
  constructor() {
    super();
    this.signout = this.signout.bind(this);
  }

  signout(event) {
    event.preventDefault();
    axios
      .post("/api/logout")
      .then((response) => {
        if (response.status === 200) {
          this.props.updateUser({
            loggedIn: false,
            username: null,
            redirectTo: "/",
          });
          NotificationManager.success(
            "You have successfully logged out!",
            "Success!"
          );
          this.setState({});
        }
      })
      .catch((error) => {
        console.log(error);
        console.log("Logout error");
        NotificationManager.error(
          "There was an error with logging out!",
          "Error"
        );
      });
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark" id="navColor">
        <h1>
          <Link className="nav-link text-white app-name bg-sgv" to={"/member"}>
            <img src="./assets/tvlogo.svg" alt="TV Logo" id="logo"></img>Track
          </Link>
        </h1>
        <button
          className="navbar-toggler ml-auto hidden-sm-up float-xs-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse flex-row-reverse"
          id="navbarNavAltMarkup"
        >
          <div>
            <Link className="nav-link text-white app-name" to={"/savedshows"}>
              Saved Shows
            </Link>
            <Link className="nav-link text-white app-name" to={"/member"}>
              Search
            </Link>
          </div>
          <div>
            <button
              className="btn btn-outline-light"
              id="signout"
              onClick={this.signout}
            >
              Sign Out
            </button>
          </div>
        </div>
      </nav>
    );
  }
}

export default MemberNav;
