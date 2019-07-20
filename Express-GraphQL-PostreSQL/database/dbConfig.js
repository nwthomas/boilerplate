// Import knex dependency and setup knexfile configuration for knex
const knex = require('knex');
require('dotenv').config();

// Knex configuration
const db = process.env.DB_ENV || 'development'; // Setup for deployment on heroku
const knexConfig = require('../knexfile.js')[db]; // Assignment

// Export new knex configuration
module.exports = knex(knexConfig);
