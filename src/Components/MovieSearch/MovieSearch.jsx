import React, { useState } from 'react'

const MovieSearch = () => {

    const [movieSearched, setMovieSearched] = useState('')

    console.log(movieSearched)

  return (
    <div>
        <input type="text" placeholder='' onChange={() => setMovieSearched()}/>
    </div>
  )
}

export default MovieSearch