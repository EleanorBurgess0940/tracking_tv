import React, { Component } from "react";
import TvShow from "../components/TvShow";

class tvShows extends Component {
  state = {
    error: "",
    id: "",
    show: "",
  };

  useLocation() {
    console.log("help");
  }

  componentDidMount() {
    console.log("component did mount");
  }

  render() {
    console.log("hello ");
    return (
      <div className={tvShows}>
        <TvShow />
      </div>
    );
  }
}
export default tvShows;
