// models/Order.js
import { DataTypes } from "sequelize";
import User from "./User.js";
import Product from "./Product.js"; 
import sequelize from "../db/db.js";

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
            allowNull: true, 
        },
        total: {
            type: DataTypes.FLOAT, 
            allowNull: true, 
        },
    },
    {
        tableName: "orders",
        timestamps: false,
    },
);
////Inna's changes/////////////////////////////////////////////////////////////////////////
Order.belongsToMany(Product, {
    through: "OrderProducts",  
    foreignKey: "orderId",
});
Product.belongsToMany(Order, {
    through: "OrderProducts",
    foreignKey: "productId",
});

User.hasMany(Order, { foreignKey: "userid" });
Order.belongsTo(User, { foreignKey: "userid" });

export default Order;
