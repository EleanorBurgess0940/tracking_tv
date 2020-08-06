//Allows the header to change if its on popular shows or search results
//gives the page some clarity

import React from "react";
import "./style.css";

function SearchHeader(props) {
  console.log(props);
  return (
    <div>
      <h3 className="card-header"> {props.searchHeader} </h3>
      <br></br>
    </div>
  );
}

export default SearchHeader;
