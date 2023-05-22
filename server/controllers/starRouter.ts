import express from 'express'
import models from '../models'

class StarController {
    async create(req: express.Request, res: express.Response){
        const {star, userId, filmId} = req.body
        const Star = await models.Star.create({star, userId, filmId})
        return res.json(Star)
    }

    async getAll(req: express.Request, res: express.Response){
        const stars = await models.Star.findAll()
        return res.json(stars)
    }
}

export default new StarController()