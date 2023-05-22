import { Router } from "express";
import ReviewController from "../controllers/reviewRouter";

const reviewRouter = Router()

reviewRouter.post('/create', ReviewController.create)
reviewRouter.get('/getAll', ReviewController.getAll)

export default reviewRouter