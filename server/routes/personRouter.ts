import { Router } from "express";
import PersonController from "../controllers/personRouter";

const personController = new PersonController()
const personRouter = Router()

personRouter.post('/create', personController.create)
personRouter.get('/get', personController.get)

export default personRouter