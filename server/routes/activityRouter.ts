import { Router } from "express";
import ActivitiesController from "../controllers/activityRouter";
import checkRoleMiddleware from "../middleware/checkRoleMiddleware";

const activityRouter = Router()

activityRouter.post(
        '/create', 
        // checkRoleMiddleware("ADMIN"), 
        ActivitiesController.create
    )
activityRouter.get('/getAll', ActivitiesController.getAll)
activityRouter.get('/getOne/:id', ActivitiesController.getOne)

export default activityRouter