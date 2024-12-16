const { FavMovies } = require("../models"); // Import the model

// Save a new movie to the database
exports.saveMovie = async (req, res) => {
  try {
    const { Title, Year, imdbID, Type, Poster } = req.body.movie;

    // Validate request
    if (!Title || !Year || !imdbID || !Type || !Poster) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Create and save the movie
    const newMovie = await FavMovies.create({
      Title,
      Year,
      imdbID,
      Type,
      Poster,
    });

    return res.status(201).json({
      message: "Movie saved successfully",
      movie: newMovie,
    });
  } catch (error) {
    return res.status(500).json({
      error: "Failed to save the movie",
      details: error.message,
    });
  }
};

exports.getMovies = async (req, res) => {
  try {
    const movies = await FavMovies.findAll();

    if (movies.length === 0) {
      return res.status(404).json({ message: "No movies found" });
    }

    return res.status(200).json({
      message: "Movies retrieved successfully",
      movies: movies,
    });
  } catch (error) {
    return res.status(500).json({
      error: "Failed to fetch movies",
      details: error.message,
    });
  }
};
