const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync();

const hash = (payload) => bcrypt.hashSync(payload, salt); // string -> guarda bd
const unhash = (payload, hashedPayload) =>
  bcrypt.compareSync(payload, hashedPayload); // true o false

module.exports = { hash, unhash };
