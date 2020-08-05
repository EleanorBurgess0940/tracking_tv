// TheMovieDBAPIshowID: Number,
// name: String,
// hasWatched: false

import React from "react";
import { Row, Col } from "../Grid";
import { ListItem } from "../List";

function Show({ TheMovieDBAPIshowID, name, hasWatched }) {
  return (
    <ListItem>
      <Row className="flex-wrap-reverse">
        <Col size="md-8">
          <h3 className="font-italic">{name}</h3>
        </Col>
      </Row>
      <Row>
        <Col size="md-6">
          <p className="font-italic small">Watched: {hasWatched}</p>
          <p> Id: {TheMovieDBAPIshowID} </p>
        </Col>
      </Row>
    </ListItem>
  );
}

export default Show;
