import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API";
import { Col, Row, Container } from "../Grid";
import Card from "../Card";
import Show from "../Show";
import { ListItem } from "../List";

class UserCard extends Component {
  state = {
    shows: [],
  };

  componentDidMount() {
    this.getSavedShows();
    console.log(this.state.shows);
  }

  getSavedShows = () => {
    API.getSavedShows()
      .then((res) =>
        this.setState({
          shows: res.data,
        })
      )
      .catch((err) => console.log(err));
  };

  handleBShowDelete = (id) => {
    API.deleteShow(id).then((res) => this.getSavedShows());
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Card title="Saved Shows">
              <h2 className="text-center">No Saved Shows</h2>
              )}
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default UserCard;
