import React from "react";
import "./style.css";

function Wrapper(props) {
    return <div>
        <div className="wrapper"></div>
        <div className="row"></div>
        <div className="col-sm"></div>
        <div className="card-deck">{props.children}</div>
    </div>
}

export default Wrapper;
