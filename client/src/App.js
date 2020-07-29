import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Signup from "./components/signup";
import Login from "./components/login";
import Home from "./pages/home.js";
import Member from "./pages/member.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path={["/", "/homePage"]}>
            <Home />
          </Route>
          <Route exact path={["/signup"]}>
            <Signup />
          </Route>
          <Route exact path={["/login"]}>
            <Login />
          </Route>
          <Route exact path={["/member"]}>
            <Member />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
