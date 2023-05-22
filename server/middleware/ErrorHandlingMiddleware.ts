import express from 'express'
import ApiError from "../ApiError";

const ErrorHandlingMiddleware = (err: express.Errback, req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (err instanceof ApiError){
        return res.status(parseInt(err.name)).json({message: err.message})
    }
    // return res.status(500).json({message: 'Неизвестная ошибка'})
    return res.json(err)
}

export default ErrorHandlingMiddleware