require('dotenv').config()
import { Sequelize, Dialect } from 'sequelize';
import { initUser } from './models/users.model';
import { initHerb } from './models/herbs.model';
import { initReview } from './models/reviews.model';
import { app } from '@/app';
import { PORT } from '@/env'
const DB_DRIVER =  process.env.DB_DRIVER as Dialect

// console.log(DB_DRIVER)

export class DB {
    sequelize: any
    user: any
    herb: any
    review: any
    admin: any
    images: any
    constructor(){
        this.sequelize = new Sequelize("herbify", "postgres", "developer", {
            host: "localhost",
            dialect: DB_DRIVER  
        })
        initUser(this.sequelize)
        initHerb(this.sequelize)
        initReview(this.sequelize)

        this.user = this.sequelize.models.user
        this.herb = this.sequelize.models.herb
        this.review = this.sequelize.models.review

    }

    async associate(){
        
    }

    async authenticate(){
        try{
            await this.associate()

            await this.sequelize.sync({alter: true})
            .then(() => {
                app.listen(PORT, () => {
                    console.log(`DB & Connected on port ${PORT}`)
                })    
            })
            .catch((err: any) => console.log(err))

        }catch(err){
            console.log("Couldn't connect to the database")
            console.log(err)
        }

    }

    async getDBInstance(){
        try{
            await this.sequelize.authenticate()
        }catch(err){
            console.log(err)
        }
    }

}

// const sequelizeConnection = new Sequelize("", "Hola", "developer", {
//     host: "db",
//     dialect: DB_DRIVER
// })

// export const sequelizeConnection = new Sequelize("postgres", "postgres", "developer", {
//     host: "localhost",
//     dialect: DB_DRIVER  
// })

export const getDBInstance = async () => {
    const Db = new DB();
    await Db.authenticate();
    // await DB.seed();
    return DB;
}