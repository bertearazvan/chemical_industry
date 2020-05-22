exports.seed = function (knex) {
  // Inserts seed entries
  return knex('delivery_statuses').insert([
    { id: 1, name: 'initiated' },
    { id: 2, name: 'pending' },
    { id: 3, name: 'accepted by depot' },
    { id: 4, name: 'completed' },
  ]);
};
