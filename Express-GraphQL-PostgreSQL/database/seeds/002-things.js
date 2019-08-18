exports.seed = function(knex) {
  return knex('things')
    .del()
    .then(function() {
      return knex('things').insert([
        {
          name: 'Chocolate',
          userId: 1
        },
        {
          name: 'Ice Cream',
          userId: 1
        }
      ]);
    });
};
