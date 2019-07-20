require('dotenv').config();

// Postgres imports
const pg = require('pg');
pg.defaults.ssl = true;

// Production database connection
const dbConnection = process.env.DATABASE_URL || localPgConnection;

// Postgres configurations
// Command for running postgres locally:
// knex migrate:latest --env production
// knex seed:run --env production
module.exports = {
  development: {
    client: 'pg',
    connection: dbConnection,
    migrations: {
      directory: './database/migrations',
      tablename: 'knex_migrations'
    },
    seeds: {
      directory: './database/seeds'
    },
    pool: {
      min: 2,
      max: 10
    },
    useNullAsDefault: true
  },

  testing: {
    // finish
  },

  production: {
    client: 'pg',
    connection: dbConnection,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './database/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './database/seeds'
    },
    useNullAsDefault: true
  }
};
