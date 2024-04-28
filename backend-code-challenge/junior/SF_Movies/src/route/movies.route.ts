import express from "express";
import filmedMovies from "../controller/movies.controller";

const router = express.Router();

router.get("/movies", filmedMovies);

export default router;
