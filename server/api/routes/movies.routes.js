//importamos funciones
import express from "express";
//importamos funciones
import { getAllMovies } from "../controllers/movies.controllers.js";
import { createMovie } from "../controllers/movies.controllers.js";
import { getMovieByID } from "../controllers/movies.controllers.js";
import { editMovie } from "../controllers/movies.controllers.js";
import { deleteMovie } from "../controllers/movies.controllers.js";
import { findMovieByName } from "../controllers/movies.controllers.js";

//almacenamos el router de express
const router = express.Router();

//se indican funciones y tipo de llamadas
router.get("/", getAllMovies);
router.get("/:movieID", getMovieByID);
router.get("/movieByName/:name", findMovieByName);
router.post("/create", createMovie);
router.put("/modify/:movieID", editMovie);
router.delete("/delete/:movieID", deleteMovie);

export {router};