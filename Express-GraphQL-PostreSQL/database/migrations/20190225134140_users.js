exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', tbl => {
    tbl.increments('id');
    tbl.string('username', 128).notNull();
    tbl.string('firstName', 256);
    tbl.string('middleName', 256);
    tbl.string('lastName', 256);
    tbl.string('email', 256).notNull();
    tbl.string('phone', 256);
    tbl.string('street1', 256);
    tbl.string('street2', 256);
    tbl.string('city', 256);
    tbl.string('state', 128);
    tbl.string('zip', 128);
    tbl.unique('username', 'uq_user_username');
    tbl.unique('email', 'uq_user_email');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
