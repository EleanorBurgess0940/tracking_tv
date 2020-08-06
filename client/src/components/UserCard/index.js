import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API";
import { Col, Row, Container } from "../Grid";
import Card from "../Card";
import { List } from "../List";
import Show from "../Show";

class UserCard extends Component {
  state = {
    shows: [],
  };

  getSavedShows = () => {
    API.getSavedShows()
      .then((res) =>
        this.setState({
          shows: res.data,
        })
      )
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.getSavedShows();
  }

  handleShowDelete = (id) => {
    API.deleteShow(id).then((res) => this.getSavedShows());
  };

  render() {
    // console.log(this.state.shows.length !);
    if (this.state.shows) {
      return (
        <Container>
          <Row>
            <Col size="md-12">
              <Card title="Saved Shows">
                {this.state.shows.length ? (
                  <List>
                    {this.state.shows.map((shows) => (
                      <Show
                        key={shows._id}
                        name={shows.name}
                        idNumber={shows.TheMovieDBAPIshowID}
                        hasWatched={shows.hasWatched}
                        Button={() => (
                          <button
                            onClick={() => this.handleShowDelete(shows._id)}
                            className="btn btn-danger ml-2"
                          >
                            Delete
                          </button>
                        )}
                      />
                    ))}
                  </List>
                ) : (
                  <h2 className="text-center">No Saved Books</h2>
                )}
              </Card>
            </Col>
          </Row>
        </Container>
      );
    }
  }
}

export default UserCard;
