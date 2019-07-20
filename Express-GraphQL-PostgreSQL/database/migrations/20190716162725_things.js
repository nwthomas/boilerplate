exports.up = function(knex) {
  return knex.schema.createTable('things', tbl => {
    tbl.increments();
    tbl.string('name', 256);
    tbl
      .integer('userId')
      .unsigned()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .notNull();
    tbl.unique('name', 'uq_wallet_name');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('things');
};
