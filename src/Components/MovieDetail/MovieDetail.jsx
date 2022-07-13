import React from 'react'
import './MovieDetail.css'

const MovieDetail = ({detail}) => {

  console.log(detail)
  return (
    <div className='detail-container'>
        <div className='detail-poster'>
            <img src={`https://image.tmdb.org/t/p/w500/${detail.poster_path}`} alt="" />
        </div>
        <div className='detail-content-container'> 
            <div className='detail-title'>
              <h3>{detail.title}</h3>
              <p>{detail.release_date}</p>
            </div>
            <p className={detail.vote_average >= 7 ? "average-top" :  detail.vote_average > 4 & detail.vote_average < 7 ? "average-mid" : "average-down" }>Puntuacion: {detail.vote_average}</p>
            <p className='detail-description'>{detail.overview}</p>
        </div>
    </div>
  )
}

export default MovieDetail