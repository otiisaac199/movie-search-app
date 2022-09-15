import React from "react";

function MovieList(props) {
  const FavouriteComponent = props.favouriteComponent;

  return (
    <>
      {props.movies.map((movie, index) => {
        return (
          <div key={index} className="image-container">
            <img src={movie.Poster} alt="Movie" />
            <div
              onClick={() => props.handleFavouritesClick(movie)}
              className="overlay"
            >
              <FavouriteComponent />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default MovieList;
