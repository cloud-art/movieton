import express from 'express'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

const authMiddleware = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    if(req.method === 'OPTIONS'){
        next()
    }
    try{
        const token = req.headers.authorization?.split(' ')[1]
        if (!token){
            return res.status(401).json({message: "Пользователь не авторизован"})
        }
        
        const user = jwt.verify(token, process.env.SECRET_KEY || 'secretKey')
        req.body.user = user
        next()
    }catch(e){
        res.status(401).json({message: "Пользователь не авторизован"})
    }
}

export default authMiddleware