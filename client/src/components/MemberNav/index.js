import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import axios from "axios";

class MemberNav extends Component {
  constructor() {
    super();
    this.signout = this.signout.bind(this);
  }

  signout(event) {
    console.log("signout");
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
          this.setState({});
        }
      })
      .catch((error) => {
        console.log(error);
        console.log("Logout error");
      });
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark" id="navColor">
        <h1>
          <Link className="nav-link text-white app-name bg-sgv" to={"/"}>
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
            <button
              className="nav-link text-white app-name"
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
