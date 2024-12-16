const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const favMoviesRoutes = require("./routes/favRoute");
const { sequelize } = require("./models");

dotenv.config({
  path: "./.env",
});

const app = express({
  origin: ["http://localhost:5173", "*"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
});

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/movies", favMoviesRoutes);

// Test database connection
sequelize
  .authenticate()
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("Unable to connect to the database:", err));

module.exports = app;
