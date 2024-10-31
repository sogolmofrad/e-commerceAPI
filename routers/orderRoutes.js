import express from "express"

import {
    getOrderById,
    createOrder,
    deleteOrder,
    getAllOrders,
    updateOrder,
} from "../controllers/orderController.js"
import { validateCreateOrder, validateUpdateOrder } from '../middleware/validationMiddleware.js';

export const orderRouter = express.Router()

orderRouter.route("/")
    .get(getAllOrders)
    .post(validateCreateOrder, createOrder); // Validation middleware
    orderRouter.route("/:id")
    .get(getOrderById)
    .patch(validateUpdateOrder, updateOrder) // Validation middleware
    .delete(deleteOrder);
