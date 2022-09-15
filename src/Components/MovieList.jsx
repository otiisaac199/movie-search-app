import React from "react";

function MovieList({ movies }) {
  return (
    <>
      {movies.map((movie, index) => {
        return (
          <div key={index}>
            <img src={movie.Poster} alt="Movie" />
          </div>
        );
      })}
    </>
  );
}

export default MovieList;
