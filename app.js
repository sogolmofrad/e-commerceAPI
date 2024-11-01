import express from "express"
import dotenv from "dotenv"
import bodyParser from "body-parser"

import { orderRouter } from "./routers/orderRoutes.js"
import { categoryRouter } from "./routers/categoryRouter.js"
import { productsRouter } from "./routers/productsRouter.js";
import { userRouter } from "./routers/userRouter.js"

dotenv.config()
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.raw())
app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.send("the server is working!")
})

app.use("/api/v1/orders", orderRouter)
app.use("/api/v1/users", userRouter)
app.use("/api/v1/products", productsRouter)
app.use("/api/v1/categories", categoryRouter)

app.listen(process.env.PORT, () => {
    console.log(`the server is running on http://localhost:${process.env.PORT}`)
})
