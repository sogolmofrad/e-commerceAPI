import express, { json } from 'express';
import dotenv from "dotenv";
import './db/db.js';

import categoryRouter from './routers/categoryRouter.js';

dotenv.config();
const app = express();
app.use(json());
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("the server is working!");
});

app.use('/api/v1/categories', categoryRouter);

app.get('*', (req, res) => {
  res.status(500).send('Server error!');
});

app.listen(PORT, () => {
  console.log(`the server is running on http://localhost:${PORT}`);
});
