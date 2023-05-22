import express from 'express'
import models from '../models'

class ReviewController {
    async create(req: express.Request, res: express.Response){
        const {title, positive, negative, star, userId, filmId} = req.body
        const review = await models.Review.create({title, positive, negative, star, userId, filmId})
        return res.json(review)
    }

    async getAll(req: express.Request, res: express.Response){
        const reviews = await models.Review.findAll()
        return res.json(reviews)
    }
}

export default new ReviewController()