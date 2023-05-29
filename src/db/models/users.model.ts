import {  Model, Sequelize, DataTypes ,UUIDV4} from 'sequelize'
import { UserInterface } from '@db/interfaces/user.interface'
import { generateKey } from '@/api/v1/utils/generateAPIKey'

export class User extends Model<UserInterface> implements UserInterface {
   public id!: string
   public name!: string
   public email!: string
   public password!: string
   public api_key!: string
   
   toJSON(): object {
        return { ...this.get(), id: undefined}
   }
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
            unique: true
            },
        password: {
            type: DataTypes.STRING,
            allowNull: false
            },
        api_key: {
            type: DataTypes.STRING,
            defaultValue: await generateKey(16)
        }
    }, {
        sequelize,
        tableName: "user",
        modelName: "user",
        timestamps: true,
        freezeTableName: true
    })
}