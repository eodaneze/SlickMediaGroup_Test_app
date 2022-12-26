import React from "react";
import "./MovieList.css";
import "../../components/Media.css"

const MovieList = ({ movies }) => {
  return (
    <div className=" all-container movie-content">
    
      {movies.map((movie, index) => (
        <div className="movie-image">
          <img src={movie.Poster} alt="" />
          <h5>{movie.Title}</h5>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
