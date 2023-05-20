import { Router } from "express";
const activityRouter = Router()

// activityRouter.post('/')
activityRouter.get('/', (req, res) => {
    res.json({route:'activity'})
})

export default activityRouter