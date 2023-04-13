import express from "express"; // "type": "module"
import {
  getAllMovies,
  getMovieById,
  createMovies,
  deleteMovieById,
  updateById,
} from "../service/movies.service.js";
const router = express.Router();

//get all movies
// http://localhost:4000/movies
router.get("/", async function (request, response) {
  const movies = await getAllMovies();
  console.log(movies);
  response.send(movies);
});

//get movie by id

router.get("/:id", async function (request, response) {
  const { id } = request.params;
  // console.log(id);
  const movies = await getMovieById(id);
  // console.log(movie);
  movies
    ? response.send(movies)
    : response.status(404).send({ message: "Movie not found" });
});
//post method
router.post("/", async function (request, response) {
  const data = request.body;
  // console.log(data);
  const result = await createMovies(data);
  response.send(result);
});

//delete  by id
router.delete("/:id", async function (request, response) {
  const { id } = request.params;
  // console.log(id);
  const movies = await deleteMovieById(id);
  console.log(movies);
  movies.deletedCount >= 1
    ? response.send({ message: "Movie deleted successfully" })
    : response.status(404).send({ message: "Movie not found" });
});
//update by id
router.put("/:id", async function (request, response) {
  const { id } = request.params;
  const data = request.body;
  console.log(data);
  console.log(id);
  const movies = await updateById(id, data);
  // console.log(movie);
  movies
    ? response.send(movies)
    : response.status(404).send({ message: "Movie not found" });
});
export default router;
