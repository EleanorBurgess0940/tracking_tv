import React, { Component } from "react";
import axios from "axios";

export default class signUp extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
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
    console.log("sign-up handleSubmit, username: ");
    console.log(this.state.email);
    axios
      .post("/", {
        email: this.state.email,
        password: this.state.password,
      })
      .then((response) => {
        console.log(response);
        if (response.data) {
          console.log("successful signup");
          this.setState({
            redirectTo: "/login",
          });
        } else {
          console.log("sign-up error");
        }
      });
  }

  render() {
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

        <button type="submit" className="btn btn-primary btn-block">
          Sign Up
        </button>
        <p className="forgot-password text-right">
          Already registered <a href="/login">sign in?</a>
        </p>
      </form>
    );
  }
}
