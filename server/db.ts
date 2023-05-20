import { Sequelize } from "sequelize"
import dotenv from 'dotenv'
dotenv.config()

const sequelize = new Sequelize(
    process.env.DB_NAME || 'unknown',
    process.env.DB_USER || 'unknown',
    process.env.DB_PASSWORD || 'unknown',
    {
        dialect: 'postgres',
        host: process.env.DB_HOST || 'unknown',
        port: parseInt(process.env.DB_PORT || '0'),
    },
)

export default sequelize