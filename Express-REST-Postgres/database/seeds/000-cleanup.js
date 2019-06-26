const cleaner = require("knex-cleaner");

/**
 * https://www.npmjs.com/package/knex-cleaner
 *
 * Knex Cleaner scrubs the DB to help create clean tables using Knex
 */

exports.seed = function(knex) {
  return cleaner.clean(knex, {
    ignoreTables: ["knex_migrations", "knex_migrations_lock"] // don't empty migration tables
  });
};
