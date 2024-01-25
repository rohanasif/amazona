import express from "express";
import products from "./data/products.js"
import dotenv from "dotenv"
import connectDB from "./config/db.js";
import colors from "colors";


const app = express()
dotenv.config()
connectDB()

app.get('/', (req, res) => {
    res.send("api is running")
})
app.get('/api/products', (req, res) => {
    res.send(products)
})

app.get('/api/products/:id', (req, res) => {
    const product = products.find(p => p._id == req.params.id)
    res.json(product)
})

const port = process.env.PORT

app.listen(port, () => {
    console.log (`Server is running in ${process.env.MODE} mode on port ${port}`.yellow.bold);
})
