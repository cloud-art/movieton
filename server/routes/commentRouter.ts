import { Router } from "express";
const commentRouter = Router()

// commentRouter.post('/')
commentRouter.get('/', (req, res) => {
    res.json({route:'comment'})
})

export default commentRouter