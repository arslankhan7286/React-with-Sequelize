const { createEmployee, findAllEmployee } = require("../controller/employee");
const { Router } = require('express');

const employeRouter = Router()

employeRouter.post("/create", createEmployee); // Create new customer
employeRouter.get("/findAll", findAllEmployee); // find All Customers
employeRouter.get("/test", (req, res) => {
    res.status(200).send({
        data: "Welcome Node Sequlize API v1/Employe",
    });
});

module.exports = employeRouter