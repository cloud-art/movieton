import express from 'express'
import models from '../models'

class CommentsController {
    async create(req: express.Request, res: express.Response){
        const {text, userId, filmId} = req.body
        const review = await models.Comment.create({text, userId, filmId})
        return res.json(review)
    }

    async getAll(req: express.Request, res: express.Response){
        const comments = await models.Comment.findAll()
        return res.json(comments)
    }

    async getOne(req: express.Request, res: express.Response){
        const {id} = req.params
        const comment = await models.Comment.findOne(
            {
                where: {id},
            }
        )
        return res.json(comment)
    }
}

export default new CommentsController()