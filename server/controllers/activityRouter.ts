import express from 'express'
import models from '../models'

class ActivitiesController {
    async create(req: express.Request, res: express.Response){
        const {title} = req.body
        const activity = await models.Activity.create({title})
        return res.json(activity)
    }

    async getAll(req: express.Request, res: express.Response){
        const activities = await models.Activity.findAll()
        return res.json(activities)
    }
}

export default new ActivitiesController()