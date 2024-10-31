// В OrderProduct.js
import { DataTypes } from "sequelize";
import sequelize from "../db/db.js";

const OrderProduct = sequelize.define("OrderProduct", {
    orderId: {
        type: DataTypes.INTEGER,
        references: {
            model: "orders",
            key: "id",
        },
    },
    productId: {
        type: DataTypes.INTEGER,
        references: {
            model: "products",
            key: "id",
        },
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: "order_products",
    timestamps: false,
});

export default OrderProduct;
