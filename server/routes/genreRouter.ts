import { Router } from "express";
const genreRouter = Router()

// genreRouter.post('/')
genreRouter.get('/', (req, res) => {
    res.json({route:'genre'})
})

export default genreRouter