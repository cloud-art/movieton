import { Router } from "express";
import GenreController from "../controllers/genreRouter";
import checkRoleMiddleware from "../middleware/checkRoleMiddleware";

const genreRouter = Router()

genreRouter.post('/create', checkRoleMiddleware("ADMIN"), GenreController.create)
genreRouter.get('/getAll', GenreController.getAll)

export default genreRouter