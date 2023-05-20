import { Router } from "express";
const personRouter = Router()

// personRouter.post('/')
personRouter.get('/', (req, res) => {
    res.json({route:'person'})
})

export default personRouter