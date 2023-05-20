import { Router } from "express";
import CommentsController from "../controllers/commentRouter";

const commentController = new CommentsController()
const commentRouter = Router()

commentRouter.post('/create', commentController.create)
commentRouter.get('/get', commentController.get)

export default commentRouter