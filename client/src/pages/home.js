import API from "../utils/API";
import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import SearchResults from "../components/searchResults";
import Nav from "../components/Nav";
import SearchHeader from "../components/SearchHeader";

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
    return (
      <div className="homepage">
        <Nav />
        <Jumbotron
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <SearchHeader />
        <SearchResults tvShows={this.state.tvShows} />
      </div>
    );
  }
}
export default homepage;
