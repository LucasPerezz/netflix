import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieList from "../../Components/MovieList/MovieList";
import "./MovieListContainer.css";




const MovieListContainer = () => {
  const [ movies, setMovies ] = useState([]);
  const { media_type } = useParams()

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=f02447794a311bf45444ad8de8d22991&language=es"
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json.results)
          let filter = json.results.filter((type) => type.media_type === media_type)
          media_type === undefined ? setMovies(json.results) : setMovies(filter)
      } );
  }, [media_type]);

  console.log(media_type)
  console.log(movies)

  // setMovies(json.results)

  const [trending, setTrending] = useState([])

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/all/day?api_key=f02447794a311bf45444ad8de8d22991&language=es"
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json.results)
          let filter = json.results.filter((type) => type.media_type === media_type)
          media_type === undefined ? setTrending(json.results) : setTrending(filter)
      } );
  }, [media_type]);

  

  return (
    <>
    {
        movies.length <= 0 ? 

          ""


    :
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

    }
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
