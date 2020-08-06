//information page
//various imports that are needed

import API from "../utils/API";
import React, { Component } from "react";
import Nav from "../components/Nav";
import ShowDetails from "../components/ShowDetails";
import { Redirect } from "react-router-dom";

import "react-notifications/lib/notifications.css";
import { NotificationManager } from "react-notifications";

//various states are set
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
    redirectTo: "",
  };

  //when page loads get the information from the show from movie database API
  //uses local storage to set and keep id around
  componentDidMount() {
    API.getShow(localStorage.getItem("showid")).then((res) => {
      if (res.data.status === "error") {
        throw new Error(res.data.message);
      }
      console.log(res);
      //res has more information than we use --future development
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

  //button at the end of the tv Show card will save said tv show
  handleShowSave = (event) => {
    console.log(event);
    API.saveShow({
      TheMovieDBAPIshowID: localStorage.getItem("showid"),
      name: this.state.tvshow,
      hasWatched: false,
      email: window.sessionStorage.getItem("email"),
      poster: this.state.tvposter,
    }).then((res) => {
      console.log("hello ", res);
    });
    //react notifications
    NotificationManager.success(
      "You have successfully saved a show!",
      "Success!"
    );
    //sends the user to the saved shows page if logged in
    this.setState({ redirectTo: "/savedshows" });
  };

  render() {
    if (this.state.redirectTo) {
      console.log(this.state.redirectTo);
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <div className="tvshow">
          <Nav />
          <ShowDetails
            state={this.state}
            handleShowSave={this.handleShowSave}
          />
        </div>
      );
    }
  }
}
export default tvShow;
