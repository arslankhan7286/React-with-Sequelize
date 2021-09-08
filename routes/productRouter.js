const { createProduct, findAllProducts } = require("../controller/product");
const { Router } = require('express');

const productRouter = Router()

productRouter.post("/create", createProduct); // Create new customer
productRouter.get("/findAll", findAllProducts); // find All Customers
productRouter.get("/test", (req, res) => {
    res.status(200).send({
        data: "Welcome Node Sequlize API v1/Product",
    });
});

module.exports = productRouter