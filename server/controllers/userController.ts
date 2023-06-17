import express, { NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import models from '../models'
import ApiError from '../ApiError'
import dotenv from 'dotenv'
dotenv.config()

const generateJWT = (id: string, username: string, email: string, name: string, surname: string, role: string) => {
    return jwt.sign({id, username, email, name, surname, role}, 
        process.env.SECRET_KEY || 'secretKey',
        {expiresIn: '24h'})
}

class UserController {
    async registration(req: express.Request, res: express.Response, next: NextFunction){
        const {username, email, password, name, surname, role} = req.body
        if(!email || !password){
            return next(ApiError.badRequest('Некорректный email или пароль'))
        } 
        const existingEmail = await models.User.findOne({where: {email}})
        if (existingEmail){
            return next(ApiError.badRequest('Пользователь с таким email существует'))
        }
        const existingUsername = await models.User.findOne({where: {username}})
        if (existingUsername){
            return next(ApiError.badRequest('Пользователь с таким username существует'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await models.User.create({username, email, password: hashPassword, name, surname, role})
        const {id: userId, username: userUsername, email: userEmail, name: userName, surname: userSurname, role: userRole}: any = user;
        const favourites = await models.Favourites.create({userId: userId})
        const token = generateJWT(userId, userUsername, userEmail, userName, userSurname, userRole)
        return res.json({token})
    }

    async login(req: express.Request, res: express.Response, next: NextFunction){
        const {username, password} = req.body
        const user = await models.User.findOne({where: {username}})
        if (!user){
            return next(ApiError.badRequest('Пользователя не существует'))
        }
        let {password: userPassword}: any = user 
        let comparePassword = bcrypt.compareSync(password, userPassword)
        if (!comparePassword){
            return next(ApiError.badRequest('Неверный пароль'))
        }
        const {id: userIid, username: userUsername, email: userEmail, name: userName, surname: userSurname, role: userRole}: any = user;
        const token = generateJWT(userIid, userUsername, userEmail, userName, userSurname, userRole)
        return res.json({token})
    }

    async check(req: express.Request, res: express.Response, next: express.NextFunction){
        const token = generateJWT(req.body.user.id, req.body.user.username, req.body.user.email, req.body.user.name, req.body.user.surname, req.body.user.role )
        res.json({token})
    }

    async getAll(req: express.Request, res: express.Response){
        const pageQueryg = req.query['page']
        const limitQuery = req.query['limit']

        const page = parseInt((String(pageQueryg))) || 1
        const limit = parseInt((String(limitQuery))) || 9
        let offset = page * limit - limit

        const user = await models.User.findAndCountAll(
            {
                limit, 
                offset
            }
        )
        return res.json(user)
    }

    async getOne(req: express.Request, res: express.Response){
        const {id} = req.params
        const user = await models.User.findOne(
            {
                where: {id}
            }
        )
        return res.json(user)
    }
}

export default new UserController()