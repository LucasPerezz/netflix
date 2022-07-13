import React from "react";
import { Link } from "react-router-dom";
import "./MovieList.css";

const MovieList = ({ category }) => {
  return (
    <>
        <div className="card-container">
      <Link to={`/detail/${category.id}`}>
          <img src={`https://image.tmdb.org/t/p/w500/${category.poster_path}`} className="card-img-top" alt="..." />
      </Link>
        </div>    
    </>
  );
};

export default MovieList;
