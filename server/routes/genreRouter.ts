import { Router } from "express";
import GenreController from "../controllers/genreRouter";

const genreRouter = Router()

genreRouter.post('/create', GenreController.create)
genreRouter.get('/get', GenreController.get)

export default genreRouter