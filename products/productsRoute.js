const express = require("express")
const productRoute = express.Router();
const productCtr = require("../products/productsController");


const listProduct = [productCtr.listProduct];
productRoute.get("/listsProduct", listProduct);

const AddProduct = [productCtr.addProduct];
productRoute.post("/AddProduct", AddProduct);

const getProdById = [productCtr.getProductById];
productRoute.get("/getProdByID/:id", getProdById);








module.exports = productRoute;