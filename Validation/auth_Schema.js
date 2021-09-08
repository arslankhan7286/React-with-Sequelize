const Joi = require('joi');
console.log("schemas")
const auth_Schema = Joi.object({
    name: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string().email().lowercase(),
    password: Joi.string().min(6).required(),
    address: Joi.string().required(),
    city: Joi.string().required(),
    postalCode: Joi.string().required(),
    country: Joi.string().required(),
})

module.exports = {
    auth_Schema
}