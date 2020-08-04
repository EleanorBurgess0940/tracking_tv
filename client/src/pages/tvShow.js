import React, { Component } from "react";
import TvShow from "../components/TvShow";

class tvShows extends Component {
  state = {
    error: "",
    id: "",
    show: "",
  };

  useLocation() {}

  componentDidMount() {}

  render() {
    return (
      <div className={tvShows}>
        <TvShow />
      </div>
    );
  }
}
export default tvShows;
