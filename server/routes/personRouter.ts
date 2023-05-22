import { Router } from "express";
import PersonController from "../controllers/personRouter";

const personRouter = Router()

personRouter.post('/create', PersonController.create)
personRouter.get('/getAll', PersonController.getAll)

export default personRouter