const db = require('../database/dbConfig.js');

function find() {
  return db('things');
}

function findByThingId(id) {
  return db('things')
    .where({ id })
    .first();
}

async function findByUserId(userId) {
  const result = await db('things').where({ userId });
  return result;
}

async function insert(thing) {
  const result = await db('things').insert(thing);
  return thing;
}

async function update(id, changes) {
  await db('things')
    .where({ id })
    .update(changes);
  return findByThingId(id);
}

async function remove(id) {
  const result = await db('things')
    .where({ id })
    .del();
  return id;
}

module.exports = {
  find,
  findByThingId,
  findByUserId,
  insert,
  update,
  remove
};
