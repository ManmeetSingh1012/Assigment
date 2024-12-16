import { useEffect, useState } from "react";
import useMovie from "../customhooks/useMovie";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const { movies, fetchMovieBySearch, SavefavouriteMovie } = useMovie();
  const [query, setQuery] = useState("");
  const [favorites, setFavorites] = useState([]); // To track favorite movies
  const navigate = useNavigate();

  const fetchMovies = () => {
    if (query) {
      fetchMovieBySearch({ search: query });
    } else {
      alert("Please enter a movie name to search");
    }
  };

  const favclick = () => {
    navigate("/favourite");
  };

  const toggleFavorite = async (imdbID) => {
    setFavorites([...favorites, imdbID]);
    const movie = movies.find((movie) => movie.imdbID === imdbID);
    if (movie) {
      await SavefavouriteMovie(movie);
    }
  };

  return (
    <div className="container">
      <h1 className="text-center my-4 text-primary">🎬 Movie FLIX</h1>

      {/* Search Input */}
      <div className="input-group mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search for a movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-primary" onClick={fetchMovies}>
          Search
        </button>
      </div>

      <div>
        <button className="text-center btn btn-primary" onClick={favclick}>
          Favourite Movies
        </button>
      </div>

      {/* Movie Results */}
      <div className="row">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div className="col-md-4 mb-4" key={movie.imdbID}>
              <div className="card h-100">
                <img
                  src={
                    movie.Poster !== "N/A"
                      ? movie.Poster
                      : "https://via.placeholder.com/300x450"
                  }
                  className="card-img-top"
                  alt={movie.Title}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{movie.Title}</h5>
                  <p className="mb-1">Year: {movie.Year}</p>
                  <p className="mb-2">Type: {movie.Type}</p>
                  <button
                    className="btn btn-outline-danger mt-auto"
                    onClick={() => toggleFavorite(movie.imdbID)}
                  >
                    {favorites.includes(movie.imdbID) ? "❤️" : "🤍"}
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-danger">
            No results found. Try searching for a movie!
          </p>
        )}
      </div>
    </div>
  );
}
