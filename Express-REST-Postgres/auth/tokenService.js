const jwt = require("jsonwebtoken");

const secrets = require("../config/secrets.js");

module.exports = {
  generateToken
};

function generateToken(user) {
  const payload = {
    subject: user.id, // sub in payload is what the token is about if you want
    username: user.username,
    roles: ["Student"]
    // Include other data as is needed
  };

  // You can put in any days/hours/minutes that you want
  const options = {
    expiresIn: "1d"
  };

  // Returns a completed token to where this function is imported
  return jwt.sign(payload, secrets.jwtSecret, options);
}
