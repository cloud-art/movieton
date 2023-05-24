import { Router } from "express";
import StarController from "../controllers/starRouter";

const starRouter = Router()

starRouter.post('/create', StarController.create)
starRouter.get('/getAll', StarController.getAll)
starRouter.get('/getOne/:id', StarController.getOne)

export default starRouter