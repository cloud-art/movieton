import { Router } from "express";
import GenreController from "../controllers/genreRouter";

const genreController = new GenreController()
const genreRouter = Router()

genreRouter.post('/create', genreController.create)
genreRouter.get('/get', genreController.get)

export default genreRouter