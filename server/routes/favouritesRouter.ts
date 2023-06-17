import { Router } from "express";
import FavouritesController from "../controllers/favouritesRouter";

const favouritesRouter = Router()

favouritesRouter.post('/createFavourite', FavouritesController.createFavourite)
favouritesRouter.post('/createFavouriteFilm', FavouritesController.createFavouriteFilm)
favouritesRouter.get('/getFavourite', FavouritesController.getFavourite)
favouritesRouter.get('/getAllFavouriteFilms', FavouritesController.getAllFavouriteFilms)
favouritesRouter.get('/getAll', FavouritesController.getAllFavourites)
favouritesRouter.get('/getAll/:id', FavouritesController.getAllFilmsByUser)
favouritesRouter.get('/getOne/:id', FavouritesController.getOne)
favouritesRouter.get('/getOneFavouriteFilm', FavouritesController.getOneFavouriteFilm)
favouritesRouter.delete('/deleteFavouriteFilm/:id', FavouritesController.deleteFavouriteFilm)

export default favouritesRouter