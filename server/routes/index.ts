import { Router } from "express";
import activityRouter from "./activityRouter";
import commentRouter from "./commentRouter";
import favouritesRouter from "./favouritesRouter";
import filmRouter from "./filmRouter";
import genreRouter from "./genreRouter";
import personRouter from "./personRouter";
import reviewRouter from "./reviewRouter";
import starRouter from "./starRouter";
import userRouter from "./userRouter";

const router = Router()

router.use('/activity', activityRouter)
router.use('/comment', commentRouter)
router.use('/favourites', favouritesRouter)
router.use('/film', filmRouter)
router.use('/genre', genreRouter)
router.use('/person', personRouter)
router.use('/review', reviewRouter)
router.use('/star', starRouter)
router.use('/user', userRouter)

export default router