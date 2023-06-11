import express from 'express'
import models from '../models'
import Model from 'sequelize/types/model'
import sequelize from '../db'

class FavouritesController {
    async createFavourite(req: express.Request, res: express.Response){
        const {userId} = req.body
        const favourite = await models.Favourites.create({userId})
        return res.json(favourite)
    }

    async createFavouriteFilm(req: express.Request, res: express.Response){
        const {filmId, favouriteId} = req.body
        const favourite = await models.FavouriteFilms.create({filmId, favouriteId})
        return res.json(favourite)
    }

    async getAllFavouriteFilms(req: express.Request, res: express.Response){
        const favourites = await models.FavouriteFilms.findAll()
        return res.json(favourites)
    }

    async getAllFavourites(req: express.Request, res: express.Response){
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

    async getAllFilmsByUser(req: express.Request, res: express.Response){
        const { id: userId } = req.params
        const { page: pageQuery, limit: limitQuery } = req.query
        const page = parseInt((String(pageQuery))) || 1
        const limit = parseInt((String(limitQuery))) || 9
        let offset = page * limit - limit
        
        // let favourite: Model<any, any> | null;
        // let favourite: Model<any, any>[];
            
        const favourite = await models.FavouriteFilms.findAndCountAll({
            include: [
                {
                    model: models.Film,
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
                },
                {
                    model: models.Favourites,
                    where: {userId}
                }
            ],
            distinct: true,
            offset,
            limit,
            order: [['createdAt', 'DESC']]
        })

        //realtion MtN, from Favourite

        // let favourite: Model<any, any> | null;
            
        // favourite = await models.Favourites.findOne({
        //     attributes: {
        //         include: [
        //             [sequelize.literal('(SELECT COUNT(*) FROM "favourite_films")'), 'filmsCount'],
        //         ]
        //     },
        //     include: [
        //         {
        //             model: models.FavouriteFilms,
        //             include: [
        //                 {
        //                     model: models.Film,
        //                     include: [
        //                         {model: models.Genre, as: 'genres'},
        //                         {model: models.Writers, include: [
        //                             {model: models.Person}
        //                         ]},
        //                         {model: models.Actors, include: [
        //                             {model: models.Person}
        //                         ]},
        //                         {model: models.Comment},
        //                     ]
        //                 },
        //             ],
        //             // separate: true,
        //             // // @ts-ignore-next-line
        //             // offset: 0,
        //             // limit: 9,
        //         },
        //         {
        //             model: models.User,
        //             where: {id: userId}
        //         }
        //     ],
        // })

        // if realtion is Many to Many

        // const {id: userId} = req.params
        
        // // let favourite: Model<any, any> | null;
        // let favourite: Model<any, any>[];
            

        // favourite = await models.Favourites.findAll({
        //     attributes: {
        //         include: [
        //             [sequelize.literal('(SELECT COUNT(*) FROM "favourite_films")'), 'filmsCount'],
        //         ]
        //     },
        //     where: {},
        //     include: [
        //         {
        //             model: models.Film, as: 'favouriteFilms',
        //             separate: true,
        //             //@ts-ignore-next-line
        //             offset: 1,
        //             limit: 10
        //         },
        //         {
        //             model: models.User, where: {id: userId},
        //         }

        //     ],
        // })

        return res.json(favourite)
    }
}

export default new FavouritesController()