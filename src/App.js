import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import MovieList from "./Components/MovieList";
import MovieListhead from "./Components/MovieListhead";
import SearchBox from "./SearchBox";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=14c7c759`;

    const response = await axios.get(url);
    if (response.Search) {
      setMovies(response.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <div className="container">
      <div className="head-row">
        <MovieListhead heading="Movies" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="movie-row">
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;
