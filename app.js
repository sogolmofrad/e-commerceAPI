import express from "express"
import dotenv from "dotenv"
import { router } from "./routes/orderRoutes.js"

dotenv.config()
const app = express()

app.get("/", (req, res) => {
    res.send("the server is working!")
})

app.use("/api/v1/orders", router)

app.listen(process.env.PORT, () => {
    console.log(`the server is running on http://localhost:${process.env.PORT}`)
})
