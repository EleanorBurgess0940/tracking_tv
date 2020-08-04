import SearchResults from "../components/searchResults";
import API from "../utils/API";
import React, { Component } from "react";
import MemberSearch from "../components/MemberSearch";
import UserCard from "../components/UserCard";
import MemberNav from "../components/MemberNav";
import axios from "axios";
import { Redirect } from "react-router-dom";

class member extends Component {
  state = {
    search: "",
    error: "",
    results: [],
    loggedIn: null,
    username: null,
    redirectTo: null,
  };

  getUser() {
    axios.get("/api/user").then((response) => {
      console.log("Get user response: ");
      console.log(response.data);
      if (response.data.user) {
        console.log("Get User: There is a user saved in the server session: ");

        this.setState({
          loggedIn: true,
          username: response.data.user.username,
        });
      } else {
        console.log("Get user: no user");
        this.setState({
          loggedIn: false,
          username: null,
          redirectTo: "/login",
        });
      }
    });
  }

  componentDidMount() {
    console.log("Comp did mount member");
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
        console.log(res.data);
        this.setState({ tvShows: res.data.results });
        console.log(this.state.tvShows);
      })
      .catch((err) => this.setState({ error: err.message }));
  };

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <div className="wrapper">
          <MemberNav />
          <MemberSearch
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
          />
          <UserCard />
          <SearchResults tvShows={this.state.tvShows} />
        </div>
      );
    }
  }
}

export default member;
