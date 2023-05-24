import { Router } from "express";
import CommentsController from "../controllers/commentRouter";

const commentRouter = Router()

commentRouter.post('/create', CommentsController.create)
commentRouter.get('/getAll', CommentsController.getAll)
commentRouter.get('/getOne/:id', CommentsController.getOne)

export default commentRouter