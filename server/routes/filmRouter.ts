import { Router } from "express";
import FilmController from "../controllers/filmRouter";
import checkRoleMiddleware from "../middleware/checkRoleMiddleware";

const filmRouter = Router()

filmRouter.post(
        '/create', 
        checkRoleMiddleware("ADMIN"), 
        FilmController.create
    )
filmRouter.get('/getAll', FilmController.getAll)
filmRouter.get('/getAllFavourites', FilmController.getAllFavourites)
filmRouter.get('/getOne/:id', FilmController.getOne)

export default filmRouter