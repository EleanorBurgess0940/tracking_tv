import API from "../utils/API";
import React, { Component } from "react";
import Nav from "../components/Nav";
import ShowDetails from "../components/ShowDetails";

class tvShow extends Component {
  state = {
    shows: [],
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
    name: "",
    results: [],
  };

  componentDidMount() {
    API.getShow(localStorage.getItem("showid")).then((res) => {
      if (res.data.status === "error") {
        throw new Error(res.data.message);
      }
      console.log(res);
      this.setState({
        tvShow: res.data.name,
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

  handleShowSave = (res) => {
    console.log(res);
    API.saveShow({
      TheMovieDBAPIshowID: localStorage.getItem("showid"),
      name: tvShow,
      hasWatched: false,
    }).then(console.log("hello"));
  };

  render() {
    return (
      <div className="tvshow">
        <Nav />
        <ShowDetails state={this.state} />
        <button className="btn" onClick={this.handleShowSave} type="submit">
          Watch Later?
        </button>
      </div>
    );
  }
}
export default tvShow;
