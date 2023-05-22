import express from 'express'
import models from '../models'

class FavouritesController {
    async create(req: express.Request, res: express.Response){
        const {userId, filmId} = req.body
        const favourite = await models.Favourites.create({userId, filmId})
        return res.json(favourite)
    }

    async getAll(req: express.Request, res: express.Response){
        const favourites = await models.Favourites.findAll()
        return res.json(favourites)
    }
}

export default new FavouritesController()