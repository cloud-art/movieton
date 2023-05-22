import { Router } from "express";
import PersonController from "../controllers/personRouter";

const personRouter = Router()

personRouter.post('/create', PersonController.create)
personRouter.get('/getAll', PersonController.getAll)
personRouter.get('/getOne/:id', PersonController.getOne)

export default personRouter