require('dotenv').config()
import { Sequelize, Dialect } from 'sequelize';
import { initUser } from '@db/models/users.model';
import { initHerb } from '@db/models/herbs.model';
import { initReview } from '@db/models/reviews.model';
import { app } from '@/app';
import { PORT } from '@/env'
import { logger } from '@/api/v1/middlewares/logger';
const DB_DRIVER =  process.env.DB_DRIVER as Dialect

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
                    logger.info(`DB & Connected on port ${PORT}`)
                })    
            })
            .catch((err: any) => logger.error(err))

        }catch(err){
            logger.info("Couldn't connect to the database")
            logger.error(err)
        }

    }

    async getDBInstance(){
        try{
            await this.sequelize.authenticate()
        }catch(err){
            logger.error(err)
        }
    }

}

export const getDBInstance = async () => {
    const Db = new DB();
    await Db.authenticate();
    // await DB.seed();
    return DB;
}