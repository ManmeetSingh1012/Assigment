import { useState } from "react";
import axios from "axios";

export default function useMovie() {
  const [movies, setMovies] = useState([]);
  const [fav, setfav] = useState([]);

  const fetchMovieBySearch = async ({ search }) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}?apikey=${
          import.meta.env.VITE_API_KEY
        }&s=${search}`
      );

      console.log(response);

      if (response.data.Search) {
        setMovies(response.data.Search);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchfavouriteMovie = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL2}/api/movies/all`
      );

      console.log(response);

      setfav(response.data.movies);
    } catch (error) {
      console.error(error);
    }
  };

  const SavefavouriteMovie = async (movie) => {
    try {
      await axios.post(`${import.meta.env.VITE_BASE_URL2}/api/movies/save`, {
        movie,
      });
      alert(`${movie.Title} has been added to favorites!`);
    } catch (error) {
      console.error("Error saving favorite movie:", error);
    }
  };

  return {
    movies,
    fetchMovieBySearch,
    fetchfavouriteMovie,
    fav,
    SavefavouriteMovie,
  };
}
