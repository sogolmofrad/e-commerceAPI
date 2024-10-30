import Order from "../models/order.js"

export const getAllOrders = async (req, res) => {
    const orders = await Order.findAll()

    return res.status(200).json({
        status: "success",
        count: orders.length,
        data: orders,
    })
}

export const getOrderById = async ({ params }, res) => {
    const orderId = params.id
    if (!Number.isSafeInteger(orderId * 1))
        return res.status(400).json({ message: "Invalid Id" })

    try {
        const order = await Order.findByPk(orderId)
        if (!order)
            return res.status(404).json({
                message: "order does not exist",
            })

        return res.status(200).json({
            data: order,
        })
    } catch (error) {
        return res.status(500).json({
            message: "unexpected error",
            details: error,
        })
    }
}

export const createOrder = async (req, res) => {
    try {
        const createdOrder = await Order.create(req.body)
        return res.status(200).json({
            data: createdOrder.toJSON(),
        })
    } catch (error) {
        return res.status(500).json({
            message: "Error! Could not create order",
            details: error,
        })
    }
}

export const updateOrder = async (req, res) => {
    const orderId = parseInt(req.params.id)
    if (!Number.isSafeInteger(orderId))
        return res.status(400).json({ message: "Invalid Id" })

    try {
        const order = await Order.findByPk(orderId)

        if (!order) {
            return res.status(404).json({
                message: "Order does not exist",
            })
        }

        await order.update(req.body)

        return res.status(200).json({
            data: { id: orderId },
        })
    } catch (error) {
        return res.status(500).json({
            message: "Error! Could not update order",
            details: error.message || error,
        })
    }
}

export const deleteOrder = async (req, res) => {
    const orderId = parseInt(req.params.id)
    if (!Number.isSafeInteger(orderId * 1))
        return res.status(400).json({ message: "Invalid Id" })

    try {
        const order = await Order.findByPk(orderId)
        if (!order) {
            return res.status(404).json({
                message: "order does not exist",
            })
        }

        await order.destroy()
        return res.status(200).json({
            data: order,
        })
    } catch (error) {
        return res.status(500).json({
            message: "Error... could not delete order",
            details: error.message,
        })
    }
}
