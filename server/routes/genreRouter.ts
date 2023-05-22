import { Router } from "express";
import GenreController from "../controllers/genreRouter";

const genreRouter = Router()

genreRouter.post('/create', GenreController.create)
genreRouter.get('/getAll', GenreController.getAll)

export default genreRouter