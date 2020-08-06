//Login component
//makes functionality of the login button
//including the notification that shows up in the right corner

import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import "./style.css";
import Nav from "../Nav";

//imports the notification manager that allows notifactions of success and not success
import { NotificationManager } from "react-notifications";

//various states
class login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      redirectTo: null,
      loggedIn: "",
    };
    //helps get what this is to other pages
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  //helps correct the target name with the user input
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  //axios call that connects to the mongoose database
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
          //react notifactions
          NotificationManager.success(
            "You have successfully logged in!",
            "Success!"
          );
          //reroutes to member page
          this.setState({
            redirectTo: "/member",
          });
          // update the state to redirect to home
        }
      })
      //if error the console and notification manager will alert
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
    //helps return to login page or go on to member page
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
