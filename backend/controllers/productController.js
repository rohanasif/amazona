import asynceHandle from "express-async-handler";
import Product from "../models/productModel.js";



const getProducts = asynceHandle(async (req, res) => {
    const products = await Product.find({})
    res.json(products);
})


const getProductById = asynceHandle(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
        res.json(product)
    } else {
        res.status(404)
        throw new Error("Product not found")
    }
})

const deleteProduct = asynceHandle(async (req, res) => {
  const product = req.params.id;

  if (product) {
    await Product.findByIdAndDelete(product);
    res.send({ message: "Product deleted successfully" });
  } else {
    res.status(404);
    throw new Error("Product Not Found");
  }
});


export {getProducts , getProductById , deleteProduct}