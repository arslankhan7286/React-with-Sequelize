const { createSuppliers, findAllSuppliers } = require("../controller/supplier");
const { Router } = require('express');

const supplierRouter = Router()

supplierRouter.post("/create", createSuppliers); // Create new customer
supplierRouter.get("/findAll", findAllSuppliers); // find All Customers
supplierRouter.get("/test", (req, res) => {
    res.status(200).send({
        data: "Welcome Node Sequlize API v1/Suppliers",
    });
});

module.exports = supplierRouter