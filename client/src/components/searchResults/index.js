import React from "react";
import TvCard from "../TvCard";
import "./style.css";

function SearchResults(props) {
  console.log(props.tvShows);
  if (typeof props.tvShows != "undefined") {
    return (
      <div className="results">
        {props.tvShows.map((result, i) => {
          return (
            <TvCard key={i} name={result.name} poster={result.poster_path} />
          );
        })}
      </div>
    );
  } else {
    return <div> BUBKIS</div>;
  }
}

export default SearchResults;
