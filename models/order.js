import { DataTypes } from "sequelize";
import User from "./user.js";
import Product from "./product.js"; 
import sequelize from "../db/db.js";
import OrderProduct from "./OrderProduct.js";

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
    }
);
//// Changes/////////////////////////////////////////////////////////////////////////
Order.belongsToMany(Product, {
    through: OrderProduct, 
    foreignKey: "orderId", 
    otherKey: "productId" 
});

Product.belongsToMany(Order, {
    through: OrderProduct, 
    foreignKey: "productId", 
    otherKey: "orderId" 
});

User.hasMany(Order, { foreignKey: "userid" });
Order.belongsTo(User, { foreignKey: "userid" });

export default Order;
