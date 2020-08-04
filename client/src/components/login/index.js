import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import "./style.css";
import Nav from "../Nav";

import { NotificationManager } from "react-notifications";

class login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      redirectTo: null,
      loggedIn: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    axios
      .post("/api/login", {
        email: this.state.email,
        password: this.state.password,
      })
      .then((response) => {
        if (response.status === 200) {
          // update App.js state
          this.props.updateUser({
            loggedIn: true,
            email: response.data.email,
          });
          NotificationManager.success(
            "You have successfully logged in!",
            "Success!"
          );
          this.setState({
            redirectTo: "/member",
          });
          // update the state to redirect to home
        }
      })
      .catch((error) => {
        console.log("login error: ");
        console.log(error);
        NotificationManager.error(
          "There was an error with logging in!",
          "Error"
        );
      });
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <div>
          <Nav />
          <form className="form-height">
            <h3>Log In</h3>
            <div className="container">
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Email address</label>
                    <input
                      type="text"
                      id="email"
                      className="form-control"
                      name="email"
                      placeholder="Enter email"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="Enter password"
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customCheck1"
                  >
                    Remember me
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="btn"
                onClick={this.handleSubmit}
                id="log-in"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      );
    }
  }
}

export default login;
