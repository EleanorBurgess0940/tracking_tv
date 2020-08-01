import SearchResults from "../components/searchResults";
import API from "../utils/API";
import React, { Component } from "react";
import MemberSearch from "../components/MemberSearch";
import UserCard from "../components/UserCard";


class member extends Component {
  state = {
    search: "",
    error: "",
    results: [],
  };

  // componentDidMount() {
  //   API.getPopular()
  //     .then((res) => this.setState({ tvShows: res.data.results }))
  //     .catch((err) => console.log(err));
  // }

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
      <div>
        <MemberSearch
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <UserCard />
        <SearchResults tvShows={this.state.tvShows} />
      </div >
    );
  }
}

export default member;