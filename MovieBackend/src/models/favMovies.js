module.exports = (sequelize, DataTypes) => {
  const favMovies = sequelize.define("FavMovies", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Year: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imdbID: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    Type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Poster: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return favMovies;
};
