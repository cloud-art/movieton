import { Router } from "express";
import FilmController from "../controllers/filmRouter";

const filmController = new FilmController()
const filmRouter = Router()

filmRouter.post('/create', filmController.create)
filmRouter.get('/get', filmController.get)

export default filmRouter