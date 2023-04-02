import React from "react";
import movies from "../../movie-database";
import { Link } from "react-router-dom";
import "./style.css";

const MovieList = () => {
  return (

      <nav className="movie-list">
        {movies.map((movie) => {
          return (
            <Link to={String(movie.id)} key={movie.id}>{movie.title}</Link>
          )
        })}
      </nav>

  )
}

export default MovieList;