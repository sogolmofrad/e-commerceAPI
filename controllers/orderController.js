export const getAllOrders = (req, res) => {
    const orders = []

    res.status(200).json({
        status: "success",
        count: orders.length,
        data: orders,
    })
}

export const getOrderById = (req, res) => {
    const id = req.params.id * 1
    const order = [].find((el) => el.id === id)

    if (!order) {
        return res.status(404).jason({
            status: "not found",
            message: "Invalid Id",
        })
    }

    res.status(200).json({
        status: "success",
        data: order,
    })
}

export const createOrder = (req, res) => {
    return res.status(201).json({
        data: { id: 1 },
    })
    // 1. connect to postgresql
    // 2. add order into database
}

export const updateOrder = (req, res) => {
    res.status(200).json({
        data: { id: 1 },
    })
}

export const deleteOrder = (req, res) => {
    res.status(204).json({
        data: { id: 1 },
    })
}
