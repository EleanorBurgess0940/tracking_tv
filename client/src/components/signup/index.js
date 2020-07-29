import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

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
      .post("/", {
        email: this.state.email,
        password: this.state.password,
      })
      .then((response) => {
        console.log("response");
        if (response.data) {
          this.setState({
            redirectTo: "/login",
          });
        } else {
          console.log("sign-up error");
        }
      })
      .catch((error) => {
        console.log("signup error: ");
        console.log(error);
      });
  }

  render() {
    if (this.state.redirectTo) {
      console.log(this.state.redirectTo);
      return <Redirect to={this.state.redirectTo} />;
    } else {
      console.log("hmm");
      return (
        <form>
          <h3>Sign Up</h3>

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

          <button
            className="btn btn-primary col-1 col-mr-auto"
            onClick={this.handleSubmit}
            type="submit"
          >
            Sign Up
          </button>
          <p className="forgot-password text-right">
            Already registered <a href="/login">sign in?</a>
          </p>
        </form>
      );
    }
  }
}
