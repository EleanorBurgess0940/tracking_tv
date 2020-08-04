import React from "react";
import "./style.css";

function showdetails(props) {
  console.log(props);
  return (
    <div className="row">
      <p>
        tvshow: {props.state.tvshow} <br></br>
        tvposter: {props.state.tvposter} <br></br>
        episodeRunTime: {props.state.episodeRunTime} <br></br>
        homepage: {props.state.homepage} <br></br>
        nextEpisodeToAir: {props.state.nextEpisodeToAir} <br></br>
        numberOfEpisodes: {props.state.numberOfEpisodes} <br></br>
        numberOfSeasons: {props.state.numberOfSeasons} <br></br>
        overview: {props.state.overview} <br></br>
        posterPath: {props.state.posterPath} <br></br>
        status: {props.state.status} <br></br>
        voteAverage: {props.state.voteAverage} <br></br>
      </p>
    </div>
  );
}
export default showdetails;
