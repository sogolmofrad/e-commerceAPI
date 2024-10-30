import { DataTypes } from "sequelize"
import User from "./user.js"
import sequelize from "../db/db.js"

const Order = sequelize.define(
    "Order",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        userid: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: User,
                key: "id",
            },
        },
        products: {
            type: DataTypes.JSONB,
            allowNull: false,
        },
        total: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
    },
    {
        tableName: "orders",
        timestamps: false,
    },
)

User.hasMany(Order, { foreignKey: "userid" })
Order.belongsTo(User, { foreignKey: "userid" })

export default Order
