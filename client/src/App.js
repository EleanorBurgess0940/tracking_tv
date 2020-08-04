import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
// import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Signup from "./components/signup";
import Login from "./components/login";
import Home from "./pages/home.js";
import Member from "./pages/member.js";
import TvShow from "./pages/tvShow.js";
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
    console.log("Comp did mount");
    this.getUser();
  }

  updateUser(userObject) {
    this.setState(userObject);
  }

  getUser() {
    axios.get("/api/user").then((response) => {
      console.log("Get user response: ");
      console.log(response.data);
      if (response.data.user) {
        console.log("Get User: There is a user saved in the server session: ");

        this.setState({
          loggedIn: true,
          username: response.data.user.username,
        });
      } else {
        console.log("Get user: no user");
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
            <Route exact path={["/tvShow"]}>
              <TvShow />
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
