import { Router } from "express";
const userRouter = Router()

// userRouter.post('/')
userRouter.get('/', (req, res) => {
    res.json({route:'user'})
})

export default userRouter