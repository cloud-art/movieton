import { Router } from "express";
import CommentsController from "../controllers/commentRouter";

const commentRouter = Router()

commentRouter.post('/create', CommentsController.create)
commentRouter.get('/getAll', CommentsController.getAll)
commentRouter.get('/getAll/:id/:limit?', CommentsController.getAllMovie)
commentRouter.get('/getOne/:id', CommentsController.getOne)
commentRouter.delete('/delete/:id', CommentsController.deleteComment)

export default commentRouter