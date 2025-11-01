import express from "express";
import * as movieController from "../controllers/movieController.js";

const api = express.Router()

api.post("/movie", movieController.addMovie)
api.get("/movie", movieController.listMovie)
api.get("/movie/:id", movieController.detailMovie)
api.put("/movie/:id", movieController.updateMovie)
api.delete("/movie/:id", movieController.deleteMovie)

export default api