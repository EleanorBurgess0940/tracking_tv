import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import "./style.css";

export default class login extends Component {
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
    console.log("handleSubmit");

    axios
      .post("/api/login", {
        email: this.state.email,
        password: this.state.password,
      })
      .then((response) => {
        console.log("login response: ");
        console.log(response);
        if (response.status === 200) {
          // update App.js state
          this.setState({
            loggedIn: true,
            email: response.data.email,
          });
          // update the state to redirect to home
          this.setState({
            redirectTo: "/member",
          });
        }
      })
      .catch((error) => {
        console.log("login error: ");
        console.log(error);
      });
  }

  render() {
    if (this.state.redirectTo) {
      console.log(this.state.redirectTo);
      return <Redirect to={this.state.redirectTo} />;
    } else {
      return (
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
                <label className="custom-control-label" htmlFor="customCheck1">
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
      );
    }
  }
}
