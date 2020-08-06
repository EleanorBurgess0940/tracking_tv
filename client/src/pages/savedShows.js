import API from "../utils/API";
import React, { Component } from "react";
import SavedHeader from "../components/SavedHeader";
import UserCard from "../components/UserCard";
import MemberNav from "../components/MemberNav";
import axios from "axios";
import { Redirect } from "react-router-dom";

class savedShows extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      error: "",
      results: [],
      shows: [],
      loggedIn: null,
      username: null,
      redirectTo: null,
    };

    this.getUser = this.getUser.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  getUser() {
    axios.get("/api/user").then((response) => {
      if (response.data.user) {
        this.setState({
          loggedIn: true,
          username: response.data.user.username,
          shows: response.data.user.shows,
        });
        window.sessionStorage.setItem("email", response.data.user.email);
        console.log(this.state.shows);
      } else {
        this.setState({
          loggedIn: false,
          username: null,
          shows: [],
          redirectTo: "/login",
        });
        window.sessionStorage.setItem("email", "null");
      }
    });
  }

  componentDidMount() {
    this.getUser();

    API.getPopular()
      .then((res) => this.setState({ tvShows: res.data.results }))
      .catch((err) => console.log(err));
  }

  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    API.tvSearch(this.state.search)
      .then((res) => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ tvShows: res.data.results });
      })
      .catch((err) => this.setState({ error: err.message }));
  };

  updateUser(userObject) {
    this.setState(userObject);
  }

  render() {
    if (this.state.redirectTo) {
      console.log(this.state.redirectTo);
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <div>
          <MemberNav updateUser={this.updateUser} />
          <SavedHeader />
          <br></br>
          <UserCard shows={this.state.shows} />
        </div>
      );
    }
  }
}

export default savedShows;
