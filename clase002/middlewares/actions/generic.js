const schemas = require("../schemas/generic");

const validateId = (req, res, next) => {
  const { value } = schemas.validateId.validate(parseInt(req.params.id));
  value === isNaN ? res.sendStatus(404) : next();
};
module.exports = { validateId };
