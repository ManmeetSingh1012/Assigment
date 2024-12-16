const express = require("express");
const router = express.Router();
const { saveMovie, getMovies } = require("../controllers/favMoviesController");

// Route to save a new movie
router.post("/save", saveMovie);
// Route to fetch all movies
router.get("/all", getMovies);
module.exports = router;
