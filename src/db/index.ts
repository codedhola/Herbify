require('dotenv').config()
import { Sequelize, Dialect } from "sequelize";

const DB_DRIVER =  process.env.DB_DRIVER as Dialect

// console.log(DB_DRIVER)

const sequelizeConnection = new Sequelize("", "Hola", "developer", {
    host: "db",
    dialect: DB_DRIVER
})

export {
    sequelizeConnection
}