import { Router } from "express";
import ActivitiesController from "../controllers/activityRouter";

const activityController = new ActivitiesController()
const activityRouter = Router()

activityRouter.post('/create', activityController.create)
activityRouter.get('/get', activityController.get)

export default activityRouter