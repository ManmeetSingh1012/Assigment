const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME, // Database name
  process.env.DB_USER, // Username
  process.env.DB_PASSWORD, // Password
  {
    host: process.env.DB_HOST, // Host
    dialect: process.env.DB_DIALECT, // Dialect (mysql)
    logging: false, // Disable SQL query logging
  }
);

module.exports = sequelize;
