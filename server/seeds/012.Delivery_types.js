exports.seed = function (knex) {
  // // Inserts seed entries
  return knex('delivery_types').insert([
    { id: 1, name: 'Delivery' },
    { id: 2, name: 'Pick up' },
  ]);
};
