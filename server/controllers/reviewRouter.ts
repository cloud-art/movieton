import express from 'express'
import models from '../models'
import { Model, where } from 'sequelize'

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

    async getAllMovie(req: express.Request, res: express.Response){
        const {id: filmId, limit: reviewsLimit} = req.params
        let reviews: {
            rows: Model<any, any>[];
            count: number;
        }
        if (reviewsLimit){
            reviews = await models.Review.findAndCountAll({
                where: {filmId},
                limit: parseInt(String(reviewsLimit)),
                order: [['createdAt', 'DESC']]
            })
        } else{
            reviews = await models.Review.findAndCountAll({
                where: {filmId},
                order: [['createdAt', 'DESC']]
            })
        }
        
        return res.json(reviews)
    }

    async getOne(req: express.Request, res: express.Response){
        const {id} = req.params
        const review = await models.Review.findOne(
            {
                where: {id},
            }
        )
        return res.json(review)
    }
}

export default new ReviewController()