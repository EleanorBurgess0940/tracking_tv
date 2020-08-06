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
