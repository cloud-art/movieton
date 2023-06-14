import { Router } from "express";
import ReviewController from "../controllers/reviewRouter";

const reviewRouter = Router()

reviewRouter.post('/create', ReviewController.create)
reviewRouter.get('/getAll', ReviewController.getAll)
reviewRouter.get('/getAll/:id/:limit?', ReviewController.getAllMovie)
reviewRouter.get('/getOne/:id', ReviewController.getOne)
reviewRouter.delete('/delete/:id', ReviewController.deleteReview)

export default reviewRouter