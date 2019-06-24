const cleaner = require("knex-cleaner");

/**
 * https://www.npmjs.com/package/knex-cleaner
 *
 * Knex Cleaner scrubs the DB to help create clean tables using Knex
 */

exports.seed = knex => {
  return cleaner.clean(knex);
};
