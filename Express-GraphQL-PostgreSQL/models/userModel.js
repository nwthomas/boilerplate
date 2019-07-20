const db = require('../database/dbConfig.js');

module.exports = {
  find,
  findById,
  findByUsername,
  insert,
  update,
  remove
};

function find() {
  return db('users');
}

function findById(id) {
  return db('users')
    .where({ id })
    .first();
}

function findByUsername(username) {
  return db('users')
    .where({ username })
    .first();
}

function insert(creds) {
  return db('users').insert(creds);
}

function update(id, changes) {
  return db('users')
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db('users')
    .where({ id })
    .del();
}
