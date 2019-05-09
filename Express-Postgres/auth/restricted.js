const jwt = require("jsonwebtoken");

// Import secret from config file
const secrets = require("../config/secrets.js");

module.exports = (req, res, next) => {
  const token = req.headers.authorization; // Select token from headers in req
  if (token) {
    jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
      if (err) {
        res
          .status(401)
          .json({ message: "Not authorized. Please try logging in again." });
      } else {
        req.decodedToken = decodedToken;
        next();
      }
    });
  } else {
    res
      .status(401)
      .json({ message: "Please include a login token and try again." });
  }
};
