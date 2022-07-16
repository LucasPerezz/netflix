import React, { Children, createContext, useEffect, useState } from 'react'

export const genresContext = createContext({})

const useContextPro = () => {

    const [genres, setGenres] = useState([])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=f02447794a311bf45444ad8de8d22991&language=es")
        .then(res => res.json())
        .then(data => setGenres(data.genres))
      
    }, [])



  return (
    <genresContext.Provider value={
        {
          genres,
          setGenres
        }
    }>
        {Children}
    </genresContext.Provider>
  )
}

export default useContextPro