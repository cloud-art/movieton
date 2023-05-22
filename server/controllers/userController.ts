import express from 'express'
import ApiError from '../ApiError'

class UserController {
    async registration(req: express.Request, res: express.Response){

    }

    async login(req: express.Request, res: express.Response){

    }

    async check(req: express.Request, res: express.Response, next: express.NextFunction){
        const {id} = req.query
        if (!id){
            return next(ApiError.badRequest('Не задан id'))
        }
        res.json(id)
    }
}

export default new UserController()