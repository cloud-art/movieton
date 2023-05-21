import { Router } from "express";
import StarController from "../controllers/starRouter";

const starRouter = Router()

starRouter.post('/create', StarController.create)
starRouter.get('/get', StarController.get)

export default starRouter