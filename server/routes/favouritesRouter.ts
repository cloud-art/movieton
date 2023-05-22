import { Router } from "express";
import FavouritesController from "../controllers/favouritesRouter";

const favouritesRouter = Router()

favouritesRouter.post('/create', FavouritesController.create)
favouritesRouter.get('/getAll', FavouritesController.getAll)

export default favouritesRouter