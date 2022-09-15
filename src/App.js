import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import MovieList from "./Components/MovieList";
import MovieListhead from "./Components/MovieListhead";
import SearchBox from "./SearchBox";
import AddFavourites from "./Components/AddFavourites";
import RemoveFavourites from "./Components/RemoveFavourites";

function App() {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovieRequest = async (searchValue) => {
    try {
      const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=14c7c759`;
      const response = await axios.get(url);
      if (response.data.Search) {
        setMovies(response.data.Search);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  // const saveToLocalStorage = (items) => {
  //   localStorage.setItem("react-movie-app-favourites", JSON.stringify(items));
  // };

  // useEffect(() => {
  //   const movieFavourite = JSON.parse(
  //     localStorage.getItem("react-movie-app-favourites")
  //   );
  //   setFavourites(movieFavourite);
  // }, []);

  const addFavouriteMovie = (movie) => {
    try {
      const newFavouriteList = [...favourites, movie];
      setFavourites(newFavouriteList);
      // saveToLocalStorage(newFavouriteList);
    } catch (error) {
      console.log(error);
    }
  };

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );
    setFavourites(newFavouriteList);
  };

  return (
    <div className="container">
      <div className="head-row">
        <MovieListhead heading="Movies" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="movie-row">
        {!movies === [] ? (
          "Search to get any Movies"
        ) : (
          <MovieList
            movies={movies}
            handleFavouritesClick={addFavouriteMovie}
            favouriteComponent={AddFavourites}
          />
        )}
      </div>
      <div className="head-row">
        <MovieListhead heading="Favourites" />
      </div>
      <div className="movie-row">
        <MovieList
          movies={favourites}
          handleFavouritesClick={removeFavouriteMovie}
          favouriteComponent={RemoveFavourites}
        />
      </div>
    </div>
  );
}

export default App;
