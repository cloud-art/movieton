import express from 'express'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { IUser } from '../types/IUser'
dotenv.config()

const checkRoleMiddleware = (role: string) => {
    return (req: express.Request, res: express.Response, next: express.NextFunction) => {
        if(req.method === 'OPTIONS'){
            next()
        }
        try{
            const token = req.headers.authorization?.split(' ')[1]
            if (!token){
                return res.status(401).json({message: "Пользователь не авторизован"})
            }
            const user = jwt.verify(token, process.env.SECRET_KEY || 'secretKey')
            const userRole = (user as IUser).role
            if (userRole !== role ){
                return res.status(403).json({message: "Нет доступа"})
            }
            req.body.user = user
            next()
        }catch(e){
            res.status(401).json({message: "Пользователь не авторизован"})
        }
    }
} 

export default checkRoleMiddleware