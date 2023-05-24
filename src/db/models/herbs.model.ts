import {  Model, Sequelize, DataTypes ,UUIDV4} from 'sequelize'
import { herbInterface } from '@db/interfaces/herb.interface'


export class Herb extends Model<herbInterface> implements herbInterface {
   public id!: string
   public name!: string
   public description!: string
   public botanicalName!: string
   public effect!: string
   public categoryID!: string
}

export async function initHerb(sequelize: Sequelize){
    Herb.init({
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: UUIDV4
          },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
            },
        botanicalName: {
            type: DataTypes.STRING,
            allowNull: true
            },
        effect: {
            type: DataTypes.INTEGER,
            allowNull: false
            },
        categoryID: {
            type: DataTypes.STRING,
            allowNull: false
            },
    }, {
        sequelize,
        tableName: "herb",
        modelName: "herb",
        timestamps: true,
        freezeTableName: true
    })
}   