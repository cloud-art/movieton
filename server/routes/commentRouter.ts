import { Router } from "express";
import CommentsController from "../controllers/commentRouter";

const commentRouter = Router()

commentRouter.post('/create', CommentsController.create)
commentRouter.get('/get', CommentsController.get)

export default commentRouter