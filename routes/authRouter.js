const { createUser, loginUser } = require("../controller/user");
const { Router } = require('express');

const authRouter = Router()

authRouter.post("/create", createUser); // Create new customer
authRouter.get("/login", loginUser); // find All Customers
authRouter.get("/test", (req, res) => {
    res.status(200).send({
        data: "Welcome Node Sequlize API v1/auth",
    });
});

module.exports = authRouter