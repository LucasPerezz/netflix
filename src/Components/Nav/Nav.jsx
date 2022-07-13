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
              <li>Series</li>
              <li>Peliculas</li>
              <li>Novedades populares</li>
              <li>Mi lista</li>
            </ul>
          </div>
    </div>
  )
}

export default Nav