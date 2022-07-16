import React from "react";
import { useState, useEffect } from "react";
import MovieList from "../../Components/MovieList/MovieList";
import "./MovieListContainer.css";




const MovieListContainer = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=f02447794a311bf45444ad8de8d22991&language=es"
    )
      .then((response) => response.json())
      .then((json) => setMovies(json.results));
  }, []);

  const [trending, setTrending] = useState([])

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/all/day?api_key=f02447794a311bf45444ad8de8d22991&language=es"
    )
      .then((response) => response.json())
      .then((json) => setTrending(json.results));
  }, []);

  console.log(trending)
  

  return (
    <>
    <div className="list-container">
            <p>Lo mas popular</p>
          <div className="list-scroll">
           {movies.map((movie) => {
            return (
                <MovieList category={movie} />
                );
              })}
          </div>
    </div>
    <div className="list-container">
            <p>Tendencias hoy</p>
          <div className="list-scroll">
           {trending.map((movie) => {
            return (
                <MovieList category={movie} />
                );
              })}
          </div>
    </div>

    </>
  );
};

export default MovieListContainer;
