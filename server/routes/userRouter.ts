import { Router } from "express";
import UserController from "../controllers/userController";

const userRouter = Router()

userRouter.post('/registration', UserController.registration)
userRouter.post('/login', UserController.login)
userRouter.get('/auth', UserController.check)

export default userRouter