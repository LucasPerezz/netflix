import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
  return (
    <div>
        <div className="navbar">
            <ul>
              <Link to={'/'}>
                <li>Inicio</li>
              </Link>
              <Link to={'/tv'}>
              <li>Series</li>
              </Link>
              <Link to={'/movie'}>
              <li>Peliculas</li>
              </Link>
            </ul>
          </div>
    </div>
  )
}

export default Nav