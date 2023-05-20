import { Router } from "express";
import ReviewController from "../controllers/reviewRouter";

const reviewController = new ReviewController()
const reviewRouter = Router()

reviewRouter.post('/create', reviewController.create)
reviewRouter.get('/get', reviewController.get)

export default reviewRouter