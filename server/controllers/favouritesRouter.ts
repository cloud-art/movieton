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

    async getOne(req: express.Request, res: express.Response){
        const {id} = req.params
        const favourite = await models.Favourites.findOne(
            {
                where: {id},
            }
        )
        return res.json(favourite)
    }
}

export default new FavouritesController()