import API from "../utils/API";
import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import searchResults from "../components/searchResults";
import Nav from "../components/Nav";
import ShowDetails from "../components/ShowDetails";
import homepage from "./home";

class tvShow extends Component {
  state = {
    tvshow: "",
    tvposter: "",
    episodeRunTime: "",
    homepage: "",
    genres: "",
    nextEpisodeToAir: "",
    numberOfEpisodes: "",
    numberOfSeasons: "",
    overview: "",
    posterPath: "",
    status: "",
    voteAverage: "",
    error: "",
    results: [],
  };

  componentDidMount() {
    API.getShow(localStorage.getItem("showid")).then((res) => {
      if (res.data.status === "error") {
        throw new Error(res.data.message);
      }
      console.log(res);
      this.setState({
        tvshow: res.data.name,
        tvposter: res.data.backdrop_path,
        episodeRunTime: res.data.episodeRunTime,
        homepage: res.data.homepage,
        genres: res.data.genres,
        nextEpisodeToAir: res.data.next_episode_to_air,
        numberOfEpisodes: res.data.number_of_episodes,
        numberOfSeasons: res.data.number_of_seasons,
        overview: res.data.overview,
        posterPath: res.data.poster_path,
        status: res.data.status,
        voteAverage: res.data.vote_average,
      });
    });
  }

  render() {
    return (
      <div className="tvshow">
        <Nav />
        <ShowDetails state={this.state} />
      </div>
    );
  }
}
export default tvShow;
