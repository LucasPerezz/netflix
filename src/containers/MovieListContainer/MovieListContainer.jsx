import React from 'react'
import { useState, useEffect } from 'react'
import MovieList from '../../Components/MovieList/MovieList'
import './MovieListContainer.css'

const MovieListContainer = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=f02447794a311bf45444ad8de8d22991&language=en-US")
        .then(response => response.json())
        .then(json => setMovies(json.results))
    }, [])


  return (
    <>
      <div className='movie-list-container'>
      {movies.map((movie) => {
        return (
          <MovieList category={movie} />
        )

      })}
      </div>
    </>
  )
}

export default MovieListContainer