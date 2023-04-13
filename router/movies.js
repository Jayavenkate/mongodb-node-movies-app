import express from "express"; // "type": "module"
import {client} from "../index.js";
const router = express.Router();

//get all movies
// http://localhost:4000/movies
router.get("/", async function (request, response) {
    const movies = await client
      .db("b42wd2")
      .collection("movies")
      .find({})
      .toArray();
    console.log(movies);
    response.send(movies);
  });
  
  //get movie by id
  
  router.get("/:id", async function (request, response) {
    const { id } = request.params;
    // console.log(id);
    const movies = await client
      .db("b42wd2")
      .collection("movies")
      .findOne({ id: id });
    // console.log(movie);
    movies
      ? response.send(movies)
      : response.status(404).send({ message: "Movie not found" });
  });
  //post method
  router.post("/",  async function (request, response) {
    const data = request.body;
    // console.log(data);
    const result = await client
      .db("b42wd2")
      .collection("movies")
      .insertMany(data);
    response.send(result);
  });
  
  //delete  by id
  router.delete("/:id", async function (request, response) {
    const { id } = request.params;
    // console.log(id);
    const movies = await client
      .db("b42wd2")
      .collection("movies")
      .deleteOne({ id: id });
    console.log(movies);
    movies.deletedCount >= 1
      ? response.send({ message: "Movie deleted successfully" })
      : response.status(404).send({ message: "Movie not found" });
  });
  //update by id
  router.put("/:id",  async function (request, response) {
    const { id } = request.params;
    const data = request.body;
    console.log(data);
    console.log(id);
    const movies = await client
      .db("b42wd2")
      .collection("movies")
      .updateOne({ id: id },{$set:data});
    // console.log(movie);
    movies
      ? response.send(movies)
      : response.status(404).send({ message: "Movie not found" });
  });
  export default router;