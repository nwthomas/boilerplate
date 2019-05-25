const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * Defines the user schema that MongoDB will use.
 *
 * Don't need to define the ID for the user itself as that
 * is automatically defined by MongoDB.
 */

const userSchema = new Schema({
  username: String,
  password: String,
  firstName: String,
  middleName: String,
  lastName: String,
  email: String,
  phone: String
});

module.exports = mongoose.model("User", userSchema);
