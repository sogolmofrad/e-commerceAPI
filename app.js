import express from "express"
import dotenv from "dotenv"
import { router } from "./routes/orderRoutes.js"
import bodyParser from "body-parser"

dotenv.config()
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.raw())
app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.send("the server is working!")
})

app.use("/api/v1/orders", router)

app.listen(process.env.PORT, () => {
    console.log(`the server is running on http://localhost:${process.env.PORT}`)
})
