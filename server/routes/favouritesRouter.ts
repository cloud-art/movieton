import { Router } from "express";
const favouritesRouter = Router()

// favouritesRouter.post('/')
favouritesRouter.get('/', (req, res) => {
    res.json({route:'favourites'})
})

export default favouritesRouter