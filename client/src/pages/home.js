import API from "../utils/API";
import React, { Component } from "react";

import Jumbotron from "../components/Jumbotron";
import SearchResults from "../components/searchResults";

class homepage extends Component {
  state = {
    search: "",
    error: "",
    results: [],
  };

  componentDidMount() {
    API.getShows()
      .then((res) => this.setState({ results: res.data.results }))
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
    return (
      <div className={homepage}>
        <Jumbotron
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <SearchResults tvShows={this.state.tvShows} />
      </div>
    );
  }
}
export default homepage;
