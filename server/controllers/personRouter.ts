import express from 'express'
import models from '../models'
import { IActivity } from '../types/IActivity'

class PersonController {
    async create(req: express.Request, res: express.Response){
        const {name, surname, birthday} = req.body
        const activitiesQuery = req.body.activities
        const person = await models.Person.create({name, surname, birthday})
        
        if (activitiesQuery){
            const activities = JSON.parse(String(activitiesQuery))
            activities.forEach((activity: IActivity) => {
                let {id}: any = person
                models.PersonActivity.create({
                    personId: id,
                    activityId: activity.id,
                })
            })
        }
        
        return res.json(person)
    }

    async getAll(req: express.Request, res: express.Response){
        const persons = await models.Person.findAndCountAll(
            {
                include: [{model: models.Activity, as: 'activities'}]
            }
        )
        return res.json(persons)
    }

    async getOne(req: express.Request, res: express.Response){
        const {id} = req.params
        const person = await models.Person.findOne(
            {
                where: {id},
                include: [{model: models.Activity, as: 'activities'}]
            }
        )
        return res.json(person)
    }
}

export default new PersonController()