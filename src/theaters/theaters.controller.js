const reduceProperties = require("../utils/reduce-properties");
const theatersService = require("./theaters.service");
const moviesService = require("../movies/movies.service");
const mapProperties = require("../utils/map-properties");

const addMovie = mapProperties({
  movie_id: "movie.movie_id",
  title: "movie.title",
  runtime_in_minutes: "movie.runtime_in_minutes",
  rating: "movie.rating",
  description: "movie.description",
  image_url: "movie.image_url",
});

const reduceTheaterAndMovies = reduceProperties("theater_id", {
  movie_id: ["movies", null, "movie_id"],
  title: ["movies", null, "title"],
  rating: ["movies", null, "rating"],
  description: ["movies", null, "description"],
  image_url: ["movies", null, "image_url"],
  runtime_in_minutes: ["movies", null, "runtime_in_minutes"],
  is_showing: ["movies", null, "is_showing"],
});

async function getAllTheaters(req, res, next) {
  const theaters = await theatersService.getAllTheatersAndMovies();
  const movies = await moviesService.list();

  const data = reduceTheaterAndMovies(theaters, movies);
  console.log(data);
  res.json({ data });
}

async function list(req, res) {
  const data = await theatersService.list();
  res.json({ data });
}

module.exports = {
  list,
  getAllTheaters,
};
