import { DataTypes } from "sequelize"
import sequelize from "../db/db.js"
import Category from "./category.js"

const Product = sequelize.define(
    "Product",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        category: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        image: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    {
        tableName: "products",
        timestamps: false,
    },
)

Category.hasMany(Product, { foreignKey: "categoryid" })
Product.belongsTo(Category, { foreignKey: "categoryid" })

export default Product
