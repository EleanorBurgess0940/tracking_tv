import React from "react";
import "./style.css";
import noImage from "../../images/noImageFound.png";
import { useHistory } from "react-router-dom";
import TvCard from "../../components/TvCard";

function UserCard(props) {
  const history = useHistory();
  const displayShows = () => {
    const shows = props.shows;
    const chunkSize = 4;
    const showsChunked = [];
    for (let i = 0; i < shows.length; i += chunkSize) {
      showsChunked.push(shows.slice(i, i + chunkSize));
    }
    return showsChunked.map((showChunk, i) => (
      <div className="row" key={i}>
        {showChunk.map((show, j) => (
          <TvCard key={j} name={show[0]} poster={show[2]} id={show[1]} />
        ))}
      </div>
    ));
  };

  console.log(props);

  return <div className="container">{displayShows()}</div>;
}

export default UserCard;
