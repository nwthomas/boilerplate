const db = require('../database/dbConfig.js');

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

async function insert(creds) {
  const { username } = creds;
  const result = await db('users').insert(creds);
  return await findByUsername(username);
}

async function update(id, changes) {
  const result = await db('users')
    .where({ id })
    .update(changes);
  return await findById(id);
}

async function remove(id) {
  const result = await db('users')
    .where({ id })
    .del();
  return id;
}

module.exports = {
  find,
  findById,
  findByUsername,
  insert,
  update,
  remove
};
