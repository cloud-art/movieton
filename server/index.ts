import express from 'express'
import sequelize from './db'
import models from './models'
import cors from 'cors'
import router from './routes'
import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT || 5001

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)

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