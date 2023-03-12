require('dotenv').config()
import { Sequelize, Dialect } from "sequelize";

const DB_DRIVER =  process.env.DB_DRIVER as Dialect

console.log(DB_DRIVER)

const sequelize = new Sequelize("", "Hola", "password", {
    host: "localhost",
    dialect: DB_DRIVER
})

export {
    sequelize
}