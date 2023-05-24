import {  Model, Sequelize, DataTypes ,UUIDV4} from 'sequelize'
import { reviewInterface } from '../interfaces/review.interface'


export class Review extends Model<reviewInterface> implements reviewInterface {
   public id!: string
   public comment!: string
   public rating!: number
   public herbID!: string
   public userID!: string
}

export async function initReview(sequelize: Sequelize){
    Review.init({
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: UUIDV4
          },
        comment: {
            type: DataTypes.STRING,
            allowNull: false
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false
            },
        herbID: {
            type: DataTypes.STRING,
            allowNull: false
            },
        userID: {
            type: DataTypes.STRING,
            allowNull: false
            },
    }, {
        sequelize,
        tableName: "review",
        modelName: "review",
        timestamps: true,
        freezeTableName: true
    })
}   