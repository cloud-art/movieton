import { Router } from "express";
import FavouritesController from "../controllers/favouritesRouter";

const favouritesController = new FavouritesController()
const favouritesRouter = Router()

favouritesRouter.post('/create', favouritesController.create)
favouritesRouter.get('/get', favouritesController.get)

export default favouritesRouter