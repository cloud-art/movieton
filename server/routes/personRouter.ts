import { Router } from "express";
import PersonController from "../controllers/personRouter";

const personRouter = Router()

personRouter.post('/create', PersonController.create)
personRouter.get('/get', PersonController.get)

export default personRouter