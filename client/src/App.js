import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import MovieCard from "./components/MovieCard";
import CardWrapper from "./components/CardWrapper";

function App() {
  return (
    <div className="App">
      <Nav />
      <CardWrapper>
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </CardWrapper>
      <Footer />
    </div>
  );
}

export default App;
