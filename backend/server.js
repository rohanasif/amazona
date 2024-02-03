import express from "express";
import products from "./data/products.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import colors from "colors";
import productsRoutes from "./routes/productRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/OrderRoutes.js";

const app = express();
app.use(express.json());
dotenv.config();
connectDB();

app.get("/", (req, res) => {
  res.send("api is running");
});

app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
});

app.use("/api/products", productsRoutes);
app.use("/api/users", userRoutes)
app.use("/api/orders", orderRoutes)


// app.use("/api/profile", userRoutes);

// app.get('/api/products', (req, res) => {
//     res.send(products)
// })

// app.get('/api/products/:id', (req, res) => {
//     const product = products.find(p => p._id == req.params.id)
//     res.json(product)
// })
app.use(notFound);
app.use(errorHandler);
const port = process.env.PORT;

app.listen(port, () => {
  console.log(
    `Server is running in ${process.env.MODE} mode on port ${port}`.yellow.bold
  );
});
