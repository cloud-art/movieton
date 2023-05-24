import express from 'express'
import models from '../models'
import ApiError from '../ApiError'

class GenreController {
    async create(req: express.Request, res: express.Response){
        const {title} = req.body
        const genre = await models.Genre.create({title})
        return res.json(genre)
    }

    async getAll(req: express.Request, res: express.Response){
        const genres = await models.Genre.findAll()
        return res.json(genres)
    }

    async getOne(req: express.Request, res: express.Response){
        const {id} = req.params
        const genre = await models.Genre.findOne(
            {
                where: {id},
            }
        )
        return res.json(genre)
    }
}

export default new GenreController()