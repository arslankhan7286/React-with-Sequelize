const { createCategory, findAllCategories } = require("../controller/category");
const { Router } = require('express');

const categoryRouter = Router()

categoryRouter.post("/create", createCategory); // Create new customer
categoryRouter.get("/findAll", findAllCategories); // find All Customers
categoryRouter.get("/test", (req, res) => {
    res.status(200).send({
        data: "Welcome Node Sequlize API v1/Category",
    });
});

module.exports = categoryRouter