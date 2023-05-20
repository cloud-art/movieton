import { Router } from "express";
import UserController from "../controllers/userController";

const userController = new UserController()
const userRouter = Router()

userRouter.post('/registration', userController.registration)
userRouter.post('/login', userController.login)
userRouter.get('/auth', userController.check)

export default userRouter