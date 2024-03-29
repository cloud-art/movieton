import { Router } from "express";
import UserController from "../controllers/userController";
import authMiddleware from "../middleware/authMiddleware";

const userRouter = Router()

userRouter.post('/registration', UserController.registration)
userRouter.post('/login', UserController.login)
userRouter.get(
        '/auth', 
        authMiddleware, 
        UserController.check
    )
userRouter.get('/getAll', UserController.getAll)
userRouter.get('/getOne/:id', UserController.getOne)

export default userRouter