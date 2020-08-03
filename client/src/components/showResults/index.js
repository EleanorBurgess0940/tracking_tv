import React from "react";
import TvCard from "../TvCard";

function ShowResults(props) {
  console.log("here", props);
  const displayShows = () => {
    const show = props.tvShow;
    return (
      <div className="row">
        <p> meow </p>
        <TvCard
          id={show.id}
          name={show.name}
          poster={show.poster_path}
          rating={show.vote_average}
        />
      </div>
    );
  };
  if (typeof props.tvShow != "undefined") {
    return <div className="container">{displayShows()}</div>;
  } else {
    return <div></div>;
  }
}

export default ShowResults;
