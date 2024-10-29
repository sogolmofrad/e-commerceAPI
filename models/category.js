import { DataTypes } from "sequelize"
import Product from "./product.js"
import sequelize from "../db/db.js"

const Category = sequelize.define(
    "Category",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    {
        tableName: "categories",
        timestamps: false,
    },
)

Category.hasMany(Product, { foreignKey: "categoryid" })

export default Category
