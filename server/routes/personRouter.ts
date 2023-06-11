import { Router } from "express";
import PersonController from "../controllers/personRouter";
import checkRoleMiddleware from "../middleware/checkRoleMiddleware";

const personRouter = Router()

personRouter.post(
        '/create', 
        // checkRoleMiddleware("ADMIN"), 
        PersonController.create
    )
personRouter.get('/getAll', PersonController.getAll)
personRouter.get('/getOne/:id', PersonController.getOne)

export default personRouter