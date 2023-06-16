import { Model, Sequelize, DataTypes, UUIDV4 } from "sequelize";
import { Category_Seed } from "../seed/category.seed";
import { logger } from "@/api/v1/middlewares/logger";
// import { categoryInterface } from '@db/interfaces/category.interface'

export class Category extends Model {
  public id!: string;
  public name!: string;
  public details!: string;
}

export async function initCategory(sequelize: Sequelize) {
  Category.init(
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      details: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "category",
      modelName: "category",
      timestamps: false,
      freezeTableName: true,
    }
  );
}

export async function seedCategory(DB: any) {
  const category = await DB.findAndCountAll();
  if (!category.count) {
    const data: Array<Pick<Category, "id" | "name" | "details">> =
      Category_Seed;
    return await DB.bulkCreate(data, { returning: true });
  }
}
