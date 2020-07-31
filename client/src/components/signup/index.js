import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import "./style.css";


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
        console.log(response);
        if (response.data) {
          if (response.data.errors) {
            console.log(response.data.message);
          } else {
            this.setState({
              redirectTo: "/login",
            });
          }
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

            <button
              className="btn"
              onClick={this.handleSubmit}
              type="submit">Sign Up</button>

            <p className="forgot-password text-center">
              Already registered? <a href="/login" id="sign-in">Sign in</a>
            </p>
          </div>

        </form>
      );
    }
  }
}
