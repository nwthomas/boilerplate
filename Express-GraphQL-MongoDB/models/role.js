const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * Defines the things schema that MongoDB will use.
 *
 * Don't need to define the ID for the thing itself as that
 * is automatically defined by MongoDB.
 */

const roleSchema = new Schema({
  role: String
});

module.exports = mongoose.model("Role", roleSchema);
