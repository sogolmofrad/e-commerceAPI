import express from "express"

import {
    getOrderById,
    createOrder,
    deleteOrder,
    getAllOrders,
    updateOrder,
} from "../controllers/orderController.js"

export const router = express.Router()

router.route("/").get(getAllOrders).post(createOrder)

router.route("/:id").get(getOrderById).patch(updateOrder).delete(deleteOrder)
