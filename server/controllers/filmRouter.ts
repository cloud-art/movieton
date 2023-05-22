import express from 'express'
import path from 'path'
import models from '../models'
import { v4 as uuidv4 } from 'uuid'
import ApiError from '../ApiError'
import { UploadedFile } from 'express-fileupload'

class FilmController {
    async create(req: express.Request, res: express.Response, next: express.NextFunction){
        try{
            const {title, desc, short_desc, rating, duration, date, age_limit} = req.body
            const imgFile = req.files?.img
            let img = uuidv4() + '.jpg';
            (imgFile as UploadedFile).mv(path.resolve(__dirname, '..', `static/${img}`));
            const film = await models.Film.create({title, desc, short_desc, rating, duration, date, age_limit, img})
            return res.json(film)
        } catch(e) {
            next(e)
        }   
    }

    async getAll(req: express.Request, res: express.Response){
        const films = await models.Film.findAll()
        return res.json(films)
    }

    async getOne(req: express.Request, res: express.Response){
        const {id} = req.params
        const film = await models.Film.findOne({where: {id}})
        return res.json(film)
    }
}

export default new FilmController()