exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", tbl => {
    tbl.increments("id");
    tbl.string("username", 128).notNullable();
    tbl.string("password", 128).notNullable();
    tbl.unique("username", "uq_user_username");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};
