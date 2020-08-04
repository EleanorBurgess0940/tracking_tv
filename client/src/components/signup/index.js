import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./style.css";
import axios from "axios";
import Nav from "../Nav";

// React Notification
import { NotificationManager } from "react-notifications";

export default class signUp extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      redirectTo: "",
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
      .post("/api/signup", {
        email: this.state.email,
        password: this.state.password,
      })
      .then((response) => {
        if (response.data.errors) {
          this.setState({
            redirectTo: "/",
          });
          NotificationManager.success(
            "There was an error with signing up!",
            "Error"
          );
        } else {
          this.setState({
            redirectTo: "/login",
          });
          NotificationManager.success(
            "You have successfully signed up!",
            "Success!"
          );
        }
      })
      .catch((error) => {
        console.log("signup error: ");
        console.log(error);
      });
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={this.state.redirectTo} />;
    } else {
      return (
        <div>
          <Nav />
          <form className="form-height">
            <h3>Sign Up</h3>
            <div className="container">
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="email">Email address</label>
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

              <button className="btn" onClick={this.handleSubmit} type="submit">
                Sign Up
              </button>

              <p className="forgot-password text-center">
                Already registered?
                <br></br>
                <a href="/login" id="sign-in">
                  Log in
                </a>
              </p>
            </div>
          </form>
        </div>
      );
    }
  }
}
