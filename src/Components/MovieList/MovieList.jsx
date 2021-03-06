import React from "react";
import { Link } from "react-router-dom";
import "./MovieList.css";

const MovieList = ({ category }) => {
  return (
    <>
        <div className="card-container">
          <div className={category.vote_average >= 7 ? "card-average-top" : category.vote_average > 4 & category.vote_average < 7 ? "card-average-mid" : "card-average-down"}><p className="vote-average">{(category.vote_average).toFixed(0)}</p></div>
      <Link to={`/detail/${category.id}`}>
          <img src={`https://image.tmdb.org/t/p/w500/${category.poster_path}`} className="card-img-top" alt="..." />
      </Link>
        </div>    
    </>
  );
};

export default MovieList;
