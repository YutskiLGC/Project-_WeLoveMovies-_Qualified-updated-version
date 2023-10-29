const knex = require("../db/connection");

function getAllTheatersWithMovies() {
  return knex("theaters as t")
    .leftJoin("movies_theaters as mt", "t.theater_id", "mt.theater_id")
    .leftJoin("movies as m", "mt.movie_id", "m.movie_id")
    .then((theaters) => {
      return theaters;
    });
}

function list() {
  return knex("theaters").select("*");
}

module.exports = {
  list,
  getAllTheatersWithMovies,
};
