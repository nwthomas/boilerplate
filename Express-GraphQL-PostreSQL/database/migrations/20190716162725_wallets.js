exports.up = function(knex) {
  return knex.schema.createTable('wallets', tbl => {
    tbl.increments();
    tbl.string('walletAddress', 256);
    tbl
      .integer('userId')
      .unsigned()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .notNull();
    tbl.unique('walletAddress', 'uq_wallet_walletAddress');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('wallets');
};
