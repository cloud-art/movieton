import { Router } from "express";
import FavouritesController from "../controllers/favouritesRouter";

const favouritesRouter = Router()

favouritesRouter.post('/createFavourite', FavouritesController.createFavourite)
favouritesRouter.post('/createFavouriteFilm', FavouritesController.createFavouriteFilm)
favouritesRouter.get('/getAllFavourites', FavouritesController.getAllFavourites)
favouritesRouter.get('/getAllFavouriteFilms', FavouritesController.getAllFavouriteFilms)
favouritesRouter.get('/getAll/:id', FavouritesController.getAllFilmsByUser)
favouritesRouter.get('/getOne/:id', FavouritesController.getOne)

export default favouritesRouter