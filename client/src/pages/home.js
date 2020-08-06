import API from "../utils/API";
import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import SearchResults from "../components/searchResults";
import Nav from "../components/Nav";
import axios from "axios";
import { Redirect } from "react-router-dom";

class homepage extends Component {
  state = {
    search: "",
    error: "",
    results: [],
  };

  componentDidMount() {
    API.getPopular()
      .then((res) => this.setState({ tvShows: res.data.results }))
      .catch((err) => console.log(err));
    this.getUser();
  }

  getUser() {
    axios.get("/api/user").then((response) => {
      if (response.data.user) {
        this.setState({
          loggedIn: true,
          username: response.data.user.username,
          shows: response.data.user.shows,
          redirectTo: "/member",
        });
        window.sessionStorage.setItem("email", response.data.user.email);
        console.log(this.state.shows);
      } else {
        this.setState({
          loggedIn: false,
          username: null,
          shows: [],
        });
        window.sessionStorage.setItem("email", "null");
      }
    });
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

  render() {
    if (this.state.redirectTo) {
      console.log(this.state.redirectTo);
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <div className="homepage">
          <Nav />
          <Jumbotron
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
          />
          <SearchResults tvShows={this.state.tvShows} />
        </div>
      );
    }
  }
}
export default homepage;
