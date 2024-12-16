const sequelize = require("../config/database");
const { DataTypes } = require("sequelize");

// Import models
const FavMovies = require("./favMovies")(sequelize, DataTypes);

// Sync the database
sequelize
  .sync({ force: false }) // Use force: true only during development (drops existing tables)
  .then(() => console.log("Database synced"))
  .catch((err) => console.error("Database sync failed:", err));

module.exports = { sequelize, FavMovies };
