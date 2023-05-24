import { Router } from "express";
import FavouritesController from "../controllers/favouritesRouter";

const favouritesRouter = Router()

favouritesRouter.post('/create', FavouritesController.create)
favouritesRouter.get('/getAll', FavouritesController.getAll)
favouritesRouter.get('/getOne/:id', FavouritesController.getOne)

export default favouritesRouter