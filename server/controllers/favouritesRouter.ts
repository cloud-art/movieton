import express from 'express'
import models from '../models'
import Model from 'sequelize/types/model'
import sequelize from '../db'

class FavouritesController {
    async getAllFavourites(req: express.Request, res: express.Response){
        const favourites = await models.Favourites.findAndCountAll()
        return res.json(favourites)
    }

    async createFavourite(req: express.Request, res: express.Response){
        const {userId} = req.body
        const favourite = await models.Favourites.create({userId})
        return res.json(favourite)
    }

    async createFavouriteFilm(req: express.Request, res: express.Response){
        const {filmId, favouriteId} = req.body
        const favourite = await models.FavouriteFilms.create({filmId, favouriteId})
        return res.json(favourite)
    }

    async getAllFavouriteFilms(req: express.Request, res: express.Response){
        const favourites = await models.FavouriteFilms.findAll()
        return res.json(favourites)
    }

    async getFavourite(req: express.Request, res: express.Response){
        const {userId} = req.query
        let favourites: Model<any, any> | null

        if (userId){
            favourites = await models.Favourites.findOne({
                where: {userId}
            })
        } else { 
            favourites = await models.Favourites.findOne()
        }
        return res.json(favourites)
    }

    async getOne(req: express.Request, res: express.Response){
        const {id} = req.params
        const favourite = await models.Favourites.findOne(
            {
                where: {id},
            }
        )
        return res.json(favourite)
    }

    async getOneFavouriteFilm(req: express.Request, res: express.Response){
        const {id: favouriteFilmId, userId, filmId} = req.query

        if (favouriteFilmId){
            const favourite = await models.FavouriteFilms.findOne(
                {
                    where: {id: favouriteFilmId},
                }
            )
            return res.json(favourite)
        }
        if (userId && filmId){
            const favourite = await models.FavouriteFilms.findOne(
                {
                    where: {filmId},
                    include: {model: models.Favourites, where: {userId}},
                }
            )
            return res.json(favourite)
        } 
    }

    async getAllFilmsByUser(req: express.Request, res: express.Response){
        const { id: userId } = req.params
        const { page: pageQuery, limit: limitQuery } = req.query
        const page = parseInt((String(pageQuery))) || 1
        const limit = parseInt((String(limitQuery))) || 9
        let offset = page * limit - limit
            
        const favourite = await models.FavouriteFilms.findAndCountAll({
            include: [
                {
                    model: models.Film,
                    include: [
                        {model: models.Genre, as: 'genres'},
                        {model: models.Writers, include: [
                            {model: models.Person}
                        ]},
                        {model: models.Actors, include: [
                            {model: models.Person}
                        ]},
                        {model: models.Comment},
                    ]
                },
                {
                    model: models.Favourites,
                    where: {userId}
                }
            ],
            distinct: true,
            offset,
            limit,
            order: [['createdAt', 'DESC']]
        })

        return res.json(favourite)
    }

    async deleteFavouriteFilm(req: express.Request, res: express.Response){
        const {id} = req.params
        const favouriteFilm = await models.FavouriteFilms.findOne(
            {
                where: {id},
            }
        )
        if (favouriteFilm){
            favouriteFilm.destroy()
        }
        return res.json(favouriteFilm)
    }
}

export default new FavouritesController()