import React, { useEffect, useState } from 'react'
import './MovieDetail.css'

const MovieDetail = ({detail}) => {

    const [similarMovies, setSimilarMovies] = useState([])


    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${detail.id}/similar?api_key=f02447794a311bf45444ad8de8d22991&language=es`)
        .then(res => res.json())
        .then(data =>  setSimilarMovies(data.results.slice(0, 7)))
      }, [])
      
      console.log(detail)

  return (
    <div className='detail-container'>
        <div className='detail-poster'>
            <img src={`https://image.tmdb.org/t/p/w500/${detail.poster_path}`} alt={detail.original_title ? detail.original_title : detail.original_name} />
        </div>
        <div className='detail-content-container'> 
            <div className='detail-title'>
              <h3>{detail.original_title ? detail.original_title : detail.original_name}</h3>
              <p>{detail.release_date}</p>
            </div>
            <p className={detail.vote_average >= 7 ? "average-top" :  detail.vote_average > 4 & detail.vote_average < 7 ? "average-mid" : "average-down" }>Puntuacion: {detail.vote_average.toFixed(1)}</p>
            <p className='detail-description'>{detail.overview}</p>
        </div>


        <div className='detail-similar-container'>
            <h3>Similares a {detail.original_title ? detail.original_title : detail.original_name}</h3>
        <div className='detail-similar-movies'>

            {
              similarMovies.map((movie) => {
                  return (
                    
                      <div className='detail-similar-item'>
                          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.original_title ? movie.original_title : movie.original_name} />
                      </div>
                  )
              })
            }
        </div>
        </div>
    </div>
  )
}

export default MovieDetail