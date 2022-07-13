import React from 'react'
import MovieListContainer from '../../containers/MovieListContainer/MovieListContainer'
import Navbar from '../../containers/Navbar/Navbar'

const Home = () => {
  return (
    <div>
        <Navbar />
        <MovieListContainer />
    </div>
  )
}

export default Home