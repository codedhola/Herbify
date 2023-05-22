import {  Model, Sequelize, DataTypes ,UUIDV4} from 'sequelize'
import { UserInterface } from '@db/interfaces/user.interface'


export class User extends Model<UserInterface> implements UserInterface {
   public id!: string
   public name!: string
   public email!: string
   public password!: string
}

export async function initUser(sequelize: Sequelize){
    User.init({
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: UUIDV4
          },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            },
        password: {
            type: DataTypes.STRING,
            allowNull: false
            },
    }, {
        sequelize,
        tableName: "user",
        modelName: "user",
        paranoid: true,
        timestamps: true,
        freezeTableName: true
    })
}