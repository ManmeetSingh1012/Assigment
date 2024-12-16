import { useEffect, useState } from "react";
import useMovie from "../customhooks/useMovie";
import { use } from "react";

export default function Favourite() {
  const { fav, fetchfavouriteMovie } = useMovie();

  useEffect(() => {
    fetchfavouriteMovie();
  }, []);
  return (
    <div className="container">
      {/* Search Input */}

      <h1 className="text-center my-4 text-primary">❤️ Favourite Movies</h1>

      {/* Movie Results */}
      <div className="row">
        {fav.length > 0 ? (
          fav.map((movie) => (
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
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-danger">No Favourite Movie Present</p>
        )}
      </div>
    </div>
  );
}
