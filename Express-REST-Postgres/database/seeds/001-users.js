const bcrypt = require("bcryptjs");

exports.seed = function(knex, Promise) {
  return knex("users")
    .truncate()
    .then(function() {
      return knex("users").insert([
        { username: "admin", password: bcrypt.hashSync("password", 14) }
      ]);
    });
};
