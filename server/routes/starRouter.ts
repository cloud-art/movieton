import { Router } from "express";
const starRouter = Router()

// starRouter.post('/')
starRouter.get('/', (req, res) => {
    res.json({route:'star'})
})

export default starRouter