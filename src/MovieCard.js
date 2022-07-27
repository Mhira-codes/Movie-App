import React from "react";

const MovieCard = ( {movieObject}) => {
  return (
    <div className="movie">
      <div clas>
        <p>{movieObject.Year}</p>
      </div>
      <div className="movieimage">
        <img src={movieObject.Poster} alt={movieObject.Title} />
       
        <span>{movieObject.Type}</span>
        <h3>{movieObject.Title}</h3>
      </div>
    
     
    </div>
  );
};

export default MovieCard;
