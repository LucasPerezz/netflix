import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import MovieDetail from '../../Components/MovieDetail/MovieDetail'


const MovieDetailContainer = () => {
    const { id } = useParams()
    const [movieDetail, setMovieDetail] = useState([])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=f02447794a311bf45444ad8de8d22991&language=es")
        .then(response => response.json())
        .then(json => setMovieDetail(json.results.filter((item) => item.id === Number(id))))

      }, [id])

      console.log(movieDetail)
      
    
    return (
      <div>
        {
          movieDetail.map((movie) => {
            return <MovieDetail detail={movie}  />
          })
        }
          
    </div>
  )
}

export default MovieDetailContainer