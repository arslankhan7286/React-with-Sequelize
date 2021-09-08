const { createCustomer, findAllCustomers } = require("../controller/customers");
const { Router } = require('express');

const customerRouter = Router()

customerRouter.post("/create", createCustomer); // Create new customer
customerRouter.get("/findAll", findAllCustomers); // find All Customers
customerRouter.get("/test", (req, res) => {
    res.status(200).send({
        data: "Welcome Node Sequlize API v1/Customer",
    });
});

module.exports = customerRouter