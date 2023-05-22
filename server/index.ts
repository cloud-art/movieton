import express from 'express'
import sequelize from './db'
import fileUpload from 'express-fileupload'
import cors from 'cors'
import router from './routes'
import models from './models'
import ErrorHandlingMiddleware from './middleware/ErrorHandlingMiddleware'
import path from 'path'
import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT || 5001

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)

//last middleware
app.use(ErrorHandlingMiddleware)

models

const serverStart = async () => {
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch(e){
        console.log(e)
    }
}

serverStart()