import express from 'express'
import path from 'path'
import models from '../models'
import { v4 as uuidv4 } from 'uuid'
import { UploadedFile } from 'express-fileupload'
import { IGenre } from '../types/IGenre'
import { IPerson } from '../types/IPerson'
import Sequelize from 'sequelize'
import sequelize from '../db'
import { Op } from 'sequelize'

class FilmController {
    async create(req: express.Request, res: express.Response, next: express.NextFunction){
        try{
            const {title, desc, short_desc, rating, duration, date, age_limit} = req.body
            const imgFile = req.files?.img
            let img = uuidv4() + '.jpg';
            (imgFile as UploadedFile).mv(path.resolve(__dirname, '..', `static/${img}`));
            
            const film = await models.Film.create({title, desc, short_desc, rating, duration, date, age_limit, img})

            //handling adding film genres
            const genresQuery = req.body.genres
            if (genresQuery){
                const genres = JSON.parse(String(genresQuery))
                genres.forEach((genre: IGenre) => {
                    let {id}: any = film
                    models.FilmGenres.create({
                        filmId: id,
                        genreId: genre.id,
                    })
                })
            }

            //handling adding film writers
            const writersQuery = req.body.writers
            if (writersQuery){
                const writers = JSON.parse(String(writersQuery))
                writers.forEach((writer: IPerson) => {
                    let {id}: any = film
                    models.Writers.create({
                        filmId: id,
                        personId: writer.id,
                    })
                })
            }

            //handling adding film actors
            const actorsQuery = req.body.actors
            if (genresQuery){
                const actors = JSON.parse(String(actorsQuery))
                actors.forEach((actor: IPerson) => {
                    let {id}: any = film
                    models.Actors.create({
                        filmId: id,
                        personId: actor.id,
                    })
                })
            }
            
            return res.json(film)
        }catch(e) {
            next(e)
        }   
    }

    async getAll(req: express.Request, res: express.Response){
        const {rating, ratingLower, ratingUpper, year, genre, sortType} = req.query
        const pageQueryg = req.query['page']
        const limitQuery = req.query['limit']

        const page = parseInt((String(pageQueryg))) || 1
        const limit = parseInt((String(limitQuery))) || 9
        let offset = page * limit - limit

        let filmOrder: Sequelize.Order | undefined = []

        if (sortType){
            if (sortType == '1') filmOrder.push(['rating', 'DESC'])
            if (sortType == '2') filmOrder.push([sequelize.literal('(SELECT COUNT(*) FROM "comments" WHERE "film"."id" = "comments"."filmId")'), 'DESC'])
        }

        let genresWhere:Sequelize.WhereOptions<any> | undefined = {};

        if (genre){
            genresWhere['id'] = genre
        }

        const films = await models.Film.findAndCountAll(
            {
                attributes: {
                    include: [
                        [sequelize.literal('(SELECT COUNT(*) FROM "comments" WHERE "film"."id" = "comments"."filmId")'), 'commentsCount'],
                    ]
                },
                where: {
                      [Op.and]: [
                        Sequelize.where(
                            sequelize.cast(sequelize.col('film.date'), 'varchar'),
                            {[Op.like]: year? `${year}-__-__%` : '%'}
                        ),
                        Sequelize.where(
                            sequelize.cast(sequelize.col('film.rating'), 'varchar'),
                            {[Op.like]: rating || '%'}
                        ),
                        {rating: {[Op.gte]: ratingLower? ratingLower: 0 }},
                        {rating: {[Op.lte]: ratingUpper? ratingUpper: 10 }},
                      ],
                      
                },
                limit, 
                offset,
                include: [
                    {model: models.Genre, 
                        as: 'genres', 
                        where: genresWhere,
                    },
                    {model: models.Writers, include: [
                        {model: models.Person}
                    ]},
                    {model: models.Actors, include: [
                        {model: models.Person}
                    ]},
                    {model: models.Comment},
                ],
                order: filmOrder,
                distinct: true
            }
        ) 
        return res.json(films)
    }

    async getOne(req: express.Request, res: express.Response){
        const {id} = req.params
        const film = await models.Film.findOne(
            {
                attributes: {
                    include: [
                        [sequelize.literal('(SELECT COUNT(*) FROM "comments" WHERE "film"."id" = "comments"."filmId")'), 'commentsCount'],
                    ]
                },
                where: {id},
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
            }
        )
        return res.json(film)
    }
}

export default new FilmController()