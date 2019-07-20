exports.seed = function(knex) {
  return knex('wallets')
    .del()
    .then(function() {
      return knex('wallets').insert([
        {
          walletAddress: '0xf6D396386cBA11618d9ceAA4d016C45c44C12fEB',
          userId: 1
        },
        {
          walletAddress: '0xf6D396386cBA11618d9ceAA4d016C45c44C12fEC',
          userId: 1
        },
        {
          walletAddress: '0xf6D396386cBA11618d9ceAA4d016C45c44C12fED',
          userId: 1
        },
        {
          walletAddress: '0xf6D396386cBA11618d9ceAA4d016C45c44C12fEE',
          userId: 2
        },
        {
          walletAddress: '0xf6D396386cBA11618d9ceAA4d016C45c44C12fEF',
          userId: 3
        },
        {
          walletAddress: '0xf6D396386cBA11618d9ceAA4d016C45c44C12fEG',
          userId: 3
        },
        {
          walletAddress: '0xf6D396386cBA11618d9ceAA4d016C45c44C12fET',
          userId: 5
        },
        {
          walletAddress: '0xf6D396386cBA11618d9ceAA4d016C45c44C12f34',
          userId: 10
        },
        {
          walletAddress: '0xf6D396386cBA11618d9ceAA4d016C45c44C12SDF',
          userId: 4
        },
        {
          walletAddress: '0xf6D396386cBA11618d9ceAA4d016C45c44C12YUI',
          userId: 7
        }
      ]);
    });
};
