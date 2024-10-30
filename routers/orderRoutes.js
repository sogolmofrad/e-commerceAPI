import express from "express"

import {
    getOrderById,
    createOrder,
    deleteOrder,
    getAllOrders,
    updateOrder,
} from "../controllers/orderController.js"

export const orderRouter = express.Router()

orderRouter.route("/").get(getAllOrders).post(createOrder)
orderRouter
    .route("/:id")
    .get(getOrderById)
    .patch(updateOrder)
    .delete(deleteOrder)
