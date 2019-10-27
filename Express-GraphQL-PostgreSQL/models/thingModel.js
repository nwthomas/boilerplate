const db = require('../database/dbConfig.js');

function find() {
  return db('things');
}

function findByThingId(id) {
  return db('things')
    .where({ id })
    .first()
    .then(ids => ids);
}

function findByUserId(userId) {
  return db('things').where({ userId });
}

async function insert(thing) {
  const mutation = await db('things').insert(thing);
  return findByThingId(userId);
}

async function update(id, changes) {
  await db('things')
    .where({ id })
    .update(changes);
  return findByUserId(id);
}

function remove(id) {
  return db('things')
    .where({ id })
    .del();
}

module.exports = {
  find,
  findByThingId,
  findByUserId,
  insert,
  update,
  remove
};
