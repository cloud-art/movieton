import { Router } from "express";
import ActivitiesController from "../controllers/activityRouter";

const activityRouter = Router()

activityRouter.post('/create', ActivitiesController.create)
activityRouter.get('/getAll', ActivitiesController.getAll)

export default activityRouter