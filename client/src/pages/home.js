//Homepage
//various variables are brought in
import API from "../utils/API";
import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import SearchResults from "../components/searchResults";
import SearchHeader from "../components/SearchHeader";
import Nav from "../components/Nav";
import axios from "axios";
import { Redirect } from "react-router-dom";

//couple of classes are set
class homepage extends Component {
  state = {
    search: "",
    error: "",
    results: [],
    searchHeader: "What's popular today",
  };

  //When homepage loads the api call to get popular shows is sent
  //changes the array tvShows to popular show results
  componentDidMount() {
    API.getPopular()
      .then((res) => this.setState({ tvShows: res.data.results }))
      .catch((err) => console.log(err));
    this.getUser();
  }

  //axios will try and get user and if so the state will change to logged in
  //it will also redirect you to member page

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

  //lets user type in and it changes the value of search
  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
  };

  //handles the search functionality
  handleFormSubmit = (event) => {
    event.preventDefault();

    API.tvSearch(this.state.search)
      .then((res) => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ tvShows: res.data.results });
        this.setState({ searchHeader: "Search results" });
      })
      .catch((err) => this.setState({ error: err.message }));
  };

  //renders the rest of the page
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
          <SearchHeader searchHeader={this.state.searchHeader} />
          <SearchResults tvShows={this.state.tvShows} />
        </div>
      );
    }
  }
}
export default homepage;
