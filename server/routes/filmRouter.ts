import { Router } from "express";
import FilmController from "../controllers/filmRouter";

const filmRouter = Router()

filmRouter.post('/create', FilmController.create)
filmRouter.get('/get', FilmController.get)

export default filmRouter