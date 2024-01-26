import express from "express";
import dotenv from "dotenv";
import dbConnection from "./congiguration/dbConnect.js";
import colors from "colors";
import productRoutes from "./Routes/productRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
console.log(colors, "heloo coors");

const app = express();

app.use(express.json());
dotenv.config();
dbConnection();
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.json("API is running");
});

const PORT = process.env.PORT || 8002;

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(
    `server is running on ${process.env.NODE_ENV} mode on port ${PORT}.rainbow.bold`
  );
});
