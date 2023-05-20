import { Router } from "express";
const filmRouter = Router()

// filmRouter.post('/')
filmRouter.get('/', (req, res) => {
    res.json({route:'film'})
})

export default filmRouter