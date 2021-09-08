// User Creation 
const Users = require('../models').Users;
const { auth_Schema } = require('../Validation/auth_Schema')


module.exports = {

  // create New User
  async createUser(req, res) {
    try {
      console.log("create")
      const result = await auth_Schema.validateAsync(req.body)
      console.log("result>>>>>>>>>>>>>>>>>>>>>>", result)
      if (result) {
        try {
          const alreadyExistCollection = await Users.findOne({
            where: {
              email: result.email
            }
          })
          if (alreadyExistCollection) {
            res.status(400).send("Email Already Exists");
            return;
          } else {
            const userCollection = await Users.create({
              name: result.name,
              email: result.email,
              password: result.password,
              address: result.address,
              city: result.city,
              postalCode: result.postalCode,
              country: result.country,
            });
            res.status(200).send(userCollection);
          }

        } catch (error) {
          if (error.isJoi === true) {
            error.status = 422
            console.log(error)
          }

        }
      }

    }
    catch (e) {
      res.status(422).json({
        message: "Error Occured",
        error: e
      })
    }

  },


  // login api 
  async loginUser(req, res) {
    console.log("Request", req.body);
    console.log("Modle", Users)
    try {
      const userCollection = await Users.findOne({
        where: {
          email: req.body.email
        }
      });
      if (userCollection) {
        console.log("Collection ", userCollection.password);
        if (userCollection.password === req.body.password) {
          res.status(200).send(userCollection);
        } else {
          res.status(400).send("Invalid Password");
        }
      } else {
        res.status(400).send("Invalid Email");
      }
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
  }

}
