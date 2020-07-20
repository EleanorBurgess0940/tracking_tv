import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import MovieCard from "./components/MovieCard";
import CardWrapper from "./components/CardWrapper";

import signUp from "./components/signup/signup.js";
import Login from "./components/login/login.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/signup" component={signUp} />
          <Route path="/login" component={Login} />
        </Switch>
        <CardWrapper>
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </CardWrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
