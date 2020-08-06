import React from "react";
import "./style.css";

function SavedHeader(props) {
  console.log(props);
  return (
    <div>
      <h3 className="card-header"> {props.searchHeader} </h3>
      <br></br>
    </div>
  );
}

export default SavedHeader;
