const { decodeToken } = require("../services/auth");

const securedUser = (req, res, next) => {
  try {
    const { authorization } = req.headers; // req.headers.authorization
    const { _id } = decodeToken(authorization); // error
    req.id = _id;
    next();
  } catch (e) {
    console.error(e);
    res
      .status(401)
      .json({ message: "Unauthorized", img: "https://http.cat/401" });
  }
};

module.exports = { securedUser };
