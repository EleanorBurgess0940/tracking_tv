import React from "react";
import TvCard from "../TvCard";

function SearchResults(props) {
  console.log(props.tvShows);
  const displayShows = () => {
    const shows = props.tvShows;
    const chunkSize = 4;
    const showsChunked = [];
    for (let i = 0; i < shows.length; i += chunkSize) {
      showsChunked.push(shows.slice(i, i + chunkSize));
    }
    return showsChunked.map((showChunk, i) => (
      <div className="row" key={i}>
        {showChunk.map((show, j) => (
          <TvCard
            key={j}
            name={show.name}
            poster={show.poster_path}
            rating={show.vote_average}
            id={show.id}
          />
        ))}
      </div>
    ));
  };
  if (typeof props.tvShows != "undefined") {
    return <div className="container">{displayShows()}</div>;
  } else {
    return <div></div>;
  }
}

export default SearchResults;
