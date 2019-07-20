const db = require('../database/dbConfig.js');

module.exports = {
  find,
  findByThingId,
  findByUserId,
  insert,
  update,
  remove
};

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

function insert(thing) {
  return db('things').insert(thing);
}

function update(id, changes) {
  return db('things')
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db('things')
    .where({ id })
    .del();
}
