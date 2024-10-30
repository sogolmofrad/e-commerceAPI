import express from "express";
import dotenv from "dotenv";
import "./db/db.js";
import userRouter from "./routers/userRouter.js";

dotenv.config();
const app = express();

app.use(express.json());

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("the server is working!");
});

app.use("/api/v1/users", userRouter);

app.listen(PORT, () => {
  console.log(`the server is running on http://localhost:${PORT}`);
});
