import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Signup from "./components/signup";
import Login from "./components/login";
import Home from "./pages/home.js";
import Member from "./pages/member.js";
import TvShow from "./pages/tvShow.js";
import SavedShows from "./pages/savedShows";
import axios from "axios";

import "react-notifications/lib/notifications.css";
import { NotificationContainer } from "react-notifications";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      username: null,
    };

    this.getUser = this.getUser.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  componentDidMount() {
    this.getUser();
  }

  updateUser(userObject) {
    this.setState(userObject);
  }

  getUser() {
    axios.get("/api/user").then((response) => {
      if (response.data.user) {
        this.setState({
          loggedIn: true,
          username: response.data.user.username,
        });
      } else {
        this.setState({
          loggedIn: false,
          username: null,
        });
      }
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          {/* <Nav /> */}
          <Switch>
            <Route exact path={["/", "/homePage"]}>
              <Home />
            </Route>
            <Route exact path={["/signup"]}>
              <Signup />
            </Route>
            <Route exact path={["/login"]}>
              <Login updateUser={this.updateUser} />
            </Route>
            <Route exact path={["/member"]}>
              <Member />
            </Route>
            <Route exact path={["/tvshow"]}>
              <TvShow />
            </Route>
            <Route exact path={["/savedshows"]}>
              <SavedShows />
            </Route>
          </Switch>
          <NotificationContainer />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
