const db = require('../database/dbConfig.js');

module.exports = {
  find,
  findByWalletId,
  findByWalletAddress,
  findByUserId,
  insert,
  update,
  remove
};

function find() {
  return db('wallets');
}

function findByWalletId(id) {
  return db('wallets')
    .where({ id })
    .first()
    .then(ids => ids);
}

function findByWalletAddress(walletAddress) {
  return db('wallets')
    .where({ walletAddress })
    .first();
}

function findByUserId(userId) {
  return db('wallets').where({ userId });
}

function insert(wallet) {
  return db('wallets').insert(wallet);
}

function update(id, changes) {
  return db('wallets')
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db('wallets')
    .where({ id })
    .del();
}
