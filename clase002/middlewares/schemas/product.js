const Joi = require("@hapi/joi");

/* express-validator | hapi/joi / yup */

// create -> objeto
// update -> id + objeto

const schemas = {
  create: Joi.object().keys({
    title: Joi.string()
      .required()
      .messages({ "any.required": "El titulo es obligatorio" }),
    price: Joi.number().integer().positive().required().messages({
      "any.required": "El precio es obligatorio",
      "any.positive": "El número debe ser positivo",
    }),
    available_quantity: Joi.number().required(),
    description: Joi.string().min(5).max(100).required(),
    condition: Joi.string().required(),
    warranty: Joi.string().required(),
  }),
};

module.exports = schemas;
