import express from 'express'
import models from '../models'

class PersonController {
    async create(req: express.Request, res: express.Response){
        const {name, surname, birthday} = req.body
        const person = await models.Person.create({name, surname, birthday})
        return res.json(person)
    }

    async getAll(req: express.Request, res: express.Response){
        const persons = await models.Person.findAll()
        return res.json(persons)
    }
}

export default new PersonController()