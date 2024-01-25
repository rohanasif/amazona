import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import colors from "colors";
import productsRoutes from "./routes/productRoutes.js";

const app = express();
dotenv.config();
connectDB();

app.get("/", (req, res) => {
  res.send("api is running");
});

app.use("/api/products", productsRoutes);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(
    `Server is running in ${process.env.MODE} mode on port ${port}`.yellow.bold
  );
});
