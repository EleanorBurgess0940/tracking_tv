import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Column";

function About() {
  return (
    <div>
      <Container>
        <br></br>
        <Row className="centered">
          <Col size="md-12">
            <h1> Welcome!</h1>
            <hr></hr>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
