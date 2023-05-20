import { Router } from "express";
const reviewRouter = Router()

// reviewRouter.post('/')
reviewRouter.get('/', (req, res) => {
    res.json({route:'review'})
})

export default reviewRouter