import {  Model, Sequelize, DataTypes ,UUIDV4} from 'sequelize'
import { herbInterface } from '@db/interfaces/herb.interface'
import { Herb_Seed } from '@db/seed/herbs.seed'

export class Herb extends Model<herbInterface> implements herbInterface {
   public id!: string
   public name!: string
   public description!: string
   public botanicalName!: string
   public image!: string
   public effect!: number
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
            type: DataTypes.TEXT,
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
        image: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        sequelize,
        tableName: "herb",
        modelName: "herb",
        timestamps: true,
        freezeTableName: true
    })
}   


export async function seedHerb(DB: any){
    
    const Herbs = await DB.findAndCountAll() 

    if(!Herbs.count){
      const data: Array<Pick<Herb, "id" | "name" | "description" | "botanicalName" | "effect">> = Herb_Seed;
      return await DB.bulkCreate(data, { returning: true });
    }
  
  }