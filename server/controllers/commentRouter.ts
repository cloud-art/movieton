import express from 'express'
import models from '../models'
import Model from 'sequelize/types/model'

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

    async getAllMovie(req: express.Request, res: express.Response){
        const {id: filmId, limit: commentLimit} = req.params
        let comments: {
            rows: Model<any, any>[];
            count: number;
        }
        if (commentLimit){
            comments = await models.Comment.findAndCountAll({
                where: {filmId},
                limit: parseInt(String(commentLimit)),
                order: [['createdAt', 'DESC']]
            })
        } else{
            comments = await models.Comment.findAndCountAll({
                where: {filmId},
                order: [['createdAt', 'DESC']]
            })
        }
        return res.json(comments)
    }

    async deleteComment(req: express.Request, res: express.Response){
        const {id} = req.params
        const comment = await models.Comment.findOne(
            {
                where: {id},
            }
        )
        if (comment){
            comment.destroy()
        }
        return res.json(comment)
    }
}

export default new CommentsController()