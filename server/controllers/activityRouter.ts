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

    async getOne(req: express.Request, res: express.Response){
        const {id} = req.params
        const activity = await models.Activity.findOne(
            {
                where: {id},
            }
        )
        return res.json(activity)
    }
}

export default new ActivitiesController()