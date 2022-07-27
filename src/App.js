import { useState, useEffect } from "react";
import { BiSearchAlt } from "react-icons/bi";
import MovieCard from "./MovieCard";
import "./App.css";
// 56d18197
const API_URL = "http://www.omdbapi.com?apikey=56d18197";

const movieObject = {
  Title: "Batman v Superman: Dawn of Justice",
  Year: "2016",
  imdbID: "tt2975590",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
};

const App = () => {
  // !to et set of movies
  const [movies, setmovies] = useState([]);
  const [search, setsearch] =useState("")

  // ! the async helps to fetch data
  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setmovies(data.Search);
  };

  useEffect(() => {
    searchMovie("batman");
  }, []);

  return (
    <div className="app">
      <h1>Mo<span className="land">vieLand</span></h1>

      <div className="search">
        <input
          placeholder="Search for Movies "
          value={search}
          // !e.target.value use for storing items as string
          onChange={(e) => {setsearch(e.target.value)}}
         
        />
        <BiSearchAlt className="search-icons" onClick={() => searchMovie(search)} />
      </div>
      {
      movies?.length > 0 ? (
        <div className="container">
          {movies.map((movieObject) => (
            <MovieCard movieObject={movieObject} />
          ))}
        </div>
      ) : (
        <div className="empty"> 
          <h3>No movies found</h3>
        </div>
      )}
    </div>
  );
};

export default App;
