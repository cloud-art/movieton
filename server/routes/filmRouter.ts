import { Router } from "express";
import FilmController from "../controllers/filmRouter";

const filmRouter = Router()

filmRouter.post('/create', FilmController.create)
filmRouter.get('/getAll', FilmController.getAll)
filmRouter.get('/getOne/:id', FilmController.getOne)

export default filmRouter