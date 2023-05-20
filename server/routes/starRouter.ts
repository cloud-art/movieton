import { Router } from "express";
import StarController from "../controllers/starRouter";

const starController = new StarController()
const starRouter = Router()

starRouter.post('/create', starController.create)
starRouter.get('/get', starController.get)

export default starRouter