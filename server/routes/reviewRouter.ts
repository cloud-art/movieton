import { Router } from "express";
import ReviewController from "../controllers/reviewRouter";

const reviewRouter = Router()

reviewRouter.post('/create', ReviewController.create)
reviewRouter.get('/getAll', ReviewController.getAll)
reviewRouter.get('/getAll/:id/:limit', ReviewController.getAllMovie)
reviewRouter.get('/getOne/:id', ReviewController.getOne)

export default reviewRouter